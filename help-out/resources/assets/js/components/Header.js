import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Image} from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar.Text, 'custom');
bootstrapUtils.addStyle(Navbar.Link, 'color');

class Header extends Component {
    
    render() {

        var navbarStyles={
            "background-color" : "#FF4500"
        };

        var navbarLinkStyles={
            "color" : "white"
        };

        var logoStyles ={
            "display": "flex",
            "align-items": "center"
        }

        return (
            <div>
                <Navbar inverse collapseOnSelect style={navbarStyles}>
                    <Navbar.Header>
                        <Navbar.Brand style={logoStyles}>
                            <Image src="./images/logo.png" weign="50" height="50" />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href="#brand" style={navbarLinkStyles}>Help-Out</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="./App.js">
                                <Navbar.Link href="#" style={navbarLinkStyles}>Job List</Navbar.Link>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Navbar.Link href="#" style={navbarLinkStyles}>Donation</Navbar.Link>
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <Navbar.Text style={navbarLinkStyles}>
                                <Navbar.Link href="#" style={navbarLinkStyles}>Mark Otto</Navbar.Link>
                            </Navbar.Text >
                            <NavItem eventKey={1} href="#">
                                <Navbar.Link href="#" style={navbarLinkStyles}>Sign Out</Navbar.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Header