import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Link } from 'react-router-dom';
import SellButton from './SellButton';

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
          <SellButton />
          <button className='navButtons'>Home Loans</button>
          <button className='navButtons'>Agent Finder</button>
        </div>
        <Link to="/"><img className="icon" src={require('././assets/findMiLogo.png')} alt=""/></Link>
        <div >
          <button className='navButtons'>Manage Rentals</button>
          <button className='navButtons'>Advertise</button>
          <button className='navButtons'>Help</button>
          {sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;