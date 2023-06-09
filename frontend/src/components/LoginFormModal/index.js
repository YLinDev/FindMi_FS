import React, { useState } from 'react';
import { SignInModal } from '../../context/SignInModal/Modal';
import LoginForm from './LoginForm';
import SignupFormPage from './SignupForm';
import './index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  let renderForm;
  let loginBorder;
  let signUpBorder;

  if (showLogin) {
    renderForm = (
      <LoginForm />
    );
    loginBorder = {
      borderBottom: "3px solid rgb(0, 106, 255)"
    };
    signUpBorder = {
      borderBottom: "none"
    };
  } else {
    renderForm = (
      <SignupFormPage />
    );
    signUpBorder = {
      borderBottom: "3px solid rgb(0, 106, 255)"
    };
    loginBorder = {
      borderBottom: "none"
    };
  };

  return (
    <>
      <button id="myButton" className='navButtons' onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <SignInModal onClose={() => setShowModal(false)}>
          <div className='formTop'>
            <h2 className='formHeader'>Welcome to FindMi</h2>
            <br/>
            <div className='formTopButtons'>
              <button style={loginBorder} className="topButtons" onClick={() => setShowLogin(true)}>Sign In</button>
              <button style={signUpBorder} className="topButtons" onClick={() => setShowLogin(false)}>New Account</button>
            </div>
          </div>
            {renderForm}
        </SignInModal>
      )}
    </>
  );
}

export default LoginFormModal;