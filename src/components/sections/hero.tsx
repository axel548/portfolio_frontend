import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.jpg"
// import partner1 from "../../assets/images/client-logos/partner1.png"
// import partner2 from "../../assets/images/client-logos/partner2.png"
// import partner3 from "../../assets/images/client-logos/partner3.png"
// import partner4 from "../../assets/images/client-logos/partner4.png"
// import partner5 from "../../assets/images/client-logos/partner5.png"
import SlideUp from '../../utlits/animations/slideUp';
import { usePersonalnfoStore } from '../../utlits/store/persona_info.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const Hero = () => {
    const { data: personalInfoData, setData: setPersonalInfoData } = usePersonalnfoStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setPersonalInfoData(language);
    }, [language, setPersonalInfoData]);
    const personal_info = personalInfoData;
    const { hero, summary, company } = personal_info;
    const { title: companyTitle, companies } = company;

    const url_cv = summary.cv_button.url;
    const label_cv = summary.cv_button.label;
    const status_freelance = summary.available_to_freelance.status;
    const label_freelance = summary.available_to_freelance.label;

    console.log('PersonalInfo Data in Hero:', personal_info);
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>{hero.name}</h2>
                                <p>{hero.description}</p>
                                <div className="about-social text-center">
                                    <ul>
                                        {/* <li><Link to=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link to=""><RiTwitterXLine size={20} /></Link></li> */}
                                        <li><Link to={hero.linkedin}><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to={hero.github}><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>{summary.greeting}</p>
                                <h4>{summary.description}</h4>
                                <div className="adress-field">
                                    <ul>
                                        {status_freelance === true && (
                                            <li className='d-flex align-items-center'>
                                                <i><RiCircleFill size={14} /></i> {label_freelance}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link to={url_cv} className="theme-btn">{label_cv} <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>{companyTitle}</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                {companies.map((company, index) => (
                                                    <img key={index} src={company.image} alt={company.description} />
                                                ))}
                                                {/* <img src={partner1} alt="" />
                                                <img src={partner2} alt="" />
                                                <img src={partner3} alt="" />
                                                <img src={partner4} alt="" />
                                                <img src={partner5} alt="" />
                                                <img src={partner1} alt="" /> */}
                                            </Marquee>
                                        </div>
                                    </div>
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

export default Hero