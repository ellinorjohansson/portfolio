import './GetInTouch.scss'

export const GetInTouch = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="getInTouch">
        <h2 className="footer-header">Get in touch</h2>
        <div className="contact-info">
          <h3>Ellinor Johansson</h3>
          <p>Frontend developer student</p>
          <p>+ digital marketer</p>
        </div>
        <a
          className="mail-footer"
          href="mailto:ellinor.johansson@medieinstitutet.se"
        >
          ellinor.johansson@medieinstitutet.se
        </a>
        <div className="social-links">
          <a href="https://github.com/ellinorjohansson" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ellinor-johansson-957a20224/"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <i className="bx bx-up-arrow-alt"></i>
          </button>
        </div>
      </footer>
    </>
  );
};
