import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Header.css'

// import './Header.css'
const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <Navbar className="zIndex" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img width="50%" src="https://i.ibb.co/s3JG3bV/logo-white.png" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/home">Home</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/explore">Explore</NavLink>
    {user.email &&<NavLink activeStyle={{
  fontWeight: "bold",
  color: "red"
}} className="m-2 nav-style" to="/dashboard">Dashboard</NavLink>}
    </Nav>
<Nav className="ms-auto">

{!user.email?<Nav className="ms-auto">
    <Link to="/login">
    <Button className="m-2">Login</Button>
    </Link>
  </Nav>
  :
  <div className="d-flex">
    <Button onClick={logOut}>Log out</Button>
    <h6 className="text-light m-1 p-1">{user.displayName}</h6>
  </div>}
</Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;