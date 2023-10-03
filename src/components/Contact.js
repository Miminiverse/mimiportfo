import React from "react";

const Contact = () => {
  return (
    <section className="bg-slate-400 px-5 py-25" id="contact">
      <div className="text-center mx-auto">
        <h2 className="text-2xl mb-3 mx-auto pt-4 ">Contact Me</h2>

        <p className="pb-4 text-accent text-black hover:decoration-yelow-400">
          <span className="underline decoration-yellow-400">
            minhtamphamtol@gmail.com
          </span>
        </p>
        <p className="pb-4 text-accent text-black hover:decoration-yelow-400">
          <span className="font-bold ">References: </span>
          <br />
          <span className=" decoration-yellow-400">Frank Stepanski</span>
          <br />
          <span className=" decoration-yellow-400">
            Code The Dream admin/mentor
          </span>
          <br />
          <span className="underline decoration-yellow-400">
            fsjay@hotmail.com
          </span>
          <br />
          <br />
          <span className=" decoration-yellow-400">
            Elijah Bernstein-Cooper
          </span>
          <br />
          <span className=" decoration-yellow-400">
            Code The Dream mentor | Senior Software Engineer at MetaMetrics,
            Inc.
          </span>
          <br />
          <span className="underline decoration-yellow-400">
            e.bernsteincooper@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
