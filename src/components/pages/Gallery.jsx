import { default as Masonry } from 'react-masonry-css';
import { Image, Modal } from 'react-bootstrap';
import { useState } from 'react'

export default function Gallery() {

	const pics = [
		{ src: "z-drifting.jpeg", alt: "350 and 370zs drifting" },
		{ src: "e36-woods-vert.jpeg", alt: "e36 in woods vertical, really wanted this to make the @bmwclassic instagram but they were hating"},
		{ src: "s13-drift.jpeg", alt: "s13 drifting" },
		{ src: "hanna-doubleexposed.jpeg", alt: "double-exposed, an accident actually"},
		{ src: "nsx-interior.jpeg", alt: "interior of nsx... need"},
		{ src: "e36-e9-rearquarter.jpeg", alt: "e36 ltw and e9 batmobile" },
		{ src: "yosemite-falls-vert.jpeg", alt: "waterfall in yosemite, super green water" },
		{ src: "918-rear.jpeg", alt: "458 speciale, 918, daytona, safari 911 from front to back" },
		{ src: "dominique-shinyrings-vert.jpeg", alt: "dom with shiny rings vertical" },
		{ src: "e90-legion-edited.jpeg", alt: "edited out half the background, e90 m3"},
		{ src: "e36-e9-mercedes.jpeg", alt: "old german sports cars, monterey" },
		{ src: "rsspyder-frontquarter.jpeg", alt: "favorite race car ever, porsche rs spyder" },
		{ src: "singer-vert.jpeg", alt: "singer 911 rear end" },
		{ src: "yosemite-gray.jpeg", alt: "yosemite on film, looks b/w but not!" },
		{ src: "hanna-greenhouse-vert.jpeg", alt: "hanna in a greenhouse" },
		{ src: "991-wingstack-closeup.jpeg", alt: "991 turbo closeup" },
		{ src: "rsspyder-jetwing.jpeg", alt: "wings on wings" },
		{ src: "cayman-interior.jpeg", alt: "interior of cayman s... peep the carpet" },
		{ src: "e36-rearquarter-legion.jpeg", alt: "e36 rear quarter view" },
		{ src: "e9-frontquarter-vert.jpeg", alt: "e9 'batmobile' front quarter" },
		{ src: "amg-shiny.jpeg", alt: "super shiny amg gt logo" },
		{ src: "ltw-rearquarter.jpeg", alt: "e36 ltw rear quarter view" },
		{ src: "f1-car.jpeg", alt: "lewis hamilton's ferrari in monaco" }
	];

  	const [show, setShow] = useState(false);
	const [selectedImage, setSelectedImage] = useState(pics[1]);

	function handleShow(image) {
		setSelectedImage(image);
		setShow(true);

	}

	return (
		<div>
			<Masonry
				breakpointCols={3}
				className="gallery-grid"
				columnClassName="gallery-grid_column"
			>
				{
					pics.map((img) => (
						<Image 
							className="gallery-image"
							key={img.src} 
							onClick={() => handleShow(img)} 
							fluid 
							src={"/thumbnails/" + img.src} 
							alt={img.alt}
						/>
					))
				}
			</Masonry>
			
			<Modal show={show} fullscreen onHide={() => setShow(false)}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
					<Image style={{ height:"100vh", width:"auto" }} src={"/highRes/" + selectedImage.src} alt={selectedImage.alt}/>
				</Modal.Body>
			</Modal>
		</div>
  );
}