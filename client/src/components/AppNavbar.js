import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#0e192e'}} dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Novice Heroes</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav style={{backgroundColor: '#0e192e'}} className="ml-auto" navbar
              class='navbar'>
                <NavItem>
                  <NavLink href="https://www.youtube.com/user/NoviceHeroes">Youtube</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://teespring.com/stores/novice-heroess-store">Merchandise</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.patreon.com/NoviceHeroes">Patreon</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
