export const GetInTouch = () => {
  return (
    <>
      <footer id="getInTouch">
        <h2 className="footer-header">Get in touch</h2>
        <div>
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
        <a href="https://github.com/ellinorjohansson" target="_blank">
          <i className="fab fa-github fa-2x github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ellinor-johansson-957a20224/"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-2x linkedin"></i>
        </a>
      </footer>
    </>
  );
};
