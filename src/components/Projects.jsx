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
            src="/images/A.S.K hosting website.png"
            alt="web hosting clone pic"
          />
          <button>web hosting clone</button>
        </a>
        <a href="https://frontend-gpt3-web-landing-page-clone.netlify.app/">
          <img className="gpt" src="/images/React App.png" alt="gpt3 picture" />
          <button>gpt3 clone landing page</button>
        </a>
      </div>
    </>
  );
}
