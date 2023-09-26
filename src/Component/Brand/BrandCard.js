import React from 'react'
import './BrandStyle.css'
import { Card } from 'react-bootstrap'
import brand1 from '../../assets/image/brand1.png'
const BrandCard = ({ img }) => {
    return (
        <div className='mx-auto p-1'>
            <Card style={{ width: '', height: "90px" }}>
                <Card.Img variant="top" src={img} style={{ width: "100px", height: "80px" }} className='object-fit-cover  mx-auto' />
            </Card>
        </div>
    )
}

export default BrandCard