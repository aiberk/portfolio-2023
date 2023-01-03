import React from "react";
import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormData = {
  name: string;
  lastName: string;
  email: string;
  message: string;
  singleErrorInput: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: "", lastName: "", email: "", message: "" },
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const onFormSubmit = (data: FormData) => {
    fetch(`https://eoool18qsq2s2me.m.pipedream.net`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => {
        setSuccessMessage(true);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", lastName: "", email: "", message: "" });
    }
  }, [formState, reset]);

  const sharedClassNames = "dark:bg-zinc-900   focus:ring-zinc-200 ";
  return (
    <main className="flex flex-col items-center w-full p-6">
      <h1 className="text-2xl font-semibold">Let's talk</h1>
      <h2 className="text-1xl font-semibold">
        This form will send an email directly to my inbox
      </h2>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-1 p-1 gap-2  "
        action="/"
        method="post"
      >
        <label htmlFor="name">First name:</label>
        <input
          className={`${sharedClassNames}`}
          type="text"
          id="first"
          {...register("name", { required: true })}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          className={`${sharedClassNames}`}
          id="last"
          {...register("lastName", { required: true })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`${sharedClassNames}`}
          id="email"
          {...register("email", { required: true })}
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={`${sharedClassNames}`}
          id="body"
          placeholder=" Write your message here..."
          rows={10}
          cols={50}
          {...register("message", { required: true })}
        ></textarea>
        <br />
        <button
          className="
                    border-2
                    border-zinc-500
                   hover:bg-zinc-500
                   hover:text-white
                    mt-1
                    block
                    w-full
                    dark:bg-zinc-900
                    dark:hover:bg-zinc-500
                    p-2
                  "
          type="submit"
        >
          Submit
        </button>
      </form>
      {successMessage && (
        <div className="flex flex-col justify-center items-center mt-5">
          <p>Thanks for message! 😊</p>
          <p>I will get back to you as soon as possible</p>
        </div>
      )}
    </main>
  );
};

export default Contact;
