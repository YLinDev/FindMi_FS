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
    const [owner_id, setOwnerId] = useState(1)
    const [condo, setCondo] = useState(false);
    const [description, setDescription] = useState("");
    const [listing_type, setListingType] = useState("sale");
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
            dispatch(fetchListing(listingId));
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
        
        formData.append('listing[price]', price);
        formData.append('listing[bedrooms]', bedrooms);
        formData.append('listing[bathrooms]', bathrooms);
        formData.append('listing[sqft]', sqft)
        formData.append('listing[address]', address);
        formData.append('listing[listing_type]', listing_type);
        formData.append('listing[year_built]', year_built);
        formData.append('listing[description]', description);
        formData.append('listing[condo]', condo);
        formData.append('listing[air_cond]', air_cond);
        formData.append('listing[parking]', parking);
        formData.append('listing[monthly_hoa_fee]', monthly_hoa_fee);
        formData.append('listing[price_per_sqft]', price_per_sqft);
        formData.append('listing[overview]', overview);
        formData.append('listing[views]', views);
        formData.append('listing[saves]', saves);
        formData.append('listing[owner_id]', owner_id)

        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`)
        // }

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



    return(
        <>
            {formHeading}
            <form className="listingForm" onSubmit={handleSubmit}>
                <label id="LFradio" className='LFlabel'>
                    Listing for:
                    <label className='LFlabel'>
                        Sale
                        <input type='radio' name="listingFor" value="sale"
                            onChange={(e) => setListingType(e.target.value)}
                        />
                    </label>
                    <label className='LFlabel'>
                        Rent
                        <input type='radio' name="listingFor" value="rent"
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
                        <input type='radio' name="condo" value='true' 
                            onChange={(e) => setCondo(e.target.value)}
                        />
                    </label>
                    <label className='LFlabel'>
                        House
                        <input type='radio' name='condo' value='false'
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