import React from "react";
import "./styles/projects.css";
export function Projects() {
  return (
    <>
      <h1 className="projects-h1">Projects</h1>
      <div id="projects" className="projects card">
        <a href="https://ask-web-hosting-site.netlify.app/">
          <img
            className="ask-image"
            src="public/images/2023-09-25 21_59_39-A.S.K hosting website.png"
            alt="web hosting clone"
          />
          <button>web hosting clone</button>
        </a>
        <a href="https://frontend-gpt3-web-landing-page-clone.netlify.app/">
          <img
            className="gpt"
            src="public/images/2023-09-25 23_52_51-React App.png"
            alt="web hosting clone"
          />
          <button>gpt3 clone landing page</button>
        </a>
      </div>
    </>
  );
}
