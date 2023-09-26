import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <Container className='py-2 my-2 rounded-3 bg-white'>
            <div className='cat-header d-flex flex-row flex-wrap '>
                <p className='cat-header-name my-0 mx-1'>All</p>
                <p className='cat-header-name my-0 mx-1'>phone</p>
                <p className='cat-header-name my-0 mx-1'>tv</p>
                <p className='cat-header-name my-0 mx-1'>clothes</p>
                <p className='cat-header-name my-0 mx-1'>tv</p>
                <p className='cat-header-name my-0 mx-1'>clothes</p>
                <p className='cat-header-name my-0 mx-1'>More...</p>
            </div>
        </Container>

    )
}

export default CategoryHeader