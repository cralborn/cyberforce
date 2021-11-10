import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className ="navbar-logo" onClick={closeMobileMenu}>
                        <p>InnovoEnergy</p>&nbsp;<i className='fas fa-power-off'/>    </Link>   
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/OurLakesDams' className='nav-links' onClick={closeMobileMenu}>Our Lakes & Dams</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Recreation' className='nav-links' onClick={closeMobileMenu}>Recreation</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Permits' className='nav-links' onClick={closeMobileMenu}>Permits</Link>
                        </li>
                        <li>
              <Link
                to='/ContactUS'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact US
              </Link>
            </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact US</Button>}
                </div>
            </nav>
        </>
    );
    
}

export default Navbar
