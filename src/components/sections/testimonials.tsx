import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { testimonialsData } from '../../utlits/fackData/testimonialsData';
import SlideUp from '../../utlits/animations/slideUp';
import { useTestimonialStore } from '../../utlits/store/testimonials.store';
import { useMenuStore } from '../../utlits/store/menu.store';


const Testimonials = () => {
    const { data: testimonialsData, setData: setTestimonialsData } = useTestimonialStore();
    const { language } = useMenuStore();
    
    useEffect(() => {
        setTestimonialsData(language);
    }, [language, setTestimonialsData]);
    const { title, description, testimonials } = testimonialsData;

    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>{title}</p>
                                    <h2>{description}</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <Swiper
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    767: {
                                        slidesPerView: 2,
                                    }
                                }}
                                spaceBetween={40}
                                loop={true}
                                navigation={
                                    {
                                        nextEl: ".testimonial-next",
                                        prevEl: ".testimonial-prev"
                                    }
                                }
                                modules={[Navigation]}
                            >
                                {testimonials.map((testimonial, index) => <SwiperSlide key={index} > <Card img={testimonial.image} name={testimonial.name} position={testimonial.role} review={testimonial.description} /> </SwiperSlide>)}
                            </Swiper>
                            <SlideUp>
                                <div className="slider-arrows text-center pt-40">
                                    <button className="testimonial-prev arrow">
                                        <RiArrowLeftSLine />
                                    </button>
                                    <button className="testimonial-next arrow">
                                        <RiArrowRightSLine />
                                    </button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials


const Card = ({ img, name, position, review }) => {
    return (
        <SlideUp>
            <div className="testimonial-item">
                <div className="author">
                    <img src={img} alt="Author" />
                </div>
                <div className="text">{review}</div>
                <div className="testi-des">
                    <h5>{name}</h5>
                    <span>{position}</span>
                </div>
            </div>
        </SlideUp>
    )
}
