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

    if (sessionUser) return <Redirect to="/" />;

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
                console.log(data)
                if (data?.errors) setErrors([data.errors]);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
              });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);  
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </label>
            <label>
                Password
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
            </label>
            <label>
                Confirm Password
                <input 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
            </label>
            <button type="submit">Sign Up</button>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </form>
    )
}

export default SignupFormPage;