import React from 'react'
import { Container } from 'react-bootstrap'
import Landing from '../../Component/Home/Landing'
import SubTile from '../../Utility/subTile/SubTile'
import HomeFeatureCategory from '../../Component/Home/HomeFeatureCategory'
import HomeProductFeature from '../../Component/Home/HomeProductFeature'
import HomeBanar from '../../Component/Home/HomeBanar'
import HomeBrandFeature from '../../Component/Home/HomeBrandFeature'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Landing />
            <HomeFeatureCategory />
            <HomeProductFeature title="Products" btnName="more" path="/allproducts" />
            <HomeBanar />
            <HomeProductFeature title="best seller" btnName="more" path="/allproducts" />
            <HomeBrandFeature />
            <Footer />
        </div>

    )
}

export default Home