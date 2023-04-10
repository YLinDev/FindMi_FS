import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SignInModal.css';
import './SellFormModal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function SignInModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
                <div id="modal-content">
                    <div className='closeButtonDiv'>
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

export function SellFormModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="sellModal">
            {/* <div className='sellCloseButtonDiv'>
                <i className="fa-solid fa-square-xmark"></i>
            </div> */}
            <div id="sellModal-background" onClick={onClose} />
                <div id="sellModal-content">
                    {children}
                </div>
        </div>,
        modalNode
    );
}