import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import { landingImages } from "../../data/landingImages";
import "../../styles/landing.css";

export default function Landing() {
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex(prevIndex =>
				prevIndex >= landingImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<OptimizedImage
				style={{marginTop:"-10rem"}}
				fluid
				src={`${import.meta.env.BASE_URL}${landingImages[imageIndex].src}`}
				alt={landingImages[imageIndex].alt}
				priority={true}
			/>
			<Link className="centered" to="/gallery">Cars. Portraits. Motorsport.</Link>
		</>
	);
}