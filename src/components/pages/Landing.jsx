import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Landing() {
	const [imageIndex, setImageIndex] = useState(0);
	const mainImages = [
		{ src: "/highRes/hanna-doubleexposed.jpg", alt:"hanna double-exposed over flowers" },
		{ src: "/highRes/918-rear.jpg", alt: "458 speciale, 918, daytona, safari 911 from front to back" },
		{ src: "/highRes/yosemite-gray.jpg", alt: "yosemite on film, looks b/w but not!" },
		{ src: "/highRes/hanna-pacifica.jpg", alt: "hanna in pacifica" }
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
			<Link className="centered" to="/gallery">Get me a job PLEASE.</Link>
			<Image fluid src={mainImages[imageIndex].src} alt={mainImages[imageIndex].alt} />
		</>
	);
}