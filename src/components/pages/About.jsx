import { Image, Modal } from 'react-bootstrap';
import { useState } from 'react';
import OptimizedImage from '../OptimizedImage';
import '../../styles/about.css';

export default function About() {
	const [show, setShow] = useState(false);

	return (
		<div className="about-container">
			<Image
			className="headshot"
			src={`${import.meta.env.BASE_URL}highRes/headshot-better.jpeg`}
			alt="Professional headshot of Jai Sinha"
			/>
			<div className="wordsBackground">
				<div className="words">
					<h2>
					<strong>Jai Sinha</strong>
					</h2>
					<p>
						Hi! I'm a UW–Madison graduate based in München with a B.S. in Computer Sciences and two summers of software engineering experience at Tesla, where I honed both my technical expertise and collaborative skills. I'm a driven problem-solver and team player, with experience in Go, Python, C/C++, JS, React, SQL and Java, and I'm excited to apply my skills to meaningful, impactful work! In my free time, I love football, cars, photography, video games, and cooking :)
					</p>
					<div className="links">
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setShow(true);
							}}
							aria-label="View Resume"
						>
							<u>Resume</u>
						</a>
						{' | '}
						<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jai-sinha" aria-label="Visit LinkedIn profile">LinkedIn</a>
						{' | '}
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/jai-sinha" aria-label="Visit GitHub profile">GitHub</a>
					</div>
				</div>
			</div>

			<Modal show={show} fullscreen onHide={() => setShow(false)}>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
				<OptimizedImage
					src={`${import.meta.env.BASE_URL}Jai_Sinha_Resume.pdf`}
					alt="Jai Sinha's resume document"
					style={{ height:"100vh", width:"auto" }}
					priority={true}
				/>
			</Modal.Body>
			</Modal>
		</div>
	);
}