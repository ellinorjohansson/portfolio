import "./Skills.scss";

export const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-intro">
          <p className="skills-eyebrow">Toolset</p>
          <h2>Skills</h2>
          <p className="skills-lead">
            I enjoy moving between structure and style, from frontend logic and
            API work to visual tools that help shape the final experience.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-wrapper">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Vue</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>GSAP</li>
            </ul>
          </div>

          <div className="skills-wrapper">
            <h3>Backend & APIs</h3>
            <ul>
              <li>REST APIs</li>
              <li>GraphQL</li>
              <li>NextAuth.js</li>
              <li>Firebase</li>
              <li>Cloudinary</li>
            </ul>
          </div>

          <div className="skills-wrapper">
            <h3>Databases</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </div>

          <div className="skills-wrapper">
            <h3>Developer Tools</h3>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>npm / pnpm</li>
              <li>Vite</li>
              <li>ESLint</li>
              <li>Prettier</li>
              <li>Lighthouse</li>
              <li>Insomnia</li>
              <li>phpMyAdmin</li>
              <li>XAMPP</li>
            </ul>
          </div>

          <div className="skills-wrapper">
            <h3>Design & Media Tools</h3>
            <ul>
              <li>Adobe Premiere Pro</li>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </div>

          <div className="skills-wrapper">
            <h3>More</h3>
            <ul>
              <li>Responsive Design</li>
              <li>Accessibility</li>
              <li>SEO</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Cross-browser Compatibility</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
