// Utils Imports
import { ABOUT_ME } from "./constants/about-me.constant";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h3 className="">About Me</h3>
      <p>
        {ABOUT_ME}
      </p>
    </div>
  );
}

export default AboutMe;