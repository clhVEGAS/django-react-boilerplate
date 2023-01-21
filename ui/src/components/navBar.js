import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from "../logo.png";

export default class Site_Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  renderbuttons(){
    if(!this.props.isAuthenticated){
      return(
        <></>
      )
    } else {
      return(
        <>
          <button className="btn btn-primary me-2" onClick={this.props.whoami}>WhoAmI</button>
          <button className="btn btn-danger me-4" onClick={this.props.logout}>Log out</button>
        </>
      )
    }
  }
  render() {
    return (
      <div>
        <Navbar color="dark" expand="lg" container="fluid" dark fixed='top'>
          <NavbarBrand href="/">React-Redux / Django Boilerplate</NavbarBrand>
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/clhVEGAS/django-react-boilerplate">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <div style={{float:"right !important"}}>
            {this.renderbuttons()}
            <img src={logo} className="" alt="logo" width={95} height={55}/>
          </div>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}
