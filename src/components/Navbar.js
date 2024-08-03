import Container from "react-bootstrap/Container";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/image/logo.svg";
import Icon from "../core/Icon";



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
            <div class="group_btn d-flex justify-content-between align-items-center ">
              {/* <Nav.Link id="btn_mode" href="#deets" className="btn rounded-0 d-non">
                <span class="Dark">Switch to Dark Mode</span>
                <span class="Light">Switch to Light Mode</span>
              </Nav.Link> */}

              <Nav.Link id="login_btn" className="btn" href="#memes">
                <div class="login"></div>
                <span>Log In</span>
              </Nav.Link>

              <Nav.Link id="signup3" className="btn d-non" href="#memes">
                <div class="signup "></div>
                <span>Sign Up</span>
              </Nav.Link>
              {/* <div id="unlock_btn" class="btn" onclick="javascript:abrirmodal('modal_share');"> */}
              <div href="#" id="Remove-btn" class="btn">
                <div class="remove d-non"></div>
                <span>Remove Watermark</span>
              </div>
              <div id="download" class="download_btn btn">
                <div class="download"></div>{" "}
                <span>
                  Download <span class="d-non">Carousel</span>
                 
                </span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
