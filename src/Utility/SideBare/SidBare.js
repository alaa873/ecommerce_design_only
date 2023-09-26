import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import './SidBar.css'
const SidBare = () => {
    return (
        <Row className='d-flex flex-column p-1 shadow-sm overflow-hidden  mt-md-5  sideBare-filter  '>
            <h5>Filters</h5>
            <Accordion className='my-3  p-0 m-0'>
                <Accordion.Item className=' shadow-none' eventKey="0">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>iphons</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>clothes</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>lab</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>tv</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='my-3 p-0 m-0'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>appel</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>توشيبا</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>سامسونج</label>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <input type='checkbox' value="" />
                            <label className='ms-2'>العربي</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className='my-3 p-0 m-0 '>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body className='p-1'>
                        <div className="d-flex gap-2  py-2 align-items-center justify-content-center flex-wrap ">
                            <input
                                className=" p-1 rounded-3 border-1"
                                type="number"
                                placeholder='from'
                                style={{ width: "70px", height: "35px" }}
                            />
                            <input
                                className="p-1 rounded-3 border-1"
                                placeholder='to'
                                type="number"
                                style={{ width: "70px", height: "35px" }}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Row>

    )
}

export default SidBare