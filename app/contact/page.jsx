import React from 'react'
import Hero from '../components/contact/Hero';
import Contact_Form from '../components/contact/Contact_Form';
import Contact_Faq from '../components/contact/Contact_Faq';

const contact = () => {
  return (
    <div>
      <Hero/>
      <Contact_Form/>
      <Contact_Faq/>
    </div>
  )
}

export default contact;