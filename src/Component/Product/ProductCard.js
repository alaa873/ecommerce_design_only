import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './productStyles.css'
import { Link } from 'react-router-dom'
const ProductCard = ({ img, price, title }) => {
    const handel = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <Col xs={12} sm={6} md={4} lg={3} className=' p-1  '>
            <Link to="/productdetails" onClick={handel} style={{ textDecoration: "none" }}>
                <Card style={{ width: "" }} className='product-card overflow-hidden shadow-sm p-2   '>
                    <Card.Img variant="top" src={img} style={{ width: "150px", height: "150px" }} className='img-card mt-1 object-fit-cover mx-auto ' />
                    <Card.Body className='mt-3 py-2 '>
                        <Card.Title className=''>
                            <p className='product-price mb-2'>${price}</p>
                            <p className='product-title p-0'>{title} </p>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default ProductCard