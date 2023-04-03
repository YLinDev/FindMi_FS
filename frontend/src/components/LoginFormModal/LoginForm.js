import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch(); 
    // const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />; 

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.loginUser({ email, password }))
            .catch(async (res) => {
                let data; 
                try {
                    data = await res.clone().json();//.clone() allows to read the response body twice
                } 
                catch {
                    data = await res.text(); // will hit this case if server is down
                }
                console.log(data.errors)
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    return (
            <form className="loginForm"onSubmit={handleSubmit}>
                <label className='lFormLabel'>
                    Email
                    <br/>
                    <input
                        className='lFormInput'
                        type = "text"
                        placeholder='Enter email'
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </label>
                <label className='lFormLabel'>
                    Password
                    <br/>
                    <input 
                        className='lFormInput'
                        type = "password"
                        placeholder='Enter password'
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </label>
                <button className="lFormButton" type="submit">Sign In</button>
                <input className="lFormButton" type="submit" value="Demo User"/>
                <ul>
                    {errors.map(error =><li key={error}>{error}</li>)}
                </ul>
            </form>
    );
};

export default LoginForm;