import React from "react";
import { useParams } from "react-router-dom";
import { getListing } from "../../store/listings";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from "../../store/listings";
import { useEffect } from "react";
import EditButton from "./editButton";
import './ShowListing.css';

function ShowListing() {
    const dispatch = useDispatch(); 
    const { listingId } = useParams();
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    const listing = useSelector(getListing(parseInt(listingId)))
    if (listing) {
        const { ownerId, price, condo, bedrooms, bathrooms, sqft, address, parking, airCond, yearBuilt, overview, description, photosUrl } = listing
        
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

        let pictures
        if (photosUrl && Array.isArray(photosUrl)) {
            pictures = photosUrl.map((url) => <img src={url}/>)
        } else {
            pictures = <img src={require('././assets/stock-image.jpeg')} alt=""/>
        }

        return (
            <> 
                <div >
                    <div className="showDiv">
                    <div className="showLeft">
                        {pictures}
                    </div>
                    <div className="showRight">
                        <div className="infoHeader">
                            <img className="logo"src={require('././assets/findMiLogo.png')} alt=""/>
                            <div className="showButtons">
                                <button>
                                    <i className="fa-regular fa-heart"></i> &nbsp;Save
                                </button>
                                <button>
                                    <i className="fa-solid fa-share"></i> &nbsp;Share
                                </button>
                                <button>
                                    <i className="fa-regular fa-eye-slash"></i> &nbsp;Hide
                                </button>
                                <button>
                                    <i className="fa-solid fa-caret-down"></i> &nbsp;More
                                </button>
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
                            <p>For Sale</p>
                            <p>FindMiMate : None</p>
                        </div>
                        <div className="showTourAgent">
                            <button className="tourButton">
                                Request a Tour
                                <p>as early as tomorrow at 11:00am</p>
                            </button>
                            <button className="agentButton">Contact an agent</button>
                        </div>
                        <div className="showScroll">
                            <div className="sOverviewDiv">
                                <ul className="showOverview">
                                    <li key="houseType"><i className="fa-regular fa-building"></i> {houseType}</li>
                                    <li key="yearBuilt"><i className="fa-regular fa-calendar"></i> Built in {yearBuilt}</li>
                                    <li key="airCond"><i className="fa-regular fa-snowflake"></i> {airCond}</li>
                                    <li key="parking"><i className="fa-solid fa-square-parking"></i> {parking}</li>
                                </ul>
                            </div>
                            <div className="showDescription">
                                <h2 className="sDescription">Description:</h2>
                                <p className="sDetails">{overview}. {description}</p>
                            </div>
                            {editButton}
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    } else {
        return null;
    }
}

export default ShowListing; 