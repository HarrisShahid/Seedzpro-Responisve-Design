import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    };
    const closeMobileMenu = () =>{
        setClick(false)
    }
    const showButton =()=>{
        if(window.innerWidth<=760){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={handleClick}>
                Harry <i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                        <Link className='nav-links-mobile' to='/Contacts' onClick={closeMobileMenu}>
                        Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links' to='/' onClick={closeMobileMenu}>
                        Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links' to='/Abouts' onClick={closeMobileMenu}>
                        About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links' to='/Products' onClick={closeMobileMenu}>
                        Products</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' buttonSize='btn--large'>Contact</Button>}
            </div>
        </div>
    </>
  )
}

export default Navbar
