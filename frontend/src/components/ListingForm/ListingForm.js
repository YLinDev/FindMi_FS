import React, { useState } from 'react';
import { createListing, updateListing } from '../../store/listings';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, fetchListing } from '../../store/listings';
import { useEffect } from 'react';
import './ListingForm.css'


function ListingForm({onClose}) {
    const { listingId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    let listing = useSelector(getListing(listingId));

    const sessionUser = useSelector(state => state.session.user)
    const [imageFiles, setImageFiles] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    
    let submitButton; 
    let formHeading;
    if (listingId) {
        submitButton = <button className="sFormButton" type="submit"
                >Edit Listing</button>
        formHeading = <h1 className='formHeading'>Edit Listing</h1>
    } else {
        submitButton = <button className="sFormButton" type="submit"
                >Create Listing</button>
        formHeading = <h1 className='formHeading'>Create a New Listing</h1>
    };

    const handleFiles = ({ currentTarget }) => {
        const files = currentTarget.files; 
        setImageFiles(files);
        if (files.length !==0) {
            let filesLoaded = 0; 
            const urls = [];
            Array.from(files).forEach((file, index) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    urls[index] = fileReader.result;
                    if (++filesLoaded === files.length)
                    setImageUrls(urls);
                }
            });
        }
        else setImageUrls([]);
    }
    
    const [address, setAddress] = useState("");
    const [air_cond, setAirCond] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [owner_id, setOwnerId] = useState(sessionUser.id)
    const [condo, setCondo] = useState("");
    const [description, setDescription] = useState("");
    const [listing_type, setListingType] = useState("");
    const [monthly_hoa_fee, setMonthlyHoaFee] = useState(0);
    const [overview, setOverview] = useState("");
    const [parking, setParking] = useState("");
    const [price, setPrice] = useState("");
    const [sqft, setSqft] = useState("");
    const [year_built, setYearBuilt] = useState("");
    const [price_per_sqft, setPricePerSquare] = useState(0);
    const [views, setViews] = useState(0);
    const [saves, setSaves] = useState(0);
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    //const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (listingId) {
            setAddress(listing.address);
            setAirCond(listing.airCond);
            setBathrooms(listing.bathrooms);
            setBedrooms(listing.bedrooms);
            setCondo(listing.condo);
            setDescription(listing.description);
            setListingType(listing.listingType);
            setMonthlyHoaFee(listing.monthlyHoaFee);
            setOverview(listing.overview);
            setOwnerId(listing.ownerId);
            setParking(listing.parking);
            setPrice(listing.price);
            setPricePerSquare(listing.pricePerSqft);
            setViews(listing.views);
            setSaves(listing.saves);
            setSqft(listing.sqft);
            setYearBuilt(listing.yearBuilt);
            setCreatedAt(listing.createdAt);
            setUpdatedAt(listing.updatedAt);
            setImageUrls(listing.photosUrl);
        }
    }, [dispatch, listingId])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData();

        if (imageFiles.length !== 0) {
			for (let photo of imageFiles) {
				formData.append("listing[photos][]", photo);
			}
		}

		if (listingId) {
			formData.append('listing[id]', listingId);
            for (let key in listing) {
				formData.append(`listing[${key}]`, listing[key]);
			}
		} 
        
        formData.set('listing[price]', price);
        formData.set('listing[bedrooms]', bedrooms);
        formData.set('listing[bathrooms]', bathrooms);
        formData.set('listing[sqft]', sqft)
        formData.set('listing[address]', address);
        formData.set('listing[listingType]', listing_type);
        formData.set('listing[year_built]', year_built);
        formData.set('listing[description]', description);
        formData.set('listing[condo]', condo);
        formData.set('listing[air_cond]', air_cond);
        formData.set('listing[parking]', parking);
        formData.set('listing[monthly_hoa_fee]', monthly_hoa_fee);
        formData.set('listing[price_per_sqft]', price_per_sqft);
        formData.set('listing[overview]', overview);
        formData.set('listing[views]', views);
        formData.set('listing[saves]', saves);
        formData.set('listing[owner_id]', owner_id)

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`)
        }

        if (listingId) {
			dispatch(updateListing(formData, listingId));
            document.getElementById('sellModal-background').click()
            return history.push(`/show/${listingId}`);
		} else {
            const listingId = await dispatch(createListing(formData));
            document.getElementById('sellModal-background').click()
            return history.push(`/show/${listingId}`);
		}
        
    }

    let saleRadio = ""
    let rentRadio = ""
    if (listing_type === "sale") {
        saleRadio = "checked"
    } else if (listing_type === "rent") {
        rentRadio = "checked"
    }

    let condoRadio = ""
    let houseRadio = ""
    if (condo === 'false' || condo === false) {
        condoRadio = ""
        houseRadio = "checked"
    } else if (condo === 'true' || condo === true){
        houseRadio = ""
        condoRadio = "checked"
    }

    // const handleCondo = (e) => {
    //     if (e.target.value) {
    //         houseRadio = ""
    //         condoRadio = "checked"
    //     } else {
    //         condoRadio = ""
    //         houseRadio = "checked"
    //     }
    //     setCondo(e.target.value)
    // }

    return(
        <>
            {formHeading}
            <form className="listingForm" onSubmit={handleSubmit}>
                <label id="LFradio" className='LFlabel'>
                    Listing for:
                    <label className='LFlabel'>
                        Sale
                        <input type='radio' name="listingFor" value="sale" checked={saleRadio}
                            onChange={(e) => setListingType(e.target.value)}
                        />
                    </label>
                    <label className='LFlabel'>
                        Rent
                        <input type='radio' name="listingFor" value="rent" checked={rentRadio}
                            onChange={(e) => setListingType(e.target.value)}
                        />
                    </label>
                </label>
                <label className='LFlabel'>
                    Bedrooms 
                    <input className='LFInput' type='number' min='0'
                        value = {bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Bathrooms
                    <input className='LFInput' type='number' min='0'
                        value = {bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Address
                    <input className='LFInput' type='text'
                        value = {address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Price
                    <input className='LFInput' type='number' min='1'
                        value = {price}
                        onChange={(e) => {
                            setPrice(e.target.value); 
                            setPricePerSquare((price/sqft).toFixed(0));
                        }}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Year Built
                    <input className='LFInput' type='text'
                        value = {year_built}
                        onChange={(e) => setYearBuilt(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Square Feet
                    <input className='LFInput' type='number' min='0'
                        value = {sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        required
                    />
                </label>
                <label id="LFradio" className='LFlabel'>
                    Building Type
                    <label className='LFlabel'>
                        Condo
                        <input type='radio' name="condo" value='true' checked={condoRadio}
                            onChange={(e) => setCondo(e.target.value)}
                        />
                    </label>
                    <label className='LFlabel'>
                        House
                        <input type='radio' name='condo' value='false' checked={houseRadio}
                            onChange={(e) => setCondo(e.target.value)}
                        />
                    </label>
                </label>
                <label className='LFlabel'>
                    Type of Air Condition
                    <input className='LFInput' type='text'
                        value={air_cond}
                        onChange={(e) => setAirCond(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Homeowners Association Fees
                    <input className='LFInput' type='number' min='0'
                        value={monthly_hoa_fee}
                        onChange={(e) => setMonthlyHoaFee(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Parking
                    <input className='LFInput' type='text'
                        value={parking}
                        onChange={(e) => setParking(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Pictures
                    <input type='file' onChange={handleFiles} multiple />
                </label>
                <label className='LFlabel'>
                    Description
                    <input className='LFInput' type='textarea'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label className='LFlabel'>
                    Overview
                    <input className='LFInput' type='textarea'
                        value={overview}
                        onChange={(e) => setOverview(e.target.value)}
                        required
                    />
                </label>
                {submitButton}
            </form>
        </>
    )
}

export default ListingForm; 