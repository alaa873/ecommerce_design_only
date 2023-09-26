import React from 'react'
import './Cart.css'
import { Button, Row, Table } from 'react-bootstrap'
import img1 from '../../assets/image/3.webp';
import img2 from '../../assets/image/phone-06.jpg';
import img3 from '../../assets/image/mobile1.png';
import img4 from '../../assets/image/item.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faTrash, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
const CartItem = () => {
    const data = [
        { id: 1, image: img1, title: "product1", price: 500, total: 500 },
        { id: 1, image: img2, title: "product2", price: 600, total: 600 },
        { id: 1, image: img3, title: "product3", price: 700, total: 700 },
        { id: 1, image: img4, title: "product4", price: 800, total: 800 },
        { id: 1, image: img1, title: "product5", price: 500, total: 500 },
    ]
    return (
        <Row className='flex-column   cart-content'>
            <div className='res-table bg-white p-2 shadow-sm '>
                <Table className=' table   ' hover bordered >
                    <thead className='text-center'>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Product</th>
                            <th>Prie</th>
                            <th>Quntity</th>
                            <th>Subtotle</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            data ? (data.map((items) => {
                                return (<tr>
                                    <td className=' '>
                                        <FontAwesomeIcon icon={faXmark} className='close-icon' />
                                    </td>
                                    <td >
                                        <img src={items.image} alt='' width={"80px"} height={"100px"} className='rounded object-fit-cover ' />
                                    </td>
                                    <td>{items.title}</td>
                                    <td>${items.price}</td>
                                    <td>
                                        <div>
                                            <input
                                                className="  text-center rounded-3 border-1"
                                                type="number"
                                                placeholder='1'
                                                style={{ width: "70px", height: "35px" }}
                                            />
                                        </div>
                                    </td>
                                    <td>${items.total}</td>
                                </tr>)
                            })) : (null)
                        }

                    </tbody>
                </Table>
                <div>
                    <Button className='check-btn my-3'>
                        <FontAwesomeIcon icon={faTrashCan} className='me-2' />
                        Remove All
                    </Button>
                </div>
            </div>


        </Row>
    )
}

export default CartItem