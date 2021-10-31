import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="logo">
            Cox Show Bazaar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#packages">
                Packages
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#sites">
                Sites
              </Nav.Link>
              {user.email ? (
                <>
                  <Nav.Link as={Link} to="/my-orders">
                    My Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage-orders">
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add-order">
                    Add A New Service
                  </Nav.Link>

                  <Navbar.Text className="btn btn-success text-warning">
                    <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>{" "}
                    {user.displayName}
                  </Navbar.Text>
                  <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
