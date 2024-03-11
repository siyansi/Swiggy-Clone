import logo from './logo.svg';
import './App.css';
import HomePage from './component/protective/pages/HomePage';
import Header from './component/protective/pages/header/Header';
import Home from './component/protective/pages/Home';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import AuthGurad from './component/auth/Authgard';
import Productlist from './component/protective/pages/Productlist';
import AddCart from './component/protective/pages/AddCart';
import Footer from './component/protective/pages/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className=''>
      <Routes>
      {/* <Route exact path='/'element={<HomePage/>}/>
      <Route exact path='/addcart'element={<AddCart/>}/>
      <Route exact path='/footer'element={<Footer/>}/> */}

     </Routes>
    
    </div>
    <Productlist/>
   
    </BrowserRouter>
  )
}

export default App;
