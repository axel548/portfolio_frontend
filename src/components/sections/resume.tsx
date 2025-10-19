import { RiBookLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import SlideUp from '../../utlits/animations/slideUp'
import { useExperienceEducationStore } from '../../utlits/store/experience_education.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const Resume = () => {
    const { data: experienceEducationData, setData: setExperienceEducationData } = useExperienceEducationStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setExperienceEducationData(language);
    }, [language, setExperienceEducationData]);
    const { education, experience } = experienceEducationData;

    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>{experience.title}</h2>
                                <div className="experience-list">
                                    {experience.experience.map((experience, index) => (
                                        <Card year={`${experience.start_date} - ${experience.end_date}`} title={experience.title} institution={experience.company} />
                                    ))}
                                    {/* <Card year={'2021 - 2023'} title={'Marketing Expert GRP'} institution={'Envato Theme Developer'} />
                                    <Card year={'2021 - 2022'} title={'Web Designer'} institution={'Web Developer & Business Partner'} /> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>{education.title}</h2>
                                    {education.education.map((education, index) => (
                                        <Card year={`${education.start_date} - ${education.end_date}`} title={education.title} institution={education.institution} />
                                    ))}

                                    {/* <Card year={'2021 - 2024'} title={'Higher secoundery Education'} institution={'Premium College United VC'} />
                                    <Card year={'2020 - 2021'} title={'UI/UX Design'} institution={'Webster College'} /> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}