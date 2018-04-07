import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, NavItem, Nav} from 'react-bootstrap';

import {BASE_NAME} from '../App';

  const Navigation = () => (
    <Navbar fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand>
          Didrik Lind
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass={Link} href="/" to="/" 
            active={window.location.pathname === (BASE_NAME+'/')}> 
            Home 
          </NavItem>
          <NavItem componentClass={Link} href="/persona" to="/persona" 
            active={window.location.pathname === (BASE_NAME+'/persona')}> 
            Persona 
            </NavItem>
        </Nav>
        <Navbar.Text pullRight>Some random joke...</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    );
export default Navigation;
