import './Projects.scss'

export const Projects = () => {
  return (
    <>
      <h2 className="project-header">Projects</h2>
      <div className="projects">
        <div className="project1">
          <img src="assets/img/skyvoyage.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>SkyVoyage (Group project) </h3>
            <p>
              This project focuses on implementing a given design and
              translating it into code using Vue.js. Our task was to accurately
              follow the design specifications and visual guidelines to create a
              fully functional and responsive web application.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Vue</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://medieinstitutet.github.io/fed24d-grafiska-verktyg-mandarinfiskarna/"
                target="_blank"
              >
                View demo
              </a>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/SkyVoyage-Glantan"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project2">
          <img
            src="assets/img/mulberry_beauty.avif"
            alt=""
            loading="lazy"
          ></img>
          <div className="project-content">
            <h3>Mulberry Beauty (Group project) </h3>
            <p>TypeScript quiz with 20 questions about geography.</p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-mulberry-beauty/"
                target="_blank"
              >
                View demo
              </a>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/mulberry-beauty?tab=readme-ov-file"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project3">
          <img src="assets/img/tough_cookie.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>Tough Cookie</h3>
            <p>
              Task with the aim of learning the basics of the HTML/CSS course
              where the goal was a website based on a wireframe from a customer.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://medieinstitutet.github.io/fed24d-html-css-kundprojekt-ellinorjohansson/"
                target="_blank"
              >
                View demo
              </a>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/tough-cookie-made-up-customer-project"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project4">
          <img src="assets/img/christmas_shop.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>Christmas Shop (ongoing style) </h3>
            <p>
              Task with the aim of learning the basics of the JavaScript course
              where the goal was a webshop based on a list of requirements from
              a customer.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-ellinorjohansson/"
                target="_blank"
              >
                View demo
              </a>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/christmas-shop"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project5">
          <img src="assets/img/memory.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>Memory</h3>
            <p>
              Fruity Memory is a fun and simple memory matching game built with
              HTML, Sass, and TypeScript. The game features cards with fruit
              images that the player needs to match. Once all cards are matched
              correctly, a message is displayed, and the player has the option
              to play again.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/memory"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project6">
          <img
            src="assets/img/quote_generator.avif"
            alt=""
            loading="lazy"
          ></img>
          <div className="project-content">
            <h3>Quote Generator</h3>
            <p>
              Quote Generator is a simple generator built with HTML, Sass, and
              TypeScript. The app displays inspiring, funny, or thoughtful
              quotes one at a time.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/quote-generator"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project7">
          <img src="assets/img/api_books.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>E-shop Product Catalog – REST API & Frontend</h3>
            <p>
              This project is a simple e-shop product catalog built as part of
              an assignment. It includes a MySQL database, a RESTful API using
              Express, and a frontend interface built with Vite, TypeScript, and
              SASS. Products can belong to multiple categories, and categories
              can contain multiple products (many-to-many relationship). The API
              supports full CRUD functionality and filtering.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
                <li>XAMPP</li>
                <li>PhpMyAdmin</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Express.js</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/fed24d-api-utveckling-inl-1-ellinor-johansson"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>

        <div className="project8">
          <img src="assets/img/the_book_page.avif" alt="" loading="lazy"></img>
          <div className="project-content">
            <h3>The Book Page (Group Project)</h3>
            <p>
              In this group project we developed a complete system for managing
              users, books, and reviews. The backend is powered by MongoDB and
              Express.js, which exposes an API. The frontend, built with Vue.js,
              fetches and displays the data from the API in a user-friendly
              interface. The application includes an admin login system with
              password encryption. Once logged in, the admin can view and manage
              all users and books. Logged-in users can browse books and leave
              reviews.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>Prettier</li>
                <li>Eslint</li>
                <li>Vite</li>
                <li>Vue</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>NoSQL</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/book-API"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>
        <div className="project9">
          <img
            src="assets/img/todo_screenshot.avif"
            alt=""
            loading="lazy"
          ></img>
          <div className="project-content">
            <h3>The Last Todo</h3>
            <p>
              A simple Todo application built with React and TypeScript. It
              allows users to add, sort, complete, and view tasks. All todos are
              saved in the browser's local storage, so your tasks persist even
              after refreshing the page.
            </p>
            <div>
              <ul>
                <li>HTML</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <a
                className="project-button"
                href="https://medieinstitutet.github.io/fed24d-the-last-todos-ellinorjohansson/"
                target="_blank"
              >
                View demo
              </a>
              <a
                className="project-button"
                href="https://github.com/ellinorjohansson/the-last-todo"
                target="_blank"
              >
                Go to Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
