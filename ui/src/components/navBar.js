import {React, useState} from 'react';
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
import { useLogOutMutation, useWhoAmIMutation } from '../features/login/loginApi';
import { storeAuth, storeErr } from "../features/login/userSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function SiteNavbar(){
  const [isOpen, toggle] = useState();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const [logout_trigger] = useLogOutMutation()
  const [whoami_trigger] = useWhoAmIMutation()

  const whoami = async () => {
    try{
      let print = await whoami_trigger();
      alert(print.data.username);
    } catch(err){
      console.error('Uhhh.. Who are you?: ', err);
      dispatch(storeAuth(false));
      dispatch(storeErr(err));
    }
  }
  
  const logout = async () => {
    try{
      await logout_trigger();
      dispatch(storeAuth(false));
      dispatch(storeErr(''));
    } catch(err){
      console.error('Failed to log out: ', err)
      dispatch(storeAuth(false));
      dispatch(storeErr(err));
    }
  }

  const renderbuttons= () => {
    if(!isAuthenticated){
      return(
        <></>
      )
    } else {
      return(
        <>
          <button className="btn btn-primary me-2" onClick={whoami}>WhoAmI</button>
          <button className="btn btn-danger me-4" onClick={logout}>Log out</button>
        </>
      )
    }
  }
    return (
      <div>
        <Navbar color="dark" expand="lg" container="fluid" dark fixed='top'>
          <NavbarBrand href="/">React-Redux / Django Boilerplate</NavbarBrand>
          
          <Collapse isOpen={isOpen} navbar>
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
            {renderbuttons()}
            <img src={logo} className="" alt="logo" width={95} height={55}/>
          </div>
          <NavbarToggler onClick={toggle} />
        </Navbar>
      </div>
    );
  }