import React from 'react'
import MetaTags from '../components/ui/MetaTags'
import ContactForm from '../components/ContactForm/ContactForm'
import { usImage } from '../assets/images'

const ContactPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <MetaTags
        title="Looking for Us?"
        description="Welcome to Little Lemon, where each dish is crafted with love and
          authentic flavors. From fresh, vibrant salads to hearty main courses,
          our menu celebrates the best of Mediterranean cuisine. Join us for a
          taste that feels like home, but with a twist that keeps you coming
          back."
        imageUrl="%PUBLIC_URL%/hero-splash.png"
      />
      <div className=" mb-8 !h-[40vh]">
          <img
            src={usImage}
            alt="Little Lemon Restaurant"
            className="w-full h-full rounded-xl shadow-lg"
          />
        </div>
      <ContactForm />
    </main>
  )
}

export default ContactPage