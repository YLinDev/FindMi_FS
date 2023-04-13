import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { Link } from 'react-router-dom';
import SellButton from './SellButton';
import RentButton from './RentButton';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  // const buyClick = (e) => {
  //   e.preventDefault(); 
  //   history.push('/home')
  // }

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
        <div className='navLeft'>
          <Link to="/home"><button className='navButtons'>Buy</button></Link>
          <SellButton />
          <RentButton />
          <a className='navButtons'>Manage Rentals</a>
        </div>
        <Link to="/" className="icon"><img  src={require('././assets/findMiLogo.png')} alt=""/></Link>
        <div className='navRight'>
          <a href="https://github.com/YLinDev/FindMi_FS" target="_blank"><img className='navButtons' id='links' src={require('././assets/github-icon2.png')} alt="GitHubLogo"/></a>
          <a href="https://www.linkedin.com/in/yong-lin-b7142a40/" target="_blank"><img className='navButtons' id='links' src={require('././assets/linkedin-icon2.png')} alt="LinkedInLogo"/></a>
          <a className='navButtons'>Help</a>
          {sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;