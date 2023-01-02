import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="flex flex-col items-center w-full">
      <h1>Send me an email from here</h1>
      <form
        className="grid grid-cols-1 p-1 "
        action="/send-data-here"
        method="post"
      >
        <label htmlFor="first">First name:</label>
        <input className="" type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="body">Message</label>
        <textarea
          id="body"
          name="body"
          placeholder=" Write your message here..."
          rows={10}
          cols={50}
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
                    hover:bg-black
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
