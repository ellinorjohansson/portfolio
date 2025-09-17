import './Projects.scss';
import skyvoyage from '../../assets/skyvoyage.avif';
import mulberry from '../../assets/mulberry_beauty.avif';
import tough from '../../assets/tough_cookie.avif';
import christmas from '../../assets/christmas_shop.avif';
import memory from '../../assets/memory.avif';
import quote from '../../assets/quote_generator.avif';
import eshop from '../../assets/api_books.avif';
import bookshop from '../../assets/the_book_page.avif';
import todo from '../../assets/todo_screenshot.avif';
import zoo from '../../assets/the_zoo.avif';
import pumpkin_brew from '../../assets/pumpkin_brew.avif';

export const Projects = () => {
  return (
    <>
      <div className="projects-wrapper">
        <h2 className="project-header" id="projects">
          Projects
        </h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={zoo} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>The ZOO</h3>
              <p>
                This project is a web application where users can explore a zoo,
                view animals, and feed them. The focus is on UI/UX, modern
                styling, and the use of React concepts such as routing, context,
                and reducers.
              </p>
              <div>
                <ul>
                  <li>HTML</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>React</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="project-buttons-row">
                <a
                  className="project-button"
                  href="https://medieinstitutet.github.io/fed24d-the-zoo-ellinorjohansson/"
                  target="_blank"
                >
                  View demo
                </a>
                <a
                  className="project-button"
                  href="https://github.com/ellinorjohansson/the-zoo"
                  target="_blank"
                >
                  Go to Github
                </a>
              </div>
            </div>
          </div>


          <div className="project-card">
            <img src={pumpkin_brew} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>Pumpkin Brew</h3>
              <p>
                This project was created purely for practice and learning purposes. It focuses on experimenting with the design and presentation of flavored syrup bottles. The content is not intended for commercial use, but rather as an exercise in layout, structure, and visual presentation.
              </p>
              <div>
                <ul>
                  <li>HTML</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>React</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="project-buttons-row">
                <a
                  className="project-button"
                  href="https://github.com/ellinorjohansson/pumpkin-webshop"
                  target="_blank"
                >
                  Go to Github
                </a>
              </div>
            </div>
          </div>


          <div className="project-card">
            <img src={todo} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>The Last Todo</h3>
              <p>
                A simple Todo application built with React and TypeScript. It
                allows users to add, sort, complete and view tasks. All todos
                are saved in the browser's local storage, so your tasks persist
                even after refreshing the page.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={bookshop} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>The Book Page (Group Project)</h3>
              <p>
                In this group project we developed a complete system for
                managing users, books, and reviews. The backend is powered by
                MongoDB and Express.js, which exposes an API. The frontend,
                built with Vue.js, fetches and displays the data from the API in
                a user-friendly interface. The application includes an admin
                login system with password encryption. Once logged in, the admin
                can view and manage all users and books. Logged-in users can
                browse books and leave reviews.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={eshop} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>E-shop Product Catalog – REST API & Frontend</h3>
              <p>
                This project is a simple e-shop product catalog built as part of
                an assignment. It includes a MySQL database, a RESTful API using
                Express, and a frontend interface built with Vite, TypeScript,
                and SASS. Products can belong to multiple categories, and
                categories can contain multiple products (many-to-many
                relationship). The API supports full CRUD functionality and
                filtering.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={skyvoyage} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>SkyVoyage (Group project) </h3>
              <p>
                This project focuses on implementing a given design and
                translating it into code using Vue.js. Our task was to
                accurately follow the design specifications and visual
                guidelines to create a fully functional and responsive web
                application.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={mulberry} alt="" loading="lazy"></img>
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={memory} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>Memory</h3>
              <p>
                Fruity Memory is a fun and simple memory matching game built
                with HTML, Sass, and TypeScript. The game features cards with
                fruit images that the player needs to match. Once all cards are
                matched correctly, a message is displayed, and the player has
                the option to play again.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={quote} alt="" loading="lazy"></img>
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={christmas} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>Christmas Shop</h3>
              <p>
                Task with the aim of learning the basics of the JavaScript
                course where the goal was a webshop based on a list of
                requirements from a customer.
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
              <div className="project-buttons-row">
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


          <div className="project-card">
            <img src={tough} alt="" loading="lazy"></img>
            <div className="project-content">
              <h3>Tough Cookie</h3>
              <p>
                Task with the aim of learning the basics of the HTML/CSS course
                where the goal was a website based on a wireframe from a
                customer.
              </p>
              <div>
                <ul>
                  <li>HTML</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="project-buttons-row">
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


        </div>
      </div>
    </>
  );
};
