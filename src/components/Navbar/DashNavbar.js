import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { baseurl } from '../../core';
import { GlobalContext } from '../../context/Context';
import { useContext } from "react";


function DashNavbar() {
    
    let { state, dispatch } = useContext(GlobalContext);


    const logout = () => {
        axios.post(`${baseurl}/api/v1/logout`, {}, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res +++: ", res.data);
                dispatch({
                    type: "USER_LOGOUT"
                })
            })

    }

    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">React-Form</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <li>
                                <Link to="/" className="nav-itms">Profile</Link>
                            </li>

                            <li>
                                <Link to="/dashboard" className="nav-itms">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/myposts" className="nav-itms">MyPosts</Link>
                            </li>

                            <li>
                                <Link to="/" onClick={logout} className="nav-itms" style={{ fontWeight:"600"}}>Logout</Link>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default DashNavbar;