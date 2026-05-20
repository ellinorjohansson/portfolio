import "./GetInTouch.scss";

export const GetInTouch = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer id="getInTouch">
        <div className="footer-copy">
          <p className="footer-eyebrow">Get in touch</p>
          <h2 className="footer-header">Let’s build something thoughtful.</h2>
          <div className="contact-info">
            <h3>Ellinor Johansson</h3>
            <p>Frontend developer based in Sweden</p>
          </div>
          <a className="mail-footer" href="mailto:ellinor.asaka@gmail.com">
            ellinor.asaka@gmail.com
          </a>
        </div>
        <div className="footer-actions">
          <div className="social-links">
            <a
              href="https://github.com/ellinorjohansson"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ellinor-johansson-957a20224/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="bx bx-up-arrow-alt"></i>
          </button>
        </div>
      </footer>
    </>
  );
};
