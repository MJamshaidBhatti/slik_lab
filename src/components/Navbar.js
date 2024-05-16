import Container from "react-bootstrap/Container";
import { NavDropdown, Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/image/logo.svg";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div class="logo d-flex  w-25 justify-content-between">
            <Image className="logo me-3" src={logo} />
            <div class="d-flex align-items-end flex-column d-non">
              <span class="title-3 fw-bold">aiCarousels</span>
              <span class="logo-text title-1 fw-600">.com</span>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="flex-row-reverse"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
