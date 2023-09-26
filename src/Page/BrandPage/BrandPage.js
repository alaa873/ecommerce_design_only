import React from 'react'
import BrandContainer from '../../Component/Brand/BrandContainer'
import Pagination from '../../Utility/Pagination/Pagination'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'

const BrandPage = () => {
    return (
        <div>
            <NavBar />
            <div className='pt-4'>
                <BrandContainer />
                <Pagination />
                <Footer />
            </div>
        </div>
    )
}

export default BrandPage