// Component Imports
import AboutMe from "@/components/profile/resume/about-me/about-me";
import Achievements from "@/components/profile/resume/achievements/achievements";
import Education from "@/components/profile/resume/education/education";
import Experience from "@/components/profile/resume/experience/experience";
import Projects from "@/components/profile/resume/projects/projects";
import ResumeHeader from "@/components/profile/resume/resume-header/resume-header";
import Skills from "@/components/profile/resume/skills/skills";

export default async function ProfileResumePage() {
  return (
    <>
      {/* Wrapper */}
      <div className="profile-resume-page-wrapper">
        {/* SECTION: Header */}
        <ResumeHeader />

        {/* SECTION: Content */}
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">

          {/* Content */}
          <div className="flex flex-col space-y-16 pt-20">
            {/* SUBSECTION: About Me */}
            <section className="about-me">
              <AboutMe />
            </section>

            {/* SUBSECTION: Education */}
            <section className="education">
              <Education />
            </section>

            {/* SUBSECTION: Skills */}
            <section className="skills">
              <Skills />
            </section>

            {/* SUBSECTION: Experience */}
            <section className="experience">
              <Experience />
            </section>

            {/* SUBSECTION: Projects */}
            <section className="projects">
              <Projects />
            </section>

            {/* SUBSECTION: Achievements */}
            <section className="achievements">
              <Achievements />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}