import React, { useState } from "react";
import { ShowLModal } from "../../context/ShowModal/ShowLModal";
import { useParams } from "react-router-dom";
import { getListings, getListing } from "../../store/listings";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "../../store/listings";
import { useEffect } from "react";
import './ShowListing.css';

function ShowListing() {
    const { listingId } = useParams();
    const dispatch = useDispatch(); 
    const listing = useSelector(getListing(listingId))
    console.log(listing)
    const { price, condo, bedrooms, bathrooms, sqft, address, listing_type } = listing

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

    return (
        <> 
            <div className="showDiv">
                <div className="showLeft">
                    <img src={require('././assets/stock-image.jpeg')} />
                </div>
                <div className="showRight">
                    <div className="infoHeader">
                        <img className="logo"src={require('././assets/findMiLogo.png')}/>
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
                        <i className="fa-solid fa-circle"></i>
                        <p>For Sale</p>
                        <p>FindMiMate : None</p>
                    </div>
                    <div className="showTourAgent">
                        <button >
                            Request a Tour
                            <p>as early as tomorrow at 11:00am</p>
                        </button>
                        <button >Agent</button>
                    </div>
                    <div className="showScroll">
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowListing; 