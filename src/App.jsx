import {Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/home';
import Cart from './components/Cart';

function App() {


  return (
    <div className='Wrapper'>
      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
              </Routes>
    </div>
  )
}

export default App
