import React from "react";
import "./Navbar.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function NavbarL({minNav,dataNav,logo,drop,data2,btn,children,}) {
  return (
    <>
      <Navbar className="btn-nav h-nav position-fixed w-100 z-3">
        <Container className="justify-content-center justify-content-sm-between">
          <Navbar.Brand
            href="#home"
            className="fs-6 text-white d-flex justify-content-center align-items-center gap-2 d-none d-md-flex"
          >
            {children[0]}
            {minNav.text1}
          </Navbar.Brand>
          <Navbar.Text className="fs-6 text-white d-flex justify-content-center align-items-center gap-2">
            {children[1]}
            {minNav.text2}
          </Navbar.Text>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-white position-fixed w-100 z-2 mt-5">
        <Container>
          <Navbar.Brand href={`#${logo.href}`} className="m-0 wid-nav">
            <img src={logo.img} alt={logo.text} className="w-100" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-0 px-0 px-md-auto ms-2 ms-auto"
          />
          <Button
            variant="primary"
            className="order-lg-3 btn-nav border border-0 fs-6 px-1 py-1 px-md-2 px-lg-1 px-xl-3 py-lg-2 ms-1 ms-sm-4 ms-lg-0 fw-medium"
          >
            {btn}
          </Button>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="flex-grow-0 ms-xl-5 ps-xl-3"
          >
            <Nav className="gap-xl-2 gap-0">
              {dataNav?.map((item, index) => {
                return (
                  <Nav.Link
                    href={`#${item.href}`}
                    key={index}
                    className="text-nav fw-medium"
                  >
                    {item.name}
                  </Nav.Link>
                );
              })}
              <NavDropdown
                title={drop.name}
                id="navbarScrollingDropdown"
                className="text-nav fw-medium"
              >
                <NavDropdown.Item href={`#${drop.href}`}>
                  {drop.name}
                </NavDropdown.Item>
                <NavDropdown.Item href={`#${drop.link3}`}>
                  {drop.link1}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={`#${drop.link4}`}>
                  {drop.link2}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="text-nav fw-medium"
                href={data2.href}
                disabled
              >
                {data2.name}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
