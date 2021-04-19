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
      <form className="form" onSubmit={handleSubmit} style={{boxShadow:'1px 1px 5px black'}}>
        {/* <label htmlFor="email">Email Address</label> */}
        <input className='formInput' id="email" placeholder="Enter your email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea className='formInput textarea' id="message" placeholder="Let's chat!" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="buttonContainer">
          <button className='submitButton' type="submit" disabled={state.submitting}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
