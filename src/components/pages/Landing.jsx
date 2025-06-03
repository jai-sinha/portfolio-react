import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Landing() {
	const [imageIndex, setImageIndex] = useState(0);

	const mainImages = [
		{ src: "/highRes/hanna-doubleexposed.jpeg", alt:"hanna double-exposed over flowers" },
		{ src: "/highRes/918-rear.jpeg", alt: "458 speciale, 918, daytona, safari 911 from front to back" },
		{ src: "/highRes/f1-car.jpeg", alt: "lewis hamilton's ferrari in monaco" },
		{ src: "/highRes/hanna-pacifica.jpeg", alt: "hanna in pacifica" },
		{ src: "/highRes/yosemite-gray.jpeg", alt: "yosemite on film, looks b/w but not!" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex(prevIndex => 
				prevIndex >= 3 ? 0 : prevIndex + 1
			);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Link className="centered" to="/gallery">Cars. Portraits. Motorsport.</Link>
			<Image style={{marginTop:"-10rem"}} fluid src={mainImages[imageIndex].src} alt={mainImages[imageIndex].alt} />
		</>
	);
}