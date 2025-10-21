import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import SlideUp from '../../utlits/animations/slideUp'
import { useServicesStore } from '../../utlits/store/service.store';
import { useMenuStore } from '../../utlits/store/menu.store';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';


const ServiceGrid = () => {
    const { data: servicesData, setData: setServicesData } = useServicesStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setServicesData(language);
    }, [language, setServicesData]);
    const { title, description, services } = servicesData;

    return (
        <section id="services" className="services-area innerpage-single-area">
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
                                spaceBetween={10}
                                loop={true}
                                navigation={
                                    {
                                        nextEl: ".testimonial-next",
                                        prevEl: ".testimonial-prev"
                                    }
                                }
                                modules={[Navigation]}
                            >
                                {services.map((service, index) =>
                                    <SwiperSlide key={index} >
                                        <Card id={index} icon={<RiGlobalFill size={60} />} title={service.title} description={service.description} price={service.price} />
                                    </SwiperSlide>
                                )}
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

                        {/* <Card id={2} icon={<RiQuillPenLine size={60} />} title={"Website Design"} description={"Bentos gives you the blocks & kits you need to create a true website within minutes."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Application Design"} description={"Bentos gives you the blocks & kits you need to create a true website within minutes."} /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id, price }) => {
    return (
        // <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p color='#EB5D3A' className="price">{price}</p>
                </div>
            </SlideUp>
        // </div>
    )
}