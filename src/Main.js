import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import CartMenu from './scenes/global/CartMenu';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Home from './scenes/home/Home';
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Navbar from './scenes/global/Navbar';
import React from 'react'
import { useEffect } from 'react';

const ScrollToTop = ()=>{
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [pathname])

    return null;
}

const Main = () => {
  return (
    <div className='main'>
        <BrowserRouter >
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='item/:itemId' element={<ItemDetails />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='checkout/success' element={<Confirmation />} />
            </Routes>
            <CartMenu />
        </BrowserRouter>
    </div>
  )
}

export default Main