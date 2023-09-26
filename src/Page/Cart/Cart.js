import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Component/Cart/CartItem'
import Checkout from '../../Component/Cart/Checkout'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'

const Cart = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Row className='g-2 py-4'>
                    <h3 className=''>Shopping Cart</h3>
                    <Col md={8}>
                        <CartItem />
                    </Col>
                    <Col md={4} className=''>
                        <Checkout />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart