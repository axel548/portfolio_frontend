import React, { useEffect } from 'react'
import profile from "../../assets/images/about/profile.jpg"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { useAboutStore } from '../../utlits/store/about.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const Summery = () => {
    const { data: aboutData, setData: setAboutData } = useAboutStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setAboutData(language);
    }, [language, setAboutData]);
    const { title, description, button } = aboutData;

    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>{title}</h2>
                                <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">{button}<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery