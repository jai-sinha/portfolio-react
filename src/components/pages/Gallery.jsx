import { Modal } from "react-bootstrap";
import { useState } from "react";
import OptimizedImage from "../OptimizedImage";
import { galleryImages } from "../../data/galleryImages";
import "../../styles/gallery.css";

export default function Gallery() {
	const [show, setShow] = useState(false);
	const [selectedImage, setSelectedImage] = useState(galleryImages[1]);

	function handleShow(image) {
		setSelectedImage(image);
		setShow(true);
	}

	return (
		<div>
			<div className="gallery-container">
				{galleryImages.map((img, index) => (
					<OptimizedImage
						key={img.src}
						className="gallery-image"
						src={`${import.meta.env.BASE_URL}thumbnails/${img.src}`}
						alt={img.alt}
						fluid
						onClick={() => handleShow(img)}
						priority={index < 6}
						width={img.width}
						height={img.height}
					/>
				))}
			</div>

			<Modal show={show} fullscreen onHide={() => setShow(false)}>
				<Modal.Header closeButton className="modal-header"></Modal.Header>
				<Modal.Body onClick={() => setShow(false)} className="modal-body">
					<div
						onClick={(e) => e.stopPropagation()}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							width: "100%",
						}}
					>
						<OptimizedImage
							src={`${import.meta.env.BASE_URL}highRes/${selectedImage.src}`}
							alt={selectedImage.alt}
							style={{
								maxHeight: "90vh",
								maxWidth: "90vw",
								width: "auto",
								height: "auto",
								objectFit: "contain",
							}}
							priority={true}
						/>
						<p
							style={{
								marginTop: "10px",
								textAlign: "center",
								color: "#000000ff",
								fontSize: "18px",
							}}
						>
							{selectedImage.alt}
						</p>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}
