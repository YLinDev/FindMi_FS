import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ShowLModal.css';

const ModalContext = React.createContext();

export function ShowLModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="showLModal">
            <div id="showLModal-background" onClick={onClose} />
                <div id="showLModal-content">
                    <div className='showLModalClose'>
                        <button style={{ color: "gray", fontSize: "20px" }} className="closeButton" onClick={onClose}>
                            <i className="fa-solid fa-xmark fa-beat" ></i>
                        </button>
                    </div>
                    {children}
                </div>
        </div>,
        modalNode
    );
}