import logo from '../assets/logo.png';
import './Navbar.css';
import { LuShoppingCart } from "react-icons/lu";
import {React} from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className="Navbar">
            <div className='nav-space'>
                <div className='logo-contianer'>
                <img src={logo} alt='Logo' className='Logo' width={200}/>
                </div>
                <div className='nav-links'>
                <Link to={'/'} style={{textDecoration: 'none'}}><div className='home-link'>
                    Home
                    </div></Link>
                    
                  <Link to={'/cart'}>
                    <div className='cart-icon-div'>
                       <LuShoppingCart className='cart-icon' />
                        <div className='cart-count'>0</div>
                    </div>
                  </Link>  
                </div>
            </div>
            

        </div>
    )
        
    
};
export default Navbar;