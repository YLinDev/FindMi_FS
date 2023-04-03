import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

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
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <button>Buy</button>
        <button>Sell</button>
        <button>Home Loans</button>
        <NavLink exact to="/">Home</NavLink>
        <button>Agent Finder</button>
        <button>Help</button>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;