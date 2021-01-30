import Header from "./Header/Header";
import SkillSection from "./SkillSection/SkillSection";
import About from "./About/About";
import ProjectSection from "./ProjectSection/ProjectSection";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  function smoothScroll(target, duration) {
    let targetEle = document.querySelector(target);
    let targetPosition = targetEle.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      var timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    }
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return (c / 2) * t * t + b;
      }
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    window.requestAnimationFrame(animation);
  }

  const goToProjects = () => {
    smoothScroll("#projects", 1000);
  };

  const goToContacts = () => {
    smoothScroll("#contact", 1500);
  };

  const goToTop = () => {
    smoothScroll("#top", 1500);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header goToContacts={goToContacts} goToProjects={goToProjects} />
        <SkillSection />
        <About />
        <ProjectSection />
        <Contact />
        <Footer goToTop={goToTop} />
      </div>
    </div>
  );
};

export default App;
