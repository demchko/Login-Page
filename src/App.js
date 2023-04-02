import React, {useContext} from 'react';
import Login from "./pages/Login";
import './App.css';
import Register from "./pages/Register";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {AuthContext} from "./context/AuthContext";

const App = () => {

    const {currentUser} = useContext(AuthContext);
    const ProtectedRoute = ({children}) => {
        if(!currentUser){
            return <Navigate to='/login' />
        }

        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} >
                    <Route index element={
                        <ProtectedRoute>
                            <Home userInfo={currentUser} />
                        </ProtectedRoute>
                    } />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;