import React from 'react'
import './CategoryStyles.css'
import i from '../../assets/image/1.webp'
const CategoryCard = ({ title, img }) => {
    return (
        <div className='cat-content mx-1 p-1'>
            <div className='cat-card w-100 h-100  py-2 d-flex  align-items-center  '>
                <div className='cat-img p-1 me-2'>
                    <img src={img} style={{ width: "80px" }} alt='' className='img-fluid object-fit-cover' />
                </div>
                <p className='cat-name  text-start w-75  p-0 m-0 '>{title}</p>
            </div>
        </div>
    )
}

export default CategoryCard