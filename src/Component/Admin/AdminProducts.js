import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { Button } from 'react-bootstrap'
import img1 from '../../assets/image/3.webp';
import img2 from '../../assets/image/phone-06.jpg';
import img3 from '../../assets/image/mobile1.png';
import img4 from '../../assets/image/item.png';
import img5 from '../../assets/image/brand1.png';
import img6 from '../../assets/image/wireless-02.png';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
    const data = [
        { id: 1, image: img1, title: "product1", price: 500, },
        { id: 2, image: img2, title: "product2", price: 600, },
        { id: 3, image: img3, title: "product3", price: 700, },
        { id: 4, image: img4, title: "product4", price: 800, },
        { id: 5, image: img1, title: "product5", price: 500, },
        { id: 6, image: img1, title: "product1", price: 1000, },
        { id: 7, image: img2, title: "product2", price: 900, },
        { id: 8, image: img3, title: "product3", price: 700, },
        { id: 9, image: img4, title: "product4", price: 100, },
        { id: 10, image: img1, title: "product5", price: 200, },
        { id: 11, image: img6, title: "product1", price: 50, },
        { id: 12, image: img5, title: "product2", price: 60, },
        { id: 13, image: img3, title: "product3", price: 70, },
        { id: 14, image: img4, title: "product4", price: 80, },
        { id: 15, image: img1, title: "product5", price: 500, },

    ]
    const [dataArray, setDataArray] = useState()

    useEffect(() => {
        setDataArray(data)
    }, []);

    // hendel remove event
    const handelRemove = (id) => {
        setDataArray((prev) => prev.filter((el) => el.id !== id))
    }
    const columns = [
        {
            name: "id",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "image",
            selector: (row) => <img src={row.image} alt='' width={"70px"} height={"70px"} className='rounded object-fit-cover ' />
        },
        {
            name: "name",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "Actions",
            cell: (row) => (<div className='d-flex gap-1'>
                <Button className=''><FontAwesomeIcon icon={faPenToSquare} /></Button>
                <Link to="/productdetails"  ><Button className=''  ><FontAwesomeIcon icon={faEye} /></Button></Link>
                <Button className='btn-remove' onClick={() => handelRemove(row.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
            </div>)
        },
    ]

    return (
        <div className="m-auto px-2 ">
            <h3 className='mt-3'>All Products</h3>
            <DataTable
                columns={columns}
                data={dataArray}
                highlightOnHover={true}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="68vh"
                subHeader
                subHeaderComponent={
                    <div><input placeholder='Search' className='form-control' type='text' /></div>
                }

            />


        </div>
    )
}

export default AdminProducts