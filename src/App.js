import React, {useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
function App() {
   const[style,setStyle]=useState({
    color:"#222",
    backgroundColor:"#cececd",
    isDark:false,
    text:"Enable Dark Mode"
   });
   const toggle = ()=>{
    if(style.isDark)
    {
      setStyle({
        color:"#222",
        backgroundColor:"#cececd",
        isDark:false,
        text:"Enable Dark Mode"
      })
    }
    else{
      setStyle({
        color:"white",
        backgroundColor:"#162217",
        isDark:true,
        text:"Enable Light Mode"
      })
    }
   }
  return (
    <div>
        <BrowserRouter>
         <Navbar style={style} toggle={toggle}/>
          <Routes>
            <Route path='/' element={<Home style={style} toggle={toggle}/>} />
            <Route path='/about' element={<About style={style} toggle={toggle}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
