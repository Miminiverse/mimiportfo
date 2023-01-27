import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className=" text-accent text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-black pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> phamminhtam1402@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +551 242 9876
        </p>
      </div>
    </section>
  );
};

export default Contact;