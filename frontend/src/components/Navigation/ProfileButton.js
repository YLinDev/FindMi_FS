import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const logout = async (e) => {
        e.preventDefault();
        const data = await dispatch(sessionActions.logoutUser());
        if (data) {
            history.push("/")
        }
    };

    return (
        <>
            <button style={{ color: "gray", fontSize: "20px", width: "58px" }} onClick={openMenu}>
                <div className="profile-div">
                    <i className="fa-solid fa-user"></i>
                </div>
            </button>
            {showMenu && (
                <section className="profile-dropdown">
                    <ul>
                        <Link to={`/savedHomes/${user.id}`}>Saved homes</Link>
                    </ul>
                    <ul>
                        <Link to={`/userListing/${user.id}`}>Your listings</Link>
                    </ul>
                    <div className="profile-dropdown-bottom"/>
                    <button onClick={logout}>Log Out</button>
                </section>
            )}
        </>
    );
}

export default ProfileButton;