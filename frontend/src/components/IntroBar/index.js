import React from 'react';
import './IntroBar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function IntroBar() {

    // let introLinks;

        return (
            <div className='introOutter'>
                <div className="introDiv">
                    <div className='introLeft'>
                        <h2 className='introHeading'>Take the first step</h2>
                        <h2 className='introNote'>Select your goal and we'll guide you on your journey.</h2>
                        <img className="house" src={require('././assets/logo-home.png')} alt=""/>
                    </div>
                    <div className='introRight'>
                        <Link to="/home">
                            <button className='introButton' >
                                <i className="fa-solid fa-house-chimney-window fa-bounce"></i>
                                <p>Buy</p>
                            </button>
                        </Link>
                        <button onClick={() => document.getElementById('mySellButton').click()} className='introButton' >
                            <i className="fa-solid fa-sign-hanging fa-bounce"></i>
                            <p>Sell</p>
                        </button>
                        <button onClick={() => document.getElementById('myRentButton').click()} className='introButton' >
                            <i className="fa-solid fa-building fa-bounce"></i>
                            <p>Rent</p>
                        </button>
                    </div>
                </div> 
            </div>
        )

    
}

export default IntroBar; 