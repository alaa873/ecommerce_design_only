import React, { useState } from 'react'
import './productStyles.css'
import moduleName from '../../assets/image/arm-chair-01.jpg'
import moduleName2 from '../../assets/image/arm-chair-02.jpg'
import moduleName3 from '../../assets/image/arm-chair-03.jpg'
import moduleName4 from '../../assets/image/single-sofa-01.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ProductGallery = () => {

    const data = [moduleName, moduleName2, moduleName3, moduleName4]
    const [updataMainImg, setUpdataMainImg] = useState(data[0])
    // hendel change img
    const handelChangImg = (i) => {
        setUpdataMainImg(data[i])
    }
    return (
        <div className='gallery-container  d-flex  flex-wrap flex-lg-nowrap  justify-content-center align-items-start    '>
            <div className='choice-img d-none d-lg-block  '>
                <ul className='d-flex flex-column mx-1 justify-content-center p-0 gap-1'>
                    {data && data.map((img, index) => {
                        return (
                            <li key={index}>
                                <img src={img} key={index} onMouseMove={() => handelChangImg(index)} alt=''
                                    style={{ width: "100px", height: "100px" }}
                                    className={updataMainImg === img ? "active object-fit-content img-size" : "img-size object-fit-content"} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='main-imgBox  '>
                <img src={updataMainImg} alt='' style={{ width: "", height: "100%" }}
                    className='object-fit-content  img-fluid' />
            </div>

            <div className='choice-img d-lg-none  '>
                <ul className='d-flex  mt-2 justify-content-center p-0 gap-1'>
                    {data && data.map((img, index) => {
                        return (
                            <li key={index}>
                                <LazyLoadImage effect='blur' src={img} key={index} onMouseMove={() => handelChangImg(index)} alt=''
                                    style={{ width: "100px", height: "100px" }}
                                    className={updataMainImg === img ? "active object-fit-content img-size" : "img-size object-fit-content"} />
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default ProductGallery