import { default as Masonry } from 'react-masonry-css';
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
			<Masonry
				breakpointCols={{
					default: 4,
					2560: 3,
					576: 2
				}}
				className="gallery-grid"
				columnClassName="gallery-grid_column"
			>
				{
					galleryImages.map((img, index) => (
						<OptimizedImage
							key={img.src}
							className="gallery-image"
							src={`${import.meta.env.BASE_URL}thumbnails/${img.src}`}
							alt={img.alt}
							fluid
							onClick={() => handleShow(img)}
							priority={index < 4} // Prioritize first 4 images
						/>
					))
				}
			</Masonry>

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