import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function PortfolioNav(props) {
  const location = useLocation();
  
  return <Navbar bg="light" variant="light" fixed="top" expand="sm" collapseOnSelect>
    <Container fluid>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/">Jai Sinha</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link 
            as={Link} 
            to="/" 
            active={location.pathname === "/"}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/gallery" 
            active={location.pathname === "/gallery"}
          >
            Gallery
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/about" 
            active={location.pathname === "/about"}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}