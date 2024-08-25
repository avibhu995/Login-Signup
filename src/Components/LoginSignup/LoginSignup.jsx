import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css'
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import facebook_icon from '../Assets/facebook.png';
import google_icon from '../Assets/google.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        console.log('handleChange triggered');
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit triggered');
        try {
            const url = action === "Login" ? 'http://localhost:5000/auth/login' : 'http://localhost:5000/auth/signup';
            const response = await axios.post(url, formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const handleFacebookLogin = () => {
  
        window.location.href = 'https://www.facebook.com/login';
    };

    const handleGoogleLogin = () => {
   
        window.location.href = 'https://accounts.google.com/signin';
    };
    return (
        <div className='container'>
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null :
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action === "Sign Up" ? null : 
                <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
            <div className='facebook'  onClick={handleFacebookLogin}><img src={facebook_icon} alt="" /> Login with Facebook</div>  
            <p className='Seperate'>OR</p>    
             
            <div className='google' onClick={handleGoogleLogin}><img src={google_icon} alt="" />Login with Google</div>
        </div>
        
    );
};

export default LoginSignup;
