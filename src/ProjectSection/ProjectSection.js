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
            picture="weather-app.png"
            title="Weather App"
            paragraph="This website uses the free OpenWeatherMap API. This allows 60 API calls a minute. If the website appears to be loading forever then it's likely more than 60 calls occured this minute. Please try again later."
            github="https://github.com/Randyaub/weather-app"
            url="https://naughty-hugle-69c260.netlify.app/"
            techUsed={["React", "HTML5", "CSS3"]}
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
            paragraph="The website you are currently using is also built by me. This is my second iteration of my profile. Previously it was created in only HTML/CSS and Javascript and also had a backend that dealt with sending the email. I decided to remove the backend and move the website to react and add more features like modals when clicking a project"
            github=""
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
