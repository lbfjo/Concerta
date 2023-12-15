import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { sendEmail } from "@lib/utils/send-email";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info, success } = frontmatter;
  const { contact_form_action } = config.params;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    sendEmail(formData, setIsFormSubmitted);
    // You can use the FormData API to get the form data and send it wherever you want.
    // For example, you can use the fetch API to send it to an API endpoint.
  };
  return isFormSubmitted ? (
    <section className="section">
      <div className="container">
        {markdownify(success, "h1", "text-center font-normal")}
      </div>
    </section>
  ) : (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              onSubmit={handleSubmit}
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  name="message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
