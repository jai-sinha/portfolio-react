import { Image } from 'react-bootstrap';

export default function About() {
	
	return (
		<div>

			<Image style={{height:"50%", width:"50%"}} src="/highRes/me-headshot.jpeg" alt="hey now"/>

			<div className="wordsBackground">
			<div className="words">
				<h2>
					<b>Jai Sinha</b>
				</h2>
				<p>
					Based in the Bay Area, and currently attending the University of Wisconsin in Madison where I will be graduating in Spring 2025 with a BS in Computer Science. I started photography as a hobby in high school, and like to keep up with it alongside my passions for cars and motorsport in general. In 2022, I decided this would be a fun side project to build some new skills and create a virtual gallery!
				</p>
			</div>
			</div>
		</div>
	);
}