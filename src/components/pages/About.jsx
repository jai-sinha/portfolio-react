import { Image } from 'react-bootstrap';

export default function About() {
	
	return (
		<div>

			<Image className="headshot" style={{height:"100vh", width:"auto"}} src="/highRes/headshot-better.JPG" alt="hey now"/>

			<div className="wordsBackground">
				<div className="words">
					<h2>
						<strong>Jai Sinha</strong>
					</h2>
					<p>
						Hi! I'm a UW–Madison graduate with a B.S. in Computer Sciences and two summers of software engineering experience at Tesla, where I honed both my technical expertise and collaborative skills. I'm a driven problem-solver and team player, fluent in Go, Python, C/C++, and Java, and I'm excited to apply my skills to meaningful, impactful work! In my free time, I love football, cars, photography, video games, and cooking :)
					</p>
					<div style={{fontSize:'1.25rem'}}>
						<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jai-sinha">LinkedIn</a>
						{' | '}
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/jai-sinha">GitHub</a>
						{' | '}
						<a href="/resume.pdf" download="Jai Sinha Resume">Resume (I pinky promise this downloadable pdf is trustworthy!)</a>
					</div>
				</div>
			</div>
		</div>
	);
}