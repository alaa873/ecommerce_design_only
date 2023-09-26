import React from 'react'
import img from '../../assets/image/avatar.png'
import { Col, Row } from 'react-bootstrap'
const AdminBrand = () => {
    return (

        <Row className='gy-3 m-auto px-2'>
            <Col xs="12" md="6" className='text-center'>
                <div className="fs-4 pb-2">Add New Brand</div>
                <div style={{ cursor: "pointer" }} className=' p-4 border position-relative overflow-hidden'>
                    <div className="text-form pb-2">Brand Photo</div>
                    <input className='w-100 h-100' style={{ position: "absolute", left: "0", opacity: "0", cursor: "pointer" }} type='file' />
                    <img src={img} alt="" height="100px" width="120px" />
                </div>
                <div className="d-flex align-items-center flex-column gap-3 ">
                    <input
                        type="text"
                        className=" d-block mt-3 p-1 px-3 w-75 user-input"
                        placeholder="Brand Name"
                    />
                    <button className="btn-login  w-25 ">Save </button>
                </div>
            </Col>
            <Col xs="12" md="6" className='text-center'>
                <div className="fs-4 pb-2">Add New Category</div>
                <div style={{ cursor: "pointer" }} className=' p-4 border position-relative overflow-hidden'>
                    <div className="text-form pb-2">Category Photo</div>
                    <input className='w-100 h-100' style={{ position: "absolute", left: "0", opacity: "0", cursor: "pointer" }} type='file' />
                    <img src={img} alt="" height="100px" width="120px" />
                </div>
                <div className="d-flex align-items-center flex-column gap-3 ">
                    <input
                        type="text"
                        className="input-form d-block mt-3 p-1 px-3 w-75 user-input"
                        placeholder="Category Name"
                    />
                    <button className="btn-login  w-25 ">Save </button>
                </div>
            </Col>
            <Col xs="12" md="6" className='text-center'>
                <div className="fs-4 pb-2">Add New SubCategory</div>
                <div className='border py-4 p-2 flex-column  d-flex align-items-center'>
                    <input
                        type="text"
                        className="input-form d-block  p-1 px-3 w-75 user-input"
                        placeholder="SubCategory Name"
                    />
                    <select name="languages" id="lang" className="select rounded-3 w-75 mt-3 p-2 ">
                        <option value="val">التصنيف الاول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالث</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                </div>
                <div className="py-3 ">
                    <button className="btn-login  w-25 ">Save </button>
                </div>
            </Col>


        </Row>

    )
}

export default AdminBrand