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
        <div >
          <button className='navButtons'>Buy</button>
          <button className='navButtons'>Sell</button>
          <button className='navButtons'>Home Loans</button>
        </div>
        <Link to="/"><img className="icon" src={require('././assets/findMiLogo.png')}/></Link>
        <div >
          <button className='navButtons'>Agent Finder</button>
          <button className='navButtons'>Help</button>
          {sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;