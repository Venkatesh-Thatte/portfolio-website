import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await fetch("https://formspree.io/f/xblklvgb", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Message failed to send. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-32">
        <h4 className="text-4xl font-semibold text-center mt-20">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let’s Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 8143720068</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">thattevenkatesh814@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Yemmiganur, Andhra Pradesh, India</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 font-semibold text-lg text-center animate-bounce">
            Message submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactMe;

