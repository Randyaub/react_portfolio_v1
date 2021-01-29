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
              "The website includes a hamburger menu for mobile and tablet users.",
              "The landing page includes the most recently added animals to the shelter. It is not populated with a database.",
              "The landing page also includes website activities and announcements.",
            ]}
          />
          <ProjectCard
            picture="weather-app.png"
            title="Weather App"
            paragraph="The Weather App website uses the OpenWeatherMap API. This API allows 60 requests a minute. If the website appears to be loading forever then it is likely the API has reached the request limit. Please try again later."
            github="https://github.com/Randyaub/weather-app"
            url="https://naughty-hugle-69c260.netlify.app/"
            techUsed={["React", "HTML5", "CSS3", "EmailJS"]}
            modalImage={[
              "weather-app-modal-1.png",
              "weather-app-modal-2.png",
              "weather-app-modal-3.png",
            ]}
            imageDescription={[
              "The website retrieves the current weather from OpenWeatherAPI. With the help of HTML's geolocation API. The website will prompt the user to share their location. If shared their locations weather will be loaded. Otherwise the defaut location is Calgary.",
              "The website also uses the location to determine the forcast of the next five days. Again the default is Calgary if the prompt for location is denied",
              "While the website is waiting for the data from OpenWeathersAPI the app will display animated loading icons. The loading icons are displayed center of where the information will show. The loading icons help improve responsiveness. This ensure users are not left wondering if the app has froze. ",
            ]}
          />
          <ProjectCard
            picture="profile-website.png"
            title="Portfolio Website"
            paragraph="This portfolio website previously was created using only HTML5/CSS3 and JavaScript. It also had a backend that dealt with sending emails from the contact section below. However, I decided to remove the backend and recreate the website using the framework React."
            github="https://github.com/Randyaub/react_portfolio_v1"
            url="#"
            techUsed={["React", "HTML5", "CSS3"]}
            modalImage={["profile-app-modal-1.png", "profile-app-modal-2.png"]}
            imageDescription={[
              "There is no backend on my portfolio site. What was used to send emails is EmailJS. It allows me to create an email template. In the template I place Javascript that will retrieve variables from the form input. Then my email provider sends the email to my personal account.",
              "In the profile section all tech used is displayed. There is easy access to the code through github and a link to the website. If you hover over the image of projects you can learn more about the projects through a modal",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
