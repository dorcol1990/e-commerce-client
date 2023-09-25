import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './scenes/home/Home';
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
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main