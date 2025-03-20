import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AboutPage from './landing_page/about/AboutPage.jsx';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage.jsx';
import IsNotFound from './landing_page/IsNotFound.jsx';
import Navbar from './landing_page/Navbar';
import PricePage from './landing_page/pricing/PricePage.jsx';
import Signup from './landing_page/signup/Signup.jsx';
import Login from './landing_page/login/Login.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/pricing' element={<PricePage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/login" element={<Login />} />
    <Route path='/products' element={<ProductPage/>}></Route>
    <Route path='*' element={<IsNotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
)