import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logoutUser());
    };

    return (
        <>
            <button style={{ color: "gray", fontSize: "20px", width: "58px" }} onClick={openMenu}>
                <i className="fa-solid fa-user"></i>
            </button>
            {showMenu && (
                <section className="profile-dropdown">
                    <ul>
                        <Link to={`/savedHomes/${user.id}`}>Saved homes</Link>
                    </ul>
                    <ul>
                        <a>Saved searches</a>
                    </ul>
                    <ul>
                        <Link to={`/userListing/${user.id}`}>Your listings</Link>
                    </ul>
                    <ul>
                        <a>Account settings</a>
                    </ul>
                    <div className="profile-dropdown-bottom"/>
                    <button onClick={logout}>Log Out</button>
                </section>
            )}
        </>
    );
}

export default ProfileButton;