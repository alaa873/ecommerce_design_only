import React from 'react'
import ProductCard from '../Product/ProductCard'
import SubTile from '../../Utility/subTile/SubTile'
import { Container, Row } from 'react-bootstrap'
import img from '../../assets/image/1.webp'
import img2 from '../../assets/image/10.webp'
import img3 from '../../assets/image/3 (1).webp'
import img4 from '../../assets/image/3.webp'
import img5 from '../../assets/image/5.webp'
import img6 from '../../assets/image/6 (1).webp'
import img7 from '../../assets/image/arm-chair-01.jpg'
import img8 from '../../assets/image/single-sofa-01.jpg'


const HomeProductFeature = ({ title, btnName, path }) => {
    return (
        <Container className='py-2'>
            <SubTile title={title} btnName={btnName} path={path} />
            <Row className=' gy-1 d-flex justify-content-evenly mx-auto   '>
                <ProductCard img={img} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img7} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img2} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img8} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img3} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img4} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img5} price="18.90" title="Winter Jumpers" />
                <ProductCard img={img6} price="18.90" title="Winter Jumpers" />
            </Row>
        </Container>
    )
}

export default HomeProductFeature