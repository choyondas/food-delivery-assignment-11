import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import './Register.css'
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const auth = getAuth();

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('password should be atleast 6 character')
            return;
        }


        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }
    const processLogin = (emial, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const { signInUsingGoogle } = useAuth();

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            }).catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    return (

        <div>
            <div className=' mx-5 form-div'>
                <form onSubmit={handleRegistration}>
                    <h3 className='text-primary text-center pb-4'>Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleNameChange} type="name" className="form-control " id="name" placeholder='ENTER YOUR NAME' required />
                        </div>
                    </div>}

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control " id="inputEmail3" placeholder='ENTER YOUR EMAIL' required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control " id="inputPassword3 " placeholder='ENTER YOUR PASSWORD' required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input " type="checkbox" id="gridCheck1" />
                                <label className="form-check-label " for="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary text-center">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                <br /><br /><br />
                ---------------------------
                <br />
                <button onClick={signInUsingGoogle} className='btn-primary mb-3 btn-google' >google Sign In</button>

            </div>

            <div className='text-center'>
                <Link to="/home"><button className='btn-primary m-4 text-center'>go back to home</button></Link>
            </div>

        </div>
    );
};

export default Register;