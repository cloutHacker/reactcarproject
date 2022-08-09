import React from 'react'
import Nav from '../Homepage/Nav';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [userDetails, setUserDetails] = useState({
        name: '', email: '', phone: '', password: '', password_confirmation: ''
    });
    const setDetails = (e) => {
        setUserDetails({...userDetails, [e.target.name]:  e.target.value});        
    }
    const saveUser = async (e) => {
        e.preventDefault();
        //saving the user
        axios.get('http//localhost/LaravelSanctumApi/public/sanctum/csrf-cookie').then(response => {
        axios.post('http//localhost/LaravelSanctumApi/public/api/user/register', userDetails).then((res) => {
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
                        <input type='text' name='name' onChange={setDetails} className='form-control' value={userDetails.name}/>
                        <label classname="placeholder">Username</label>
                    </div>
                    <div className='mb-2'>
                        <input type='email' name='email' onChange={setDetails} className='form-control' value={userDetails.email}/>
                        <label classname="placeholder">Email</label>
                    </div>
                    <div className='mb-2'>
                        <input type='text' name='phone'  onChange={setDetails} className='form-control' value={userDetails.phone}/>
                        <label classname="placeholder">Phone</label>
                    </div>
                    <div className='mb-2'>
                        <input type='password' name='password' onChange={setDetails} className='form-control' value={userDetails.password}/>
                        <label classname="placeholder">Password</label>
                    </div>
                    <div className='mb-2'>
                        <input type='password' name='password_confirmation' onChange={setDetails} className='form-control' value={userDetails.password_confirmation}/>
                        <label classname="placeholder">Confirm Password</label>
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