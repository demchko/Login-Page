import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2AjHEDpxvBUDqqD2IS-zWo6f_Wiqvcig",
    authDomain: "login-page-d2e8c.firebaseapp.com",
    projectId: "login-page-d2e8c",
    storageBucket: "login-page-d2e8c.appspot.com",
    messagingSenderId: "890809884369",
    appId: "1:890809884369:web:68e464772c860811d4eff0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);