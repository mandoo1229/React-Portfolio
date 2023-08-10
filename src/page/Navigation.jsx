import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/nav.css';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Minwoo Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="home">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Education</Nav.Link>
            <Nav.Link href="#pricing">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
