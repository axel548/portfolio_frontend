import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { useLetsTalkStore } from '../../utlits/store/lets_talk.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const CallToAction = () => {
    const { data: letsTalkData, setData: setLetsTalkData } = useLetsTalkStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setLetsTalkData(language);
    }, [language, setLetsTalkData]);
    const { title, description, button } = letsTalkData;

    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">{button}  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction