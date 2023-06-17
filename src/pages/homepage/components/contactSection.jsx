import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fva1hpk',
        'template_pkhk2aq',
        e.target,
        'px1pDcGQFv6XJ97sQ'
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        e.target.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div
        id="contact-section"
        className="bg-grey flex flex-col gap-20 lg:flex-row justify-evenly px-3 py-10 lg:py-10 max-w-6xl mx-auto mb-10"
      >
        <div className="text-center flex flex-col gap-10 items-center justify-center">
          <p className="text-3xl">Contact me</p>
          <h2 className="font-serif text-4xl">Have a question?</h2>
          <span>
            <hr className="w-40 text-black border border-black" />
          </span>
        </div>
        <form
          onSubmit={sendEmail}
          className="bg-[#DFDEE3] mx-1 py-8 flex flex-col gap-5 lg:gap-9 lg:w-96"
        >
          <div className="flex flex-col gap-3 mx-5">
            <label htmlFor="name">Name</label>
            <input
              className="rounded-[5px] px-2 py-2"
              type="text"
              id="name"
              name="from_name"
            />
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <label htmlFor="email">Email</label>
            <input
              className="rounded-[5px] px-2 py-2"
              type="email"
              id="email"
              name="from_email"
            />
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <label htmlFor="subject">Subject</label>
            <input
              className="rounded-[5px] px-2 py-2"
              type="text"
              id="subject"
              name="from_subject"
            />
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <label htmlFor="message">Message</label>
            <textarea
              className="rounded-[5px] px-2 py-2"
              id="message"
              name="message"
              rows="3"
            ></textarea>
          </div>
          <div className="mx-5 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-black px-10 py-2 text-white shadow-sm w-50"
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Thank you!' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
``
