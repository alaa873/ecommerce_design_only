import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div className='mx-auto details-content ms-md-3 py-4'>
            <div className='mb-4'>
                <h3 className='product-title'>chair</h3>
                <p className='my-0'>Category</p>
                <p className='brand my-0'>Brand / <span className='brand-name'>chair</span></p>
                <p className='stock-text my-0'>32 in Stock</p>
            </div>
            <Row className='mx-auto mb-2'>
                <Col md="8" className="m-0 p-0 d-flex">
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "#E52C" }}>

                    </div>
                    <div
                        className="color ms-2 border  active "
                        style={{ backgroundColor: "white" }}>

                    </div>
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "#ddeeff" }}>
                    </div>
                    <div
                        className="color ms-2 border"
                        style={{ backgroundColor: "#eefccf" }}>
                    </div>
                </Col>
            </Row>
            <div className='d-flex align-items-center '>
                <p className='price me-5 m-0'>$250</p>
                <del className='after-price'>$2800</del>
            </div>
            <div className=' d-flex  '>
                <ul className='d-flex me-3  m-0 p-0'>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                    <li> <FontAwesomeIcon icon={faStar} className='ratio-icon' /></li>
                </ul>
                <p className='ratio-number'>4.09</p>
            </div>
            <div className='w-100'>
                <p className='details-title m-0'>Detail:</p>
                <p>Huawei’s re-badged P30 Pro New
                    Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.</p>
            </div>
            <div className='btn-box d-flex justify-content-between  justify-content-md-start'>
                <Button className='me-4 btn-buy btns' variant="">Buy Now</Button>
                <Button className='btn-add btns' variant="">Add To Cart</Button>


            </div>
        </div>
    )
}

export default ProductText