import React from 'react'
import CategoryCard from '../Category/CategoryCard'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import SubTile from '../../Utility/subTile/SubTile';
import i1 from '../../assets/image/1.webp'
import i2 from '../../assets/image/10.webp'
import i3 from '../../assets/image/3.webp'
import i4 from '../../assets/image/5.webp'
import i5 from '../../assets/image/6.webp'
import i6 from '../../assets/image/7.webp'
import i7 from '../../assets/image/8.webp'
const HomeFeatureCategory = () => {
    var settings = {
        dots: false,
        className: "center",
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 6,
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
        <Container className='py-4'>
            <SubTile title="category" btnName="more" path="/allcategory" />
            <Row className='mx-auto'>
                <Slider {...settings} className='m-0 '>
                    <CategoryCard title="الكترونيات " img={i1} />
                    <CategoryCard title=" اجهزة كهربائية" img={i2} />
                    <CategoryCard title="موبيلات" img={i3} />
                    <CategoryCard title=" اكسسورات لاب توب" img={i4} />
                    <CategoryCard title=" T-shirts with for men" img={i5} />
                    <CategoryCard title=" T-shirts with for men" img={i6} />
                    <CategoryCard title=" T-shirts with for men" img={i7} />
                    <CategoryCard title="الكترونيات " img={i1} />
                    <CategoryCard title=" اجهزة كهربائية" img={i2} />

                </Slider>

            </Row>
        </Container>
    )
}

export default HomeFeatureCategory