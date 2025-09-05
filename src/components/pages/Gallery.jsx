import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import OptimizedImage from '../OptimizedImage';
import { galleryImages } from '../../data/galleryImages';

export default function Gallery() {

  	const [show, setShow] = useState(false);
	const [selectedImage, setSelectedImage] = useState(galleryImages[1]);

	function handleShow(image) {
		setSelectedImage(image);
		setShow(true);
	}

	return (
		<div>
			<div className="gallery-wrapper">
				<div className="gallery-container">
					{
						galleryImages.map((img, index) => (
							<OptimizedImage
								key={img.src}
								className="gallery-image"
								src={`${import.meta.env.BASE_URL}thumbnails/${img.src}`}
								alt={img.alt}
								fluid
								onClick={() => handleShow(img)}
								priority={index < 4}
							/>
						))
					}
				</div>
			</div>

			<Modal show={show} fullscreen onHide={() => setShow(false)}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
					<OptimizedImage
						src={`${import.meta.env.BASE_URL}highRes/${selectedImage.src}`}
						alt={selectedImage.alt}
						style={{ height:"100vh", width:"auto" }}
						priority={true}
					/>
				</Modal.Body>
			</Modal>
		</div>
  );
}