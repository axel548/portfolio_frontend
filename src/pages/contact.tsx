import React, { useEffect } from 'react'
import ContactOption from '../components/sections/contact/contactOption'
import ContactForm from '../components/sections/contact/contactForm'
import { useContactStore } from '../utlits/store/contact.store';
import { useMenuStore } from '../utlits/store/menu.store';

const Contact = () => {
  const { data: contactData, setData: setContactData } = useContactStore();
  const { language } = useMenuStore();
  
  useEffect(() => {
    setContactData(language);
  }, [language, setContactData]);
  const { title, description, info, form } = contactData;

  return (
    <section id="contact" class="contact-area innerpage-single-area">
      <div class="container">
        <div class="container-inner">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title text-center wow fadeInUp delay-0-2s">
                <p>{title}</p>
                <h2>{description}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <ContactOption info={info} />
            <ContactForm form={form} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact