import { useState, useRef, useEffect } from "react";
import { Image, Spinner } from "react-bootstrap";

const OptimizedImage = ({
	src,
	alt,
	className = "",
	fluid = false,
	priority = false,
	onClick,
	style = {},
	width,
	height,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [isInView, setIsInView] = useState(priority);
	const imgRef = useRef(null);

	useEffect(() => {
		if (priority) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.1, rootMargin: "50px" },
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, [priority]);

	const handleLoad = () => {
		setIsLoading(false);
	};

	const handleError = () => {
		setIsLoading(false);
		setHasError(true);
	};

	// If we have dimensions, we can compute a precise aspect ratio. This prevents
	// the masonry columns from collapsing and reflowing as images load in —
	// the container claims its correct height immediately, before any pixels arrive.
	const aspectRatio = width && height ? `${width} / ${height}` : undefined;

	if (hasError) {
		return (
			<div
				className={`image-error-placeholder ${className}`}
				style={{
					...style,
					aspectRatio,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#f8f9fa",
					border: "1px solid #dee2e6",
					borderRadius: "0.375rem",
					minHeight: aspectRatio ? undefined : "200px",
				}}
				onClick={onClick}
			>
				<div style={{ textAlign: "center", color: "#6c757d" }}>
					<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
						<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
					</svg>
					<p style={{ marginTop: "8px", fontSize: "14px" }}>Image failed to load</p>
				</div>
			</div>
		);
	}

	return (
		<div
			ref={imgRef}
			className={`image-container ${className}`}
			style={{
				position: "relative",
				// When we know the aspect ratio, set it on the wrapper so the column
				// reserves exactly the right amount of vertical space before the <img>
				// has loaded. Without this, each image pops in from zero height and
				// causes the entire masonry layout to reflow.
				aspectRatio,
				// Prevent the wrapper from collapsing to zero-height while the spinner
				// is showing and no intrinsic image size is available yet.
				minHeight: isLoading && !aspectRatio ? "200px" : undefined,
			}}
		>
			{isLoading && (
				<div
					style={{
						position: "absolute",
						inset: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#f8f9fa",
						borderRadius: fluid ? "0.375rem" : "0",
					}}
				>
					<Spinner animation="border" variant="secondary" />
				</div>
			)}
			{isInView && (
				<Image
					src={src}
					alt={alt}
					fluid={fluid}
					loading={priority ? "eager" : "lazy"}
					onLoad={handleLoad}
					onError={handleError}
					onClick={onClick}
					style={{
						...style,
						// Fill the aspect-ratio wrapper completely so there's no gap between
						// the placeholder size and the rendered image size.
						width: "100%",
						height: "100%",
						objectFit: "cover",
						opacity: isLoading ? 0 : 1,
						transition: "opacity 0.3s ease-in-out",
					}}
				/>
			)}
		</div>
	);
};

export default OptimizedImage;
