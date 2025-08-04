
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './components/Home'; 
import Reserve from './components/Reserve';
import Menue from './components/Menue'; 
import Specials from './components/Specials'; 
import Location from './components/Location';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Cart from './components/Cart'



function App() {
  return (
   
       
       <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menue" element={<Menue />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
       </BrowserRouter>
  
  );
}

export default App;
