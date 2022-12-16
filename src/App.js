import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
 } from "react-router-dom";
 import { useSelector } from 'react-redux';

import Topbar from "./components/Topbar";
import  Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Social from "./components/Social";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Single from "./pages/Single";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import Cart from "./components/Cart";

function App() {
  const user = useSelector((state) => state.user.currenUser);
  const [visibility, setVisibility] = useState(false);

  window.onscroll = () => {
    if(visibility === true) {
        setVisibility(false);
    }
  }
  return (
    <div className="app">
      <Topbar />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/shop/:id" element={<Single/>}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      <Cart visibility={visibility}/>
      <Newsletter />
      <Social />
      <Footer />
    </div>        
 );
 }
 export default App;