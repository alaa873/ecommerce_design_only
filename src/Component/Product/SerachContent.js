import React, { useState } from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from '../../assets/image/sort.png'
import filter from '../../assets/image/filter.png'
import { Offcanvas } from 'react-bootstrap'
import SidBare from '../../Utility/SideBare/SidBare'
const SerachContent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handler = () => {

    }
    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <p className='my-0 products-length '>products 25</p>
                <div className='d-flex justify-content-between gap-3  align-items-center p-1'>
                    <UnopDropdown
                        onAppear={handler}
                        onDisappearStart={handler}
                        trigger={<p className='my-0 mb-1  '>
                            <img src={sort} alt='' style={{ width: "20px", height: "20px" }} className='mx-1 ' />
                            Sort By
                        </p>}
                        delay={300}
                        align="CENTER"
                        hover
                    >
                        <div className='card-filter mt-1 ' >
                            <div className='border-bottom card-filter-item'>من الاعلي للاقل</div>
                            <div className='border-bottom card-filter-item'>من الاقل للاعلي</div>
                            <div className='border-bottom card-filter-item'>الاكثر مبيعا</div>
                            <div className='border-bottom card-filter-item'>I am random</div>
                        </div>
                    </UnopDropdown>
                    <div onClick={handleShow} className='d-flex align-items-center filter-btn p-0 d-md-none '>
                        <img src={filter} alt='' style={{ width: "20px", height: "" }} className='mx-1 ' />
                        <p className='my-0'>Filter</p>
                    </div>
                </div>
            </div>
            <Offcanvas className="d-md-none" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidBare className="mt-0" />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SerachContent