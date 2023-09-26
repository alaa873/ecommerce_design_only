import Multiselect from 'multiselect-react-dropdown'
import React from 'react'
import avatar from '../../assets/image/avatar.png'
import add from '../../assets/image/add.png'
import { Col, Row } from 'react-bootstrap'

const AdminAddProduct = () => {
    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "التصنيف الاول", id: 1 },
        { name: "التصنيف الثاني", id: 2 },
    ];
    return (
        <Row className='m-auto px-2 py-3 g-2 text-center'>
            <Col sm="6" className=' p-md-3'>
                <div style={{ cursor: "pointer ", height: "190px" }} className='border text-center p-3 '>
                    <div className="text-form mb-2"> صور للمنتج</div>
                    <img src={avatar} alt='' style={{ width: "100px", height: "" }} />
                </div>
                <input
                    type="text"
                    className="user-input d-block w-100 mt-3 px-3"
                    placeholder="اسم المنتج"
                />

                <textarea
                    className=" user-input  w-100  p-2 mt-3"
                    style={{ height: "120px" }}
                    rows="4"
                    cols="50"
                    placeholder="وصف المنتج"
                />

            </Col>
            <Col sm="6" className='p-md-3'>
                <input
                    type="number"
                    className="user-input  d-block w-100 px-3"
                    placeholder="السعر قبل الخصم"
                />
                <input
                    type="number"
                    className="user-input  d-block mt-3 w-100 px-3"
                    placeholder="السعر قبل الخصم"
                />
                <input
                    type="number"
                    className="user-input  d-block mt-3 w-100 px-3"
                    placeholder="سعر المنتج"
                />
                <select
                    name="languages"
                    id="lang"
                    className="user-input input-form-area w-100 mt-3 px-2 ">
                    <option value="val">التصنيف الرئيسي</option>
                    <option value="val">التصنيف الاول</option>
                    <option value="val2">التصنيف الثاني</option>
                    <option value="val2">التصنيف الثالث</option>
                    <option value="val2">التصنيف الرابع</option>
                </select>

                <select
                    name="brand"
                    id="brand"
                    className="user-input w-100 input-form-area mt-3 px-2 ">
                    <option value="val">الماركة</option>
                    <option value="val2">التصنيف الماركة الاولي</option>
                    <option value="val2">التصنيف الماركة الثانيه</option>
                    <option value="val2">التصنيف الرابع</option>
                </select>

                <Multiselect
                    className="mt-3 "
                    placeholder="التصنيف الفرعي"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
                />
                <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                <div className="mt-3 d-flex">
                    <img src={add} alt="" width="25px" height="30px" style={{ cursor: "pointer" }} className="" />
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "#E5eC2C" }}></div>
                    <div
                        className="color ms-2 border mt-1 "
                        style={{ backgroundColor: "white" }}></div>
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "#ddeeff" }}></div>

                </div>
            </Col>
            <Row className=' mx-auto py-2 d-flex justify-content-center mt-4'>
                <button className="btn-login   ">Save </button>
            </Row>
        </Row>
    )
}

export default AdminAddProduct