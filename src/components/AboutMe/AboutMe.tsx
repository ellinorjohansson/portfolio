import './AboutMe.scss'

export const AboutMe = () => {
  return (
    <div className='wrapper'>
      <div className='info-wrapper'>
        <section className='short-about-me'>
          <img src="/src/assets/ellinor_pic.avif" alt="Picture of Ellinor Johansson" />
          <div className='title-block'>
            <h2 className='front-end-title'>Frontend developer</h2>
            <h3 className='marketing-title'>+ digital marketer</h3>
          </div>
        </section>
        <section className='about-me'>
          <h2>Hi, glad you found your way here!</h2>
          <p>
            I've always been driven by a curiosity for how digital content can
            capture attention, engage emotions, and influence people. With a
            degree in Digital Communication, I've learned how to tell stories,
            build brands, and create meaningful experiences.
          </p>
          <p>
            But the more I explored the digital world, the more I was drawn to the
            technical side, the part that brings ideas to life. Now, I'm building
            on that foundation as a Frontend Developer. I love crafting clean,
            user-friendly web solutions where design meets functionality. I'm
            currently diving deeper into HTML, CSS, JavaScript, Vue, and React,
            and I'm always curious about new ways to build interactive and smart
            solutions.
          </p>

          <p>
            To me, frontend development is about blending creativity with
            technology to create digital experiences that don’t just work but feel
            right
          </p>
        </section>
        <section className='socials'>
          <a href="https://github.com/ellinorjohansson" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/ellinor-johansson-957a20224/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
        </section>

      </div>
    </div>
  );
};
