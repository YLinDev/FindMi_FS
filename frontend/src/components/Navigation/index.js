import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Link } from 'react-router-dom';
import SellButton from './SellButton';
import RentButton from './RentButton';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory(); 

  const buyClick = (e) => {
    e.preventDefault(); 
    history.push('/home')
  }

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
          <Link to="/home"><button className='navButtons'>Buy</button></Link>
          <SellButton />
          <RentButton />
          <button className='navButtons'>Manage Rentals</button>
        </div>
        <Link to="/"><img className="icon" src={require('././assets/findMiLogo.png')} alt=""/></Link>
        <div >
          <button className='navButtons'>Agent Finder</button>
          <button className='navButtons'>Advertise</button>
          <button className='navButtons'>Help</button>
          {sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;