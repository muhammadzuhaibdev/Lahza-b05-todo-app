import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Home from "./home/Home"
import About from "./about/About"
import Contact from "./contact/Contact"

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend