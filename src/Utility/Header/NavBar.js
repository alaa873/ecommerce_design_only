import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './NavBar.css'
import { Button, Container, NavLink, Navbar } from 'react-bootstrap'
import Hamburger from 'hamburger-react'
import ButtonTop from '../../Component/ButtonTop/ButtonTop'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (

        <div>
            <Navbar expand="md" className=" navbar p-3">
                <Container >
                    <Navbar.Brand href="/"><div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faBasketShopping} className='logo-icon mb-1 fs-4  ' />
                        <h3 className='ms-2 my-0 logo-text'>Basket</h3>
                    </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" ><Hamburger /></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <div
                            className="mx-auto my-4 my-md-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className=' d-flex mx-auto  inpout-content  '>
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="custom-input w-100"
                                    aria-label="Search"
                                />
                                <Button className='ms-0 custom-btn' variant="btn ">Search</Button>

                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center icon-content'>
                            <NavLink href="/login" className='d-flex me-3 flex-column justify-content-center icon-box '>
                                <FontAwesomeIcon icon={faUser} className='nav-icon' />
                                <span className='icon-name'>Profile</span>
                            </NavLink>
                            <NavLink href='/cart' className='d-flex  me-3 flex-column justify-content-center  icon-box'>
                                <FontAwesomeIcon icon={faBagShopping} className='nav-icon ' />
                                <span className='order-count'>10</span>
                                <span className='icon-name'>My Cart</span>
                            </NavLink>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ButtonTop />
            {/* <div className=' .navbar bg-danger p-2 w-100 min-vw-100 fixed-bottom'>
                <div className='d-flex justify-content-evenly align-items-center icon-content'>
                    <NavLink href="/login" className='d-flex me-3 flex-column justify-content-center icon-box '>
                        <FontAwesomeIcon icon={faUser} className='nav-icon' />
                        <span className='icon-name'>Profile</span>
                    </NavLink>
                    <NavLink href='/cart' className='d-flex  me-3 flex-column justify-content-center  icon-box'>
                        <FontAwesomeIcon icon={faBagShopping} className='nav-icon ' />
                        <span className='order-count'>10</span>
                        <span className='icon-name'>My Cart</span>
                    </NavLink>
                </div>
            </div> */}
        </div>






    )
}

export default NavBar