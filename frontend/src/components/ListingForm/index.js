import React, { useState } from 'react';
import { SellFormModal } from '../../context/SignInModal/Modal';
import ListingForm from './ListingForm';
import './ListingForm.css'
import './index.css'

export function FormModal({ onClose, onSuccess }) {
    return (
      <SellFormModal onClose={onClose}>
        <div className="listing-form-modal">
          <ListingForm onSuccess={onSuccess} onClose={onClose}/>
        </div>
      </SellFormModal>
    );
  }