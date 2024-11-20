import Navbar from "./components/Navbar";
import logo from './Assets/logo.svg'
import Footer from "./components/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  AOS.init({ duration: 1000 }); 
  return (
    <Router>
      <div>

    <Navbar/>
    <div className="mt-36">
   </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>


      </Routes>
    
  
   
    {/* <div className=" items-center flex justify-center bouncing-image"  >
      <img src={logo} alt="logo" className="object-cover w-[75px] h-[70px]" data-aos="zoom-out" />
    </div> */}
     {/* <Login/> */}


 
     
 
    {/* footer */}
    <div>
     <Footer/>
    </div>

  </div>
  </Router>

  );
}

export default App;
