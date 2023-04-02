import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, collection } from 'firebase/firestore';

const Register = () => {
    const [err, setErr] = useState(false);
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const passwd = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, passwd);
            await updateProfile(res.user, {
                displayName,
            });
            nav('/');
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className='wrapper'>
            <div className='loginWrapper'>
                <form className='container' onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <input type='text' placeholder='your name...' />
                    <input type='text' placeholder='your email...' />
                    <input type='password' placeholder='your password...' />
                    <button>Sign up</button>
                    {err && <span>Something wend wrong</span>}
                    <p>Don't have an account?<span><Link to='/login'>Login</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
