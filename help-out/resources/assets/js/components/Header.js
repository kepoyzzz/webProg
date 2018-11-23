import React, { Component } from 'react';
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
            <div className="Header" >
                <Navbar inverse collapseOnSelect style={navbarStyles}>
                    <Navbar.Header>
                        <Navbar.Brand style={logoStyles}>
                            <Image src="./images/logo.png" weign="40" height="40" />;
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

                            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown> */}
                        </Nav>
                        <Nav pullRight>
                            <Navbar.Text style={navbarLinkStyles}>
                                Signed in as: <Navbar.Link href="#" style={navbarLinkStyles}>Mark Otto</Navbar.Link>
                            </Navbar.Text >
                            <Navbar.Text style={navbarLinkStyles}>Have a great day!</Navbar.Text>
                            <NavItem eventKey={1} href="#">
                                <Navbar.Link href="#" style={navbarLinkStyles}>Sign Out</Navbar.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>

        );
    }
}

export default Header;