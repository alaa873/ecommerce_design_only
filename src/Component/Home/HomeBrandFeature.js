import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from '../Brand/BrandCard'
import SubTile from '../../Utility/subTile/SubTile'
import Slider from 'react-slick'
import i1 from '../../assets/image/brand1.png'
import i2 from '../../assets/image/brand2.png'
import i3 from '../../assets/image/brand3.png'
import i4 from '../../assets/image/5.webp'
import i5 from '../../assets/image/6.webp'
import i6 from '../../assets/image/7.webp'
import i7 from '../../assets/image/8.webp'
const HomeBrandFeature = () => {
    var settings = {
        dots: false,
        className: "center",
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        // initialSlide: 6,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    className: "center",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],

    };
    return (
        <Container className='py-4 pb-5'>
            <SubTile title="Brand" btnName="more" path="/allbrand" />
            <Row className='mx-auto'>
                <Slider {...settings} className='m-0'>
                    <BrandCard img={i1} />
                    <BrandCard img={i2} />
                    <BrandCard img={i3} />
                    <BrandCard img={i1} />
                    <BrandCard img={i3} />
                    <BrandCard img={i2} />
                    <BrandCard img={i3} />

                </Slider>

            </Row>
        </Container>
    )
}
export default HomeBrandFeature