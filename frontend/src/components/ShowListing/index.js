import React from 'react';
import { ShowModal } from '../../context/SignInModal/Modal';
import ShowListing from './ShowListing';
import { useEffect } from 'react';

export function ShowMiModal() {

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])

    return (

      <ShowListing />

    );
  }

export default ShowMiModal; 