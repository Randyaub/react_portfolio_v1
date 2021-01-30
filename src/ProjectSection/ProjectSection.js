import React from "react";

import "./ProjectSection.css";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <h3 className="project-title">Projects</h3>
        <div className="project-list">
          <ProjectCard
            picture="humane-society.png"
            title="Humane Society"
            paragraph="A landing page for a humane society website. I was inspired to create this landing page after being disappointed viewing my home towns animal services website called the Regina Humane Society. My focus was to improve the UX by simplifing the design."
            github="https://github.com/Randyaub/react_humane_society"
            url="https://brave-lewin-7a5e7e.netlify.app/"
            techUsed={["React", "HTML5", "CSS3"]}
            modalImage={[
              "humane-society-1.png",
              "humane-society-2.png",
              "humane-society-3.png",
            ]}
            imageDescription={[
              "The landing page includes a hamburger menu in the top right allowing mobile and tablet users to navigate.",
              "The website would include a section that lists the most recently accepted animals. It is not populated with a database at this time.",
              "The landing page would also include the websites community activities and announcements.",
            ]}
          />
          <ProjectCard
            picture="weather-app.png"
            title="Weather App"
            paragraph="The Weather App website uses the OpenWeatherMap API. This API allows 60 requests a minute. If the website appears to be loading forever then it is likely the API has reached the request limit. Please try again later."
            github="https://github.com/Randyaub/weather-app"
            url="https://naughty-hugle-69c260.netlify.app/"
            techUsed={["React", "HTML5", "CSS3"]}
            modalImage={[
              "weather-app-modal-1.png",
              "weather-app-modal-2.png",
              "weather-app-modal-3.png",
            ]}
            imageDescription={[
              "The API retrieves the weather today and the forcast for the next 5 days from OpenWeatherAPI. With the help of HTML's geolocation API. The website will prompt the user to share their location.",
              "The default location searched is Calgary if the prompt for location is denied",
              "During the time the website is receiving data from OpenWeathersAPI. Loading icons are displayed. To display some sort of feedback ",
            ]}
          />
          <ProjectCard
            picture="profile-website.png"
            title="Portfolio Website"
            paragraph="This portfolio website previously was created using only HTML5/CSS3 and JavaScript. It also had a backend that dealt with sending emails from the contact section below. However, I decided to remove the backend and recreate the website using the framework React."
            github="https://github.com/Randyaub/react_portfolio_v1"
            url="#"
            techUsed={["React", "HTML5", "CSS3", "EmailJS"]}
            modalImage={["profile-app-modal-1.png", "profile-app-modal-2.png"]}
            imageDescription={[
              "There is no backend for my portfolio site. I opted to use EmailJS for the contact section. It allowed me to create an email template. That my email provider sends to my personal account.",
              "Each project list the technology that was used. There are also links to the code base through Github and the live version. Hovering over the image of projects you can learn more about the projects through a modal",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
