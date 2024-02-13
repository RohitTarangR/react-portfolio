import React from "react";
import { useForm } from "@formspree/react";
import { contact } from "../data";

const Contact = () => {

const [state, handleSubmit] = useForm("xkndrjvw");

if (state.succeeded) {
  return <p className="bg-secondary text-center text-white p-6 font-semibold text-xl">Thanks for Contact Me! </p>;
}
  
  return (
    <>
      <section className="section bg-primary" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
              Contact me
            </h2>
            <p className="subtitle">
              Please reach out me in case of any concerns. Please fill out this
              form and I will get back to you at earliest. Contact us for
              anything related to any project.
            </p>
          </div>

          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;

                return (
                  <div
                    className="flex flex-col lg:flex-row gap-x-4"
                    key={index}
                  >
                    <div className="text-accent rounded-sm w-14 h-10 lg:mb-0 text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-body text-xl mb-1">{title}</h4>
                      <p className="mb-1">{subtitle}</p>
                      <p className="text-accent font-normal text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <form
              className="space-y-8 w-full max-w-[780px]"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-8">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your name"

                />
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Your email"

                />
              </div>
              <input
                type="text"
                className="input"
                name="subject"
                placeholder="Subject"
              />

              <textarea
                className="textarea"
                name="message"
                placeholder="Your message"
              ></textarea>
              <button
                type="submit"
                className="btn btn-lg bg-accent hover:bg-accent-hover"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
