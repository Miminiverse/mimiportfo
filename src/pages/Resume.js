import React from "react";

const Resume = () => {
  return (
    <section className="bg-primary text-black bg-white pl-10">
      <h2 className="text-2xl mt-10 mb-3 mx-auto pt-2 text-yellow-400 text-center">
        MINH TAM PHAM
        <br />
        Email: minhtamphamtol@gmail.com
      </h2>
      <div>
        <h4>EXPERIENCE</h4>
        <p>
          <br />
          <h5>Code The Dream | USA </h5>
          <h6>July 2023 to September 2023 </h6>
          <ul>
            <li>
              ● Receive intensive training in front-end software development
            </li>
            <li>● Build MentorUp: Class Management System Application</li>
          </ul>
        </p>
        <p>
          <h5>Code The Dream | USA</h5>
          <h6>May 2023 - July 2023 </h6>
          <ul>
            <li>
              ● Receive intensive training in backend software development
            </li>
            <li>● Build Talckatoo: Real-Time Multilingual Chat Application</li>
          </ul>
        </p>
        <br />

        <h4>EDUCATION</h4>
        <p>
          <br />
          <h5>Computer System Institute </h5>
          <h6>NCP Web Development | USA </h6>
          <p>January 2023 - December 2023</p>
        </p>
        <br />

        <h4>VOLUNTEERING</h4>
        <p>
          <h5>Backend Developer </h5>
          <h6>August 2023 - Present | Dev Launchers</h6>
          <ul>
            <li>● Build backend system using Strapi </li>
            <li>● Write integration testing using Postman & Chai</li>
            <li>● Review other team member's PR </li>
          </ul>
        </p>

        <br />
        <h4>SKILLS </h4>
        <h5>Backend Skills </h5>
        <ul>
          <li>● NodeJS, Express, Typescript, Django </li>
          <li>Headless CMS: Strapi</li>
          <li>
            Database & Storage: MongoDB, GraphQL/Hygrapgh, PostgreSQL, SQLite,
            AWS S3{" "}
          </li>
          <li>Real-time: Websocket | SocketIO </li>
          <li>Hosting: Heroku, Digital Ocean, Vercel, Netlify, Render </li>
          <li>Container: Docker</li>
          <li>API testing: Postman, Chai</li>
          <li>Version & Project management: Git | GitHub | Jira</li>
          <li>Authentication: OAuth, Passport</li>
        </ul>
        <h5>Frontend Skills </h5>
        <ul>
          <li>● React, Typescript, TailwindCSS </li>
        </ul>
        <h5>Designer Documentation</h5>
        <ul>
          <li>● Write technical documentation </li>
        </ul>
        <br />

        <h4>REFERENCES </h4>
        <p>
          <br />
          <h5>Frank Stepanski</h5>
          <h6> Code The Dream admin/mentor </h6>
          <p>Email: fsjay@hotmail.com</p>
          <h5> Elijah Bernstein-Cooper</h5>
          <h6>
            Code The Dream mentor | Senior Software Engineer at MetaMetrics,
            Inc.
          </h6>
          <p>e.bernsteincooper@gmail.com</p>
        </p>
      </div>
    </section>
  );
};

export default Resume;
