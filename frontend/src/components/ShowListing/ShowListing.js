import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";
import { useEffect } from "react";
import EditButton from "./editButton";
import DeleteButton from "./deleteButton";
import './ShowListing.css';
import { fetchFavorites, getFavorites} from "../../store/favorites";
import FavButton from "../FavButton";
import { setupFav, deleteFav } from "../../store/favorites";
import { fetchUser } from "../../store/session";
import { fetchFavorite } from "../../store/favorites";


function ShowListing() {
    const dispatch = useDispatch(); 
    const history = useHistory(); 
    const { listingId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const favorites = useSelector(getFavorites)

    // console.log(sessionUser.favorites.key)

    const handleCreateFav = async (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const formData = new FormData();
        formData.append("favorite[saverId]", sessionUser.id)
        formData.append("favorite[listingId]", listingId)
        return dispatch(setupFav(formData, listing))
    }

    const handleDeleteFav = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        dispatch(deleteFav(favoriteId, listingId))
    }

    let saveButton = (
        <button id="save-button" className="listing-buttons" onClick={handleCreateFav}>
            <i className="fa-regular fa-heart"></i> &nbsp;Save
        </button>
    )

    if (sessionUser) {
        if (Object.keys(favorites).includes(String(listingId))){
            saveButton = (
                <button id="save-button" className="listing-buttons" onClick={handleDeleteFav}>
                    <i className="fa-solid fa-heart"></i> &nbsp;Saved
                </button>
            )
        }
    }
    const listing = useSelector(getListing(parseInt(listingId)))
    
    let favoriteId;
    if (Object.keys(favorites).includes(String(listingId))) {
        favoriteId = favorites[String(listingId)].id
    } 

    useEffect(() => {
        if (sessionUser) {
            dispatch(fetchFavorites)
        }
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    if (listing) {
        const { ownerId, price, condo, bedrooms, bathrooms, sqft, address, parking, airCond, yearBuilt, overview, description, photosUrl, monthlyHoaFee, listingType } = listing
        
        let houseType;
        if (condo) {
            houseType = "Condo"
        } else {
            houseType = "Single Family House"
        }

        let editButton;
        if (sessionUser && sessionUser.id === ownerId) {
            editButton = <EditButton/>
        }

        let deleteButton;
        if (sessionUser && sessionUser.id === ownerId) {
            deleteButton = <DeleteButton/>
        }

        let pictures
        if (photosUrl && Array.isArray(photosUrl)) {
            pictures = photosUrl.map((url) => <img src={url} alt="" key={url}/>)
        } else {
            pictures = <img src={require('././assets/stock-image.jpeg')} alt=""/>
        }
        let monthly 
        if (monthlyHoaFee === 0) {
            monthly = "No HOA"
        } else {
            monthly = `$${monthlyHoaFee} / month HOA`
        }

        const handleClose = () => {
            history.goBack(); 
        }

        return (
            <> 
                <div className="showDiv">
                    <div className="showLeft">
                        {pictures}
                    </div>
                    <div className="showRight">
                        <div className="infoHeader">
                            <img className="logo"src={require('././assets/findMiLogo.png')} alt=""/>
                            <div className="showButtons">
                                {saveButton}
                                <a className="listing-buttons">
                                    <i className="fa-solid fa-share"></i> &nbsp;Share
                                </a>
                                <a className="listing-buttons">
                                    <i className="fa-regular fa-eye-slash"></i> &nbsp;Hide
                                </a>
                                <a className="listing-buttons">
                                    <i className="fa-solid fa-caret-down"></i> &nbsp;More
                                </a>
                            </div>
                        </div>
                        <div className="showPriceInfo">
                                <div className="showPrice">
                                    ${price.toLocaleString('en-US')}
                                </div>
                                <div className="showInfo">
                                    {bedrooms} bds |&nbsp;
                                    {bathrooms} ba |&nbsp;
                                    {sqft.toLocaleString('en-US')} sqft
                                </div>
                        </div>
                        <div className="showAddress">
                            {address}
                        </div>
                        <div className="showListingType">
                            <div className="showType">
                                <i className="fa-solid fa-circle"></i>
                            </div>
                            <p>For {listingType}</p>
                            <p>FindMiMate : None</p>
                        </div>
                        <div className="showTourAgent">
                            <a className="tourButton">
                                Request a Tour
                                <p>as early as tomorrow at 11:00am</p>
                            </a>
                            <a className="agentButton">Contact an agent</a>
                        </div>
                        <div className="showScroll">
                            <div className="sOverviewDiv">
                                <ul className="showOverview">
                                    <li key="houseType"><i className="fa-regular fa-building"></i> {houseType}</li>
                                    <li key="yearBuilt"><i className="fa-regular fa-calendar"></i> Built in {yearBuilt}</li>
                                    <li key="monthly"><i className="fa-solid fa-hand-holding-dollar"></i> {monthly}</li>
                                    <li key="airCond"><i className="fa-regular fa-snowflake"></i> {airCond}</li>
                                    <li key="parking"><i className="fa-solid fa-square-parking"></i> {parking}</li>
                                </ul>
                            </div>
                            <div className="showDescription">
                                <h2 className="sDescription">Description:</h2>
                                <p className="sDetails">{overview}. {description}</p>
                            </div>
                            <div className="edit_delete">
                                {editButton}
                                {deleteButton}
                            </div>
                        </div>
                    </div>
                    <div className="show-close-div">
                        <button className="show-close" onClick={handleClose}><i className="fa-solid fa-xmark fa-beat"></i></button>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }
}

export default ShowListing; 