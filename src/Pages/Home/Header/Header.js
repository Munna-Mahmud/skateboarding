
import Button from '@mui/material/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/logo.jpg'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <Navbar bg="dark" className="p-3 m-0" variant="dark" fixed="top" collapseOnSelect expand="lg" >
            <Container>

                <Navbar.Brand href="#home"><img className="" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Nav.Link className="text-white" as={HashLink} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/home#products">Products</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/allproducts">Explore</Nav.Link>
                    <Nav.Link className="text-white" as={HashLink} to="/about">About US</Nav.Link>


                    {user.email && <div><img style={{ width: "30px", height: "30px", borderRadius: "50%" , marginLeft: "5rem" }} src={user?.photoURL} alt="" />
                    {/* <span className="text-white px-2">{user.displayName}</span> */}
                     </div>}

                    {
                        user?.email ?
                            <Button onClick={logOut} style={{ color: "white", backgroundColor: "goldenrod", fontSize:"14px", padding:"1px", marginLeft:"10px" }} color="">Logout</Button>

                            :
                            <NavLink style={{ marginLeft: "5rem", alignItems: "end" }} to="/login" style={{ textDecoration: 'none' }} >
                                <Button style={{ color: 'white', }} color="">Login</Button>
                            </NavLink>
                    }

                    <Nav.Link as={Link} className="text-white " style={{ alignItems: "end" }} to="/register">Register</Nav.Link>


                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
};

export default Header;