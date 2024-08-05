import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home'
import { baseURL } from './baseRoutes';

const AppRoutes = ()=> {
    return (
        <Routes>
            <Route path = {baseURL} element ={<HomePage /> } />
        </Routes>
    )
}

export default AppRoutes