import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/image/6310507.jpg'
import './Auth.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const LoginPage = () => {
    return (
        <div className=' login-page ' >
            <Container>
                <Row className='d-flex p-0 m-0 align-items-center'>
                    <Col md={6} className='d-none d-md-block  p-0' >
                        <LazyLoadImage effect='blur' src={logo} style={{ width: "", height: "" }} alt='' className='img-fluid object-fit-contain' />
                    </Col>
                    <Col md={6} className='py-5 text-center ' >

                        <h3 className='header py-5 text-center'>Login Account</h3>
                        <div className='login-form d-flex gap-3 flex-column align-items-center'>
                            <input
                                placeholder="email"
                                type="text"
                                className="user-input "
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                className="user-input "
                            />
                            <div className='d-flex flex-wrap justify-content-between py-4 w-75 mx-auto '>
                                <Link to="/admin/home" style={{ textDecoration: "none" }}>
                                    <button className="btn-login  ">Login</button>
                                </Link>

                                <Link to="/register" style={{ textDecoration: "none" }}>
                                    <button className="btn-login create-btn   ">Create account</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage