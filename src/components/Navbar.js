import Container from "react-bootstrap/Container";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/image/logo.svg";
import DownloadButton from "./BaseDownload";
import Download from "../assets/image/download.svg";
import remove from "../assets/image/remove.svg";
import lock from "../assets/image/lock.svg";
import signup from "../assets/image/signup.svg";
import login from "../assets/image/login.svg";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div class="logo d-flex  w-25 justify-content-between">
            <Image className="logo me-2" src={logo} />
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

              {/* <div id="unlock_btn" class="btn" onclick="javascript:abrirmodal('modal_share');"> */}
              {/* <div href="#" id="Remove-btn" class="btn">
                <div class="remove d-non"></div>
                <span>Remove Watermark</span>
              </div> */}
              <DownloadButton primary="light" icon={login} title="Login" />
              <div className="mx-2">
                <DownloadButton primary="light" icon={signup} title="Sign Up" />
              </div>
              <DownloadButton
                primary="outline-secondary"
                icon={lock}
                title="Loard Progress"
              />
              <div className="mx-2">
                <DownloadButton
                  primary="secondary"
                  icon={remove}
                  title="Remove Watermark"
                />
              </div>

              <DownloadButton
                primary="primary"
                icon={Download}
                title="Download"
                subtitle="Carousel"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
