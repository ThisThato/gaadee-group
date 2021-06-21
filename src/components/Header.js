import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Container className="nav-border">
            <Navbar.Brand id="nav-brand">
              <Row>
                <Col>
                  <h1>GAADEE</h1>
                  <h5>
                    Great Cars <span> - </span> Great Price <span> - </span> Great Dealer
                  </h5>
                </Col>
                <Col>
                  <Row className="nav-info">
                    <Col>
                      <div>
                        <i className="fas fa-mobile-alt"></i>
                        <h4>
                          Call Us <br />
                          +27 83 843 2599
                        </h4>
                      </div>
                    </Col>

                    <Col>
                      <div>
                        <i className="far fa-envelope"></i>
                        <h4>
                          Email Us <br />
                          +27 83 843 2599
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
            </Navbar.Brand>
          </Container>

          <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container fluid id="navbar-links">
              <Nav className="m-auto" id="nav-links">
                <Nav.Link>
                  <Link to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="about" spy={true} smooth={true}>
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="menu" spy={true} smooth={true}>
                    Menu
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="services" spy={true} smooth={true}>
                    Services
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
