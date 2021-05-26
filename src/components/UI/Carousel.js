import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../assets/images/carousel/image1.jpg'
import Img2 from '../../assets/images/carousel/image2.jpg'
import Img3 from '../../assets/images/carousel/image3.jpg'

const CustomCarousel = (props) => {

    const carouselConf = [
        { img: 1, title: "First slide label", description: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
        { img: 2, title: "First slide label", description: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
        { img: 3, title: "First slide label", description: "Nulla vitae elit libero, a pharetra augue mollis interdum." }
    ]

    return (
        <Carousel>
            {carouselConf &&
                carouselConf.map(item => {
                    let imgToPrint = "";

                    switch (item.img) {
                        case 1:
                            imgToPrint = Img1
                            break;
                        case 2:
                            imgToPrint = Img2
                        case 3:
                            imgToPrint = Img3
                            break;
                        default:
                    }

                    return (
                        <Carousel.Item key={item.img} interval={2000} style={{ 'height': "300px" }}>
                            <img
                                style={{ 'height': "300px" }}
                                className="d-block w-100"
                                src={imgToPrint}
                                alt="ille et vilaine image"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                )

            }
        </Carousel>
    )
}

export default CustomCarousel;