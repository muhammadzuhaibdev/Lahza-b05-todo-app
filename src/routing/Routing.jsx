import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from "../pages/frontend/Frontend"
import Dashboard from "../pages/dashboard/Dashboard"
import Auth from "../pages/auth/Auth"


const Routing = () => {
    return (
        <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='dashboard/*' element={<Dashboard />} />
            <Route path='auth/*' element={<Auth />} />
        </Routes>
    )
}

export default Routing