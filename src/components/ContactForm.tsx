import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

type ContactFormProps = {
  setMessageSent: (value: boolean) => void;
}


export default function ContactForm({ setMessageSent }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const sendEmail = (e: React.FormEvent) => {

    e.preventDefault();

    // Installed npm install --save-dev @types/grecaptcha 
    const captchaResponse = grecaptcha.getResponse()

    if(!captchaResponse){
      throw new Error('Captcha not verified')
    }

    fetch('http://localhost:8000/captcha-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({captchaResponse})
    })
    .then(res => res.json())
    .then(data => {
      if(data.captchaSuccess){
        console.log('Captcha verified')
      } else {
        console.error('Captcha not verified')
    }})
    .catch(err => console.error(err))

    if (form.current) {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_SERVICE_ID}`,
          `${import.meta.env.VITE_TEMPLATE_ID}`,
          form.current,
          {
            publicKey: `${import.meta.env.VITE_EMAIL}`,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setMessageSent(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="text-white flex flex-col max-w-[40rem] gap-4 mx-auto w-[100%] lg:w-[50%] bg-[#515151] p-4 lg:p-[2rem]"
    >
      <div className="flex flex-col items-start gap-y-4 w-full">
        <div className="w-full flex flex-col " >
          <label className="self-start">Name</label>
          <input type="text" name="user_name" id="form-name" required/>
        </div>

        <div className="w-full flex flex-col" >
          <label className="self-start">Email</label>
          <input type="email" name="user_email" required/>
        </div>

        <div className="w-full flex flex-col" >
          <label className="self-start">Message</label>
          <textarea name="message" rows={6} required/>
        </div>
      </div>
      <div className="g-recaptcha" data-sitekey={`${import.meta.env.VITE_CAPTCHA}`}></div>
      <input type="submit" value="SEND" className="bg-[#2d203e] text-white self-center px-[2rem] py-[0.5rem] hover:bg-[#3d2b54] active:bg-[#2d203e]" />
    </form>
  );
}
