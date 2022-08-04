import React from 'react'
import Nav from '../Homepage/Nav';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [userDetails, setUserDetails] = useState({
        name: '', email :'', phone: '', password: '', password_confirmation: ''
    });
    const setDetails = (e) => {
        setUserDetails({...userDetails, [e.target.name] : e.target.value});        
    }
    const saveUser = async (e) => {
        e.preventDefault();
        //saving the user
        axios.get('http://localhost/LaravelSanctumApi/public/sanctum/csrf-cookie').then(response => {
        axios.post('http://localhost/LaravelSanctumApi/public/api/user/register', userDetails).then((res) => {
            console.log(res);
        })
        })
    }
  return (
    <div>
        <Nav />
        <div className='container-fluid col-lg-6 col-md-6 col-sm-10 card mt-2 p-2'>
            <div className='row justify-content-center p-0'>
                <form>
                    <div className='card-title text-success d-flex justify-content-center'>
                        <h3>Signup to QuickShoppers</h3>
                        <div>
                            <span className='fa fa-cart-arrow-down'></span>
                            <span className='fa fa-arrow-right'></span>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label>Username:</label>
                        <input type='text' name='name' placeholder='Enter your username' onChange={setDetails} className='form-control' value={userDetails.name}/>
                    </div>
                    <div className='mb-2'>
                        <label>Email:</label>
                        <input type='email' name='email' placeholder='Enter your email' onChange={setDetails} className='form-control' value={userDetails.email}/>
                    </div>
                    <div className='mb-2'>
                        <label>Phone:</label>
                        <input type='text' name='phone' placeholder='Enter your phone' onChange={setDetails} className='form-control' value={userDetails.phone}/>
                    </div>
                    <div className='mb-2'>
                        <label>Password:</label>
                        <input type='password' name='password' placeholder='Enter your secret' onChange={setDetails} className='form-control' value={userDetails.password}/>
                    </div>
                    <div className='mb-2'>
                        <label>Confirm Password:</label>
                        <input type='password' name='password_confirmation' placeholder='Confirm your secret' onChange={setDetails} className='form-control' value={userDetails.password_confirmation}/>
                    </div>
                    <div className='p-2'>
                        <button className='btn btn-outline-primary' onClick={saveUser}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;