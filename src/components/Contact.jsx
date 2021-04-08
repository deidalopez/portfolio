import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.scss'

function ContactForm() {
  const [state, handleSubmit] = useForm("mayayplq");
  if (state.succeeded) {
    return <p>Thank you! I'll reach out shortly</p>;
  }


  return (
    <div className="contactSection">
      <form className="form" onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email Address</label> */}
        <input className='formInput' id="email" placeholder="Email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea className='formInput textarea' id="message" placeholder="Your message to me" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="buttonContainer">
          <button className='submitButton' type="submit" disabled={state.submitting}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
