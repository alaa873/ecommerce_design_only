import React from 'react'
import ProductDetailsContainer from '../../Component/Product/ProductDetailsContainer'
import RateContainer from '../../Component/Rate/RateContainer'
import HomeProductFeature from '../../Component/Home/HomeProductFeature'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'


const ProductDetailsHome = () => {
    return (
        <div>
            <NavBar />
            <div className='pt-4'>
                <ProductDetailsContainer />
                <RateContainer />
                <HomeProductFeature title="Products" />
                <Footer />
            </div>
        </div>
    )
}

export default ProductDetailsHome