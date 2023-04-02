import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const Login = () => {

    const [err, setErr] = useState(false);
    const nav = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target[0].value;
        const passwd = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, passwd);
            nav('/');
        } catch (err){
            setErr(true);
        }
    }

    return (
        <div className='wrapper' >
            <div className='loginWrapper' >
                <form className='container' onSubmit={handleSubmit} >
                    <h1>Login</h1>
                    <input type='text' placeholder='your email...' />
                    <input type='password' placeholder='your password...' />
                    <button>Sign in</button>
                    {err && <span>Something wend wrong</span>}
                    <p>Already have account?<span><Link to='/register'>Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;