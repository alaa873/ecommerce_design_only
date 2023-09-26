import React from 'react'
import CategoryContainer from '../../Component/Category/CategoryContainer'
import Pagination from '../../Utility/Pagination/Pagination'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'
const CategoryPage = () => {
    return (
        <div >
            <NavBar />
            <div className='pt-4'>
                <CategoryContainer />
                <Pagination />
                <Footer />
            </div>
        </div>
    )
}

export default CategoryPage