import React, { useState } from 'react';
import { SellFormModal } from '../../context/SignInModal/Modal';
import ListingForm from './ListingForm';
import './ListingForm.css'

export function FormModal({ onClose, onSuccess }) {
    return (
      <SellFormModal onClose={onClose}>
        <div className="session-modal">
          <ListingForm onSuccess={onSuccess} onClose={onClose}/>
        </div>
      </SellFormModal>
    );
  }