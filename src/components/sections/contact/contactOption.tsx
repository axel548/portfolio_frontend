import { RiMailLine, RiMapPinLine, RiPhoneLine, RiLinkedinLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'
import { Info } from '../../../types/contact'

interface ContactOptionProps {
    info: Info;
}

const ContactOption: React.FC<ContactOptionProps> = ({ info }) => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    {info.address.status && (
                        <SlideUp delay={2}>
                            <div className="single-contact">
                                <div className="contact-icon">
                                    <i><RiMapPinLine size={20} /></i>
                                </div>
                                <h2>{info.address.title}</h2>
                                <p>{info.address.description}</p>
                            </div>
                        </SlideUp>
                    )}
                    {info.phone.status && (
                        <SlideUp delay={3}>
                            <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                                <div className="contact-icon">
                                    <i> <RiPhoneLine size={20} /></i>
                                </div>
                                <h2>{info.phone.title}</h2>
                                <p>{info.phone.description}</p>
                            </div>
                        </SlideUp>
                    )}
                    {info.email.status && (
                        <SlideUp delay={4}>
                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                                <div className="contact-icon">
                                    <i> <RiMailLine size={20} /></i>
                                </div>
                                <h2>{info.email.title}</h2>
                                <p>{info.email.description}</p>
                            </div>
                        </SlideUp>
                    )}
                    {info.linkedin.status && (
                        <SlideUp delay={4}>
                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                                <div className="contact-icon">
                                    <i> <RiLinkedinLine size={20} /></i>
                                </div>
                                <h2>{info.linkedin.title}</h2>
                                <p>{info.linkedin.description}</p>
                            </div>
                        </SlideUp>
                    )}
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption