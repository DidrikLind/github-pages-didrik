import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap';

export default class MainNav extends React.Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Didrik Lind
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to='/persona'>Persona</Link>  
            </NavItem>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}