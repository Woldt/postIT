import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { nav } from 'react-bootstrap';
import { Link } from "react-router";

export default class Navitagion extends Component {

  render(){
   return(
       <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Postit</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="github">Github</a></li>
            <li><a href="tutorial">Tutorial</a></li>
          </ul>
        </div>
       </nav>
      );
  }

}


/*

render(){
 return(
     <nav className="navbar ">
      <div className="ContentNavbar">

        <Nav pullRight>
          <Link to="github">HEEy</Link>
        </Nav>
      </div>
     </nav>

    );
}

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
          <NavItem href="github">Github</NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

*/



//<Link to="github">Github</Link>
//<Link to="tutorial">Tutorial</Link>
