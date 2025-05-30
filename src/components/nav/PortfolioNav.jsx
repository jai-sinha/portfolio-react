import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PortfolioNav(props) {
	return <Navbar bg="light" variant="light" fixed="top" expand="sm" collapseOnSelect>
		<Container fluid> 
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Brand as={Link} to="/">Jai Sinha</Navbar.Brand>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
					<Nav.Link as={Link} to="/about">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
}
