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
            <button onClick={() => setShowLogin(true)}>Sign In</button>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>
            {renderForm}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;