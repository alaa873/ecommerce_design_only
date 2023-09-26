import React from 'react'
import CategoryHeader from '../../Component/Category/CategoryHeader'
import SerachContent from '../../Component/Product/SerachContent'
import { Col, Container, Row } from 'react-bootstrap'
import HomeProductFeature from '../../Component/Home/HomeProductFeature'
import Pagination from '../../Utility/Pagination/Pagination'
import SidBare from '../../Utility/SideBare/SidBare'
import Footer from '../../Utility/Footer/Footer'
import NavBar from '../../Utility/Header/NavBar'
const SearchProductsPage = () => {
    return (
        <div className=''>
            <NavBar />
            <CategoryHeader />
            <Container className='py-4 bg-white  rounded-3'>
                {/* this sort by price */}
                <SerachContent />
                <Row className='mx-auto'>
                    <Col xs={2} md={2} className='d-none d-md-block'>
                        {/* sidebar filter */}
                        <SidBare />
                    </Col>
                    <Col xs={12} md={10} className='p-0 m-0 ' >
                        {/* view products */}
                        <HomeProductFeature title="" btnName="" path="" />
                    </Col>
                </Row>
                <Pagination />
            </Container>
            <Footer />
        </div>
    )
}

export default SearchProductsPage