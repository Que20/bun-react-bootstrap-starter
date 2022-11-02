import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import './index.css';

const Home = lazy(() => import('./Pages/Home/Home'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <Suspense fallback={<p>Please wait...</p>}>
    <HashRouter>
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/some" element={<Some />} /> */}
        </Routes>
    </HashRouter>
    </Suspense>
    <Footer />
  </React.StrictMode>
)