import React from 'react';
import { ShowModal } from '../../context/SignInModal/Modal';
import ShowListing from './ShowListing';

export function ShowMiModal({ onClose, onSuccess, listing }) {
    return (
      <ShowModal onClose={onClose}>
        <div className="SLmodal">
          <ShowListing listing={listing} onSuccess={onSuccess} onClose={onClose}/>
        </div>
      </ShowModal>
    );
  }

export default ShowMiModal; 