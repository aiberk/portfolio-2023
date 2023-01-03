import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();

  const onFormSubmit = (data: FormData) => {
    fetch(`https://eoool18qsq2s2me.m.pipedream.net`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => {})
      .catch((e) => console.error(e));
  };
  return (
    <main className="flex flex-col items-center w-full p-6">
      <h1 className="text-2xl font-semibold">Let's talk</h1>
      <h2 className="text-1xl font-semibold">
        This form will send an email directly to my inbox
      </h2>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-1 p-1 gap-2 dark:text-white "
        action="/send-data-here"
        method="post"
      >
        <label htmlFor="name">First name:</label>
        <input className="" type="text" id="first" {...register("name")} />
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="last" {...register("lastName")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="message">Message</label>
        <textarea
          id="body"
          placeholder=" Write your message here..."
          rows={10}
          cols={50}
          {...register("message")}
        ></textarea>
        <br />
        <button
          className="
                    border-2
                    border-black
                    mt-1
                    block
                    w-full
                    bg-gray-100
                   
                    p-2
                  "
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;
