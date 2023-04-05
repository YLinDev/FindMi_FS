import './IntroBar.css';
import { useSelector } from 'react-redux';


function IntroBar() {
    const sessionUser = useSelector(state => state.session.user);

    // let introLinks;
    if (!sessionUser) {
        return (
            <div className='introOutter'>
                <div className="introDiv">
                    <div className='introLeft'>
                        <h2 className='introHeading'>Take the first step</h2>
                        <h2 className='introNote'>Select your goal and we'll guide you on your journey.</h2>
                        <img className="house" src={require('././assets/logo-home.png')} alt=""/>
                    </div>
                    <div className='introRight'>
                        <button className='introButton' >
                            <i class="fa-solid fa-house-chimney-window fa-bounce"></i>
                            <p>Buy</p>
                        </button>
                        <button className='introButton' >
                            <i class="fa-solid fa-sign-hanging fa-bounce"></i>
                            <p>Sell</p>
                        </button>
                        <button className='introButton' >
                            <i class="fa-solid fa-building fa-bounce"></i>
                            <p>Rent</p>
                        </button>
                    </div>
                </div> 
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
    
}

export default IntroBar; 