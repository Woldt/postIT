import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
export default class Navitagion extends Component {

  render() {
    return (
      <Navbar id="NavigationBar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            PostIt
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem >Github</NavItem>
            <NavItem >Tutorial</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
