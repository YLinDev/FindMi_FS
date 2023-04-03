import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <ul>
      <li className='navBar'>
        <button>Buy</button>
        <button>Sell</button>
        <button>Home Loans</button>
        <Link to="/"><img className="icon" src={require('././assets/findMiLogo.png')}/></Link>
        {/* <image src="./assets/logo-transparent-png.png" alt="FindMiLogo"></image> */}
        {/* <NavLink exact to="/">Home</NavLink> */}
        <button>Agent Finder</button>
        <button>Help</button>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;