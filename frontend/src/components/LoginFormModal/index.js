import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormPage from './SignupForm';
import './index.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  let renderForm;
  if (showLogin) {
    renderForm = (
      <LoginForm />
    );
  } else {
    renderForm = (
      <SignupFormPage />
    );
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='formTop'>
            <h2 className='formHeader'>Welcome to FindMi</h2>
            <br/>
            <div className='formTopButtons'>
              <button className="topButtons" onClick={() => setShowLogin(true)}>Sign In</button>
              <button className="topButtons" onClick={() => setShowLogin(false)}>New Account</button>
            </div>
          </div>
            {renderForm}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;