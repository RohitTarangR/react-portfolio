import React from "react";
import { contact } from "../data";

const Contact = () => {
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

            <form className="space-y-8 w-full max-w-[780px]">
              <div className="flex gap-8">
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  required={true}
                />
                <input
                  type="email"
                  className="input"
                  placeholder="Your email"
                  required={true}
                />
              </div>
              <input
                type="text"
                className="input"
                name=""
                id=""
                placeholder="Subject"
                required={true}
              />

              <textarea
                className="textarea"
                placeholder="Your message"
                required={true}
              ></textarea>
              <button className="btn btn-lg bg-accent hover:bg-accent-hover">
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
