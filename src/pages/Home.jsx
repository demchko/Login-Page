import React from 'react';
import {signOut} from 'firebase/auth';
import {auth} from "../firebase";

const Home = ({userInfo}) => {
    return (
        <div className='homePage' >
            <h1>Hello {userInfo.displayName}</h1>
            <button onClick={() => signOut(auth)} >Log out</button>
        </div>
    );
};

export default Home;