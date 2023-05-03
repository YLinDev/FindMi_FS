import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />;

    let showErrors = (<div></div>)
    if (errors[0]) {
        showErrors = (<ul className='errors' style={{border: "solid", borderRadius: "5px"}}>
                        {errors.map(error =><li key={error}>{error}</li>)}
                        </ul>)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUp({ email, password }))
            .catch(async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                  data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) setErrors([data.errors]);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
              });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);  
    }
    
    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
            <label className='sFormLabel'>
                Email
                <br/>
                <input 
                    className='sFormInput'
                    type="text"
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </label>
            <label className='sFormLabel'>
                Password
                <br/>
                <input 
                    className='sFormInput'
                    type="password"
                    placeholder='Create password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </label>
            <label className='sFormLabel'>
                Confirm Password
                <br/>
                <input 
                    className='sFormInput'
                    type="password"
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            </label>
            <button className="sFormButton" type="submit">Sign Up</button>
            {showErrors}
        </form>
    )
}

export default SignupFormPage;