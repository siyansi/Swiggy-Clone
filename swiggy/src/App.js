import logo from './logo.svg';
import './App.css';
import HomePage from './component/protective/pages/HomePage';
import Header from './component/protective/pages/Header';
import Home from './component/protective/pages/Home';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import AuthGurad from './component/auth/Authgard';
import Productlist from './component/protective/pages/Productlist';


function App() {
  return (
    <BrowserRouter>
    <div className=''>
      <Routes>
      <Route path='/'element={<AuthGurad component={<HomePage/>}/>}/>
    
     </Routes>
    
    </div>
    <Productlist/>
    </BrowserRouter>
  )
}

export default App;
