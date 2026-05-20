import "./AboutMe.scss";
import profil from "../../assets/Ellinor_profil.avif";

export const AboutMe = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-card">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio / Frontend developer</p>
          <h1>Technology should be for everyone, wherever you are.</h1>
          <p className="hero-lead">
            I like building digital experiences that not only work, but leave a
            lasting impression — simple, clear, and intuitive interfaces with a
            strong sense of feeling, accessibility, and purpose.
          </p>
          <div className="hero-actions">
            <a className="hero-button primary" href="#projects">
              View projects
            </a>
            <a
              className="hero-button secondary"
              href="mailto:ellinor.asaka@gmail.com"
            >
              Contact me
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Focus</dt>
              <dd>Responsive frontend and thoughtful UI details</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React, TypeScript, Next.js, Sass, Tailwind</dd>
            </div>
            <div>
              <dt>Approach</dt>
              <dd>Structured builds with strong visual direction</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-profile">
          <div className="portrait-frame">
            <img
              src={profil}
              alt="Portrait of Ellinor Johansson"
              width={320}
              height={360}
            />
          </div>
          <div className="profile-card">
            <p className="profile-label">Available for</p>
            <p className="profile-value">
              Looking for opportunities to grow, build, and collaborate.
            </p>
            <div className="socials">
              <a
                href="https://github.com/ellinorjohansson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Github"
              >
                <i className="bx bxl-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ellinor-johansson-957a20224/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="about-panel">
        <p className="panel-eyebrow">About me</p>
        <section className="about-me">
          <h2>Creative thinking, built into practical frontend work.</h2>
          <p>
            I've always been driven by a curiosity for how digital content can
            capture attention, engage emotions, and influence people. With a
            degree in Digital Communication, I've learned how to tell stories,
            build brands, and create meaningful experiences.
          </p>
          <p>
            But the more I explored the digital world, the more I was drawn to
            the technical side, the part that brings ideas to life. Now, I'm
            building on that foundation as a Frontend Developer. I love crafting
            clean, user-friendly web solutions where design meets functionality.
            I'm currently diving deeper into HTML, CSS, JavaScript, Vue, and
            React, and I'm always curious about new ways to build interactive
            and smart solutions.
          </p>

          <p>
            To me, frontend development is about blending creativity with
            technology to create digital experiences that do not just work but
            feel right.
          </p>
        </section>
      </div>
    </section>
  );
};
