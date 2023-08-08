import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { IMAGES } from "../assets/images";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header(props) {
  const [active, setActive] = useState("Home");

  const { home, about, services, contact } = props;

  const handleClick = (section) => {
    window.scrollTo({
      top: section.current.offsetTop - 90,
      behaviour: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", ref: home },
    { label: "About us", ref: about },
    { label: "Services", ref: services },
    { label: "Contact us", ref: contact },
  ];

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm header-wrapper sticky-top py-sm-3 py-2"
    >
      <Container fluid className="px-md-5 px-4">
        <Navbar.Brand className="pointer">
          <div
            className="d-flex align-items-center"
            onClick={() => {
              handleClick(home);
              setActive("Home");
            }}
          >
            <img src={IMAGES.LOGO} alt="logo" className="main-logo-icon" />
            <h2 className="ms-2 main-logo">treaty</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <RxHamburgerMenu size={24} className="text-black" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center ">
            {navLinks.map((item) => (
              <div>
                <Nav.Link
                  className={`ms-3 text-primary fw-semibold fs-md d-flex justify-content-center nav-parent ${
                    active === item.label ? "active" : ""
                  }`}
                  onClick={() => {
                    handleClick(item.ref);
                    setActive(item.label);
                  }}
                >
                  {item.label}
                  <div
                    className={`${
                      active === item.label
                        ? "nav-border d-lg-block d-none"
                        : ""
                    }`}
                  />
                </Nav.Link>
              </div>
            ))}
            <Button
              className="ms-md-5 ms-3 rounded-pill fs-md fw-medium my-md-0 my-2"
              variant="outline-primary"
            >
              Login/Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
