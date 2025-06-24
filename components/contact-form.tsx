"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/utils/toast";
import { useLanguage } from "@/i18n";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const { t } = useLanguage();
  const { setToast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("FORM SUCCESS!");
          setToast({ type: "success", message: "SUCCESS!" });
          form.current?.reset();
        },
        (error) => {
          console.log("FORM FAILED...", error.text);
          setToast({
            type: "error",
            message: error.text || t("defaultErrorMsg"),
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact_form">
      <div
        className="relative flex flex-col border border-primary 
                bg-tertiary p-6 sm:p-10 rounded-xl w-full max-w-lg mx-auto mt-2 md:mt-0 md:min-w-[500px]"
      >
        <label htmlFor="name" className="relative w-full mb-6">
          <input
            type="text"
            placeholder=" "
            name="name"
            id="name"
            className="w-full px-3 py-1 text-lg outline-none 
                        border-b-2 border-primary/70
                        hover:border-primary duration-200 peer"
            required
          />
          <span
            className="absolute left-0 top-2 text-lg tracking-wide 
                        peer-focus:text-primary pointer-events-none duration-200 
                        peer-focus:text-sm peer-focus:-translate-y-5 
                        peer-focus:bg-tertiary
                        ml-1 peer-valid:text-sm peer-valid:-translate-y-5
                            peer-not-placeholder-shown:text-primary"
          >
            {t("name")}
          </span>
        </label>

        <label htmlFor="email" className="relative w-full mb-6">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            className="w-full px-3 py-1 text-lg outline-none 
                        border-b-2 border-primary/70
                        hover:border-primary duration-200 peer"
            required
          />
          <span
            className="absolute left-0 top-2 text-lg tracking-wide
                            peer-focus:text-primary pointer-events-none duration-200
                            peer-focus:text-sm peer-focus:-translate-y-5
                            peer-focus:bg-tertiary
                            ml-1 peer-valid:text-sm peer-valid:-translate-y-5
                            peer-not-placeholder-shown:text-primary"
          >
            {t("email")}
          </span>
        </label>

        <label htmlFor="message" className="relative w-full mb-6">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            className="w-full min-h-40 px-3 py-1 text-lg outline-none
                        border-b-2 border-primary/70
                        hover:border-primary duration-200 peer
                        resize-none"
            required
          ></textarea>
          <span
            className="absolute left-0 top-2 text-lg tracking-wide
                            peer-focus:text-primary pointer-events-none duration-200
                            peer-focus:text-sm peer-focus:-translate-y-5
                            peer-focus:bg-tertiary
                            ml-1 peer-valid:text-sm peer-valid:-translate-y-5
                            peer-not-placeholder-shown:text-primary"
          >
            {t("message")}
          </span>
        </label>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <button
          type="submit"
          className=" p-2 rounded-xl font-bold bg-primary cursor-pointer hover:opacity-80"
        >
          {t("send")}
        </button>
      </div>
    </form>
  );
};

export default ContactMe;
