import { useState } from "react";
import "./Projects.scss";
import skyvoyage from "../../assets/skyvoyage.avif";
import mulberry from "../../assets/mulberry_beauty.avif";
import tough from "../../assets/tough_cookie.avif";
import christmas from "../../assets/christmas_shop.avif";
import memory from "../../assets/memory.avif";
import quote from "../../assets/quote_generator.avif";
import eshop from "../../assets/api_books.avif";
import bookshop from "../../assets/the_book_page.avif";
import todo from "../../assets/todo_screenshot.avif";
import zoo from "../../assets/the_zoo.avif";
import pumpkin_brew from "../../assets/pumpkin_brew.avif";
import apploy from "../../assets/apploy.avif";
import consid from "../../assets/consid_connect.avif";
import lopply from "../../assets/lopply.avif";
import subscription from "../../assets/subscription.avif";
import nomly from "../../assets/nomly.avif";

const INITIAL_PROJECTS = 8;
const LOAD_MORE_COUNT = 4;

const projectItems = [
  {
    title: "Nomly",
    image: nomly,
    description:
      "Nomly is a recipe collection app built with Next.js, React, TypeScript, Tailwind CSS, MongoDB, and Mongoose. It is designed to make it easy to save recipes, browse a shared recipe feed, and manage your own collection with authentication, filtering, and private/public visibility.",
    stack: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "Nextjs",
      "MongoDB",
      "Mongoose",
      "Prettier",
      "Eslint",
    ],
    links: [
      { label: "View demo", href: "https://nomly-eta.vercel.app/" },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/Nomly",
      },
    ],
  },
  {
    title: "Consid Connect (LIA 2)",
    image: consid,
    description:
      "Consid Connect is an internal employee platform for Consid that i developed under my LIA. It lets colleagues find each other, fill in a profile, earn points through activity (Fika meetups, emails, daily quiz), see a leaderboard, get matched with colleagues for activities, and view new joiners. Admins can manage users and teams through a dedicated admin section.",
    stack: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "Nextjs",
      "Firebase",
      "Cloudinary",
      "GSAP",
      "Prettier",
      "Eslint",
    ],
  },
  {
    title: "Subscription tracker",
    image: subscription,
    description:
      "Subscription Hub is a web app for tracking recurring subscriptions in one place. It helps users organize services, monitor billing cycles, and keep a simple activity history of subscription changes.",
    stack: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "Nextjs",
      "Mongodb",
      "Mongoose",
      "Prettier",
      "Eslint",
    ],
    links: [
      { label: "View demo", href: "https://subscription-hub-eta.vercel.app/" },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/subscription-hub",
      },
    ],
  },
  {
    title: "Lopply (Thesis)",
    image: lopply,
    description:
      "This project is a web platform for discovering and tracking running races in Sweden and around the world. Users can filter events, save favorites to a personal bucket list, get matched with races based on their running preferences and add new races. Admin can approve submitted races, manage access and delete events. The goal is to create an interactive, user-friendly tool that connects runners with upcoming events and makes race discovery easier.",
    stack: [
      "HTML",
      "Tailwind",
      "TypeScript",
      "React",
      "Nextjs",
      "Mongodb",
      "Mongoose",
      "Nextauth",
      "Prettier",
      "Eslint",
    ],
    links: [
      { label: "View demo", href: "https://lopply.vercel.app/" },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/Lopply",
      },
    ],
  },
  {
    title: "Apploy (Group Project)",
    image: apploy,
    description:
      'This project is a group assignment where we created a custom version of "Platsbanken" using open data from Arbetsformedlingen. The goal was to explore real-world job advertisement data and present it in a user-friendly application while practicing React concepts, data fetching, and visualization. Using Arbetsformedlingens design system but with different color.',
    stack: ["HTML", "TypeScript", "Vite", "React", "css", "Eslint", "Prettier"],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/apploy",
      },
    ],
  },
  {
    title: "The ZOO",
    image: zoo,
    description:
      "This project is a web application where users can explore a zoo, view animals, and feed them. The focus is on UI/UX, modern styling, and the use of React concepts such as routing, context, and reducers.",
    stack: ["HTML", "TypeScript", "Vite", "React", "SASS"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-the-zoo-ellinorjohansson/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/the-zoo",
      },
    ],
  },
  {
    title: "Pumpkin Brew",
    image: pumpkin_brew,
    description:
      "This project was created purely for practice and learning purposes. It focuses on experimenting with the design and presentation of flavored syrup bottles. The content is not intended for commercial use, but rather as an exercise in layout, structure, and visual presentation.",
    stack: ["HTML", "TypeScript", "Vite", "React", "SASS"],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/pumpkin-webshop",
      },
    ],
  },
  {
    title: "The Last Todo",
    image: todo,
    description:
      "A simple Todo application built with React and TypeScript. It allows users to add, sort, complete and view tasks. All todos are saved in the browser's local storage, so your tasks persist even after refreshing the page.",
    stack: ["HTML", "Tailwind", "TypeScript", "Vite", "React"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-the-last-todos-ellinorjohansson/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/the-last-todo",
      },
    ],
  },
  {
    title: "The Book Page (Group Project)",
    image: bookshop,
    description:
      "In this group project we developed a complete system for managing users, books, and reviews. The backend is powered by MongoDB and Express.js, which exposes an API. The frontend, built with Vue.js, fetches and displays the data from the API in a user-friendly interface. The application includes an admin login system with password encryption. Once logged in, the admin can view and manage all users and books. Logged-in users can browse books and leave reviews.",
    stack: [
      "HTML",
      "SASS",
      "TypeScript",
      "Prettier",
      "Eslint",
      "Vite",
      "Vue",
      "Express.js",
      "Node.js",
      "MongoDB",
      "NoSQL",
    ],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/book-API",
      },
    ],
  },
  {
    title: "E-shop Product Catalog - REST API & Frontend",
    image: eshop,
    description:
      "This project is a simple e-shop product catalog built as part of an assignment. It includes a MySQL database, a RESTful API using Express, and a frontend interface built with Vite, TypeScript, and SASS. Products can belong to multiple categories, and categories can contain multiple products (many-to-many relationship). The API supports full CRUD functionality and filtering.",
    stack: [
      "HTML",
      "SASS",
      "TypeScript",
      "Prettier",
      "Eslint",
      "Vite",
      "XAMPP",
      "PhpMyAdmin",
      "Node.js",
      "MySQL",
      "Express.js",
      "SQL",
    ],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/fed24d-api-utveckling-inl-1-ellinor-johansson",
      },
    ],
  },
  {
    title: "SkyVoyage (Group project)",
    image: skyvoyage,
    description:
      "This project focuses on implementing a given design and translating it into code using Vue.js. Our task was to accurately follow the design specifications and visual guidelines to create a fully functional and responsive web application.",
    stack: ["HTML", "SASS", "TypeScript", "Vue", "Prettier", "Eslint", "Vite"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-grafiska-verktyg-mandarinfiskarna/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/SkyVoyage-Glantan",
      },
    ],
  },
  {
    title: "Mulberry Beauty (Group project)",
    image: mulberry,
    description: "TypeScript quiz with 20 questions about geography.",
    stack: ["HTML", "SASS", "TypeScript", "Prettier", "Eslint", "Vite"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-mulberry-beauty/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/mulberry-beauty?tab=readme-ov-file",
      },
    ],
  },
  {
    title: "Memory",
    image: memory,
    description:
      "Fruity Memory is a fun and simple memory matching game built with HTML, Sass, and TypeScript. The game features cards with fruit images that the player needs to match. Once all cards are matched correctly, a message is displayed, and the player has the option to play again.",
    stack: ["HTML", "SASS", "TypeScript", "Prettier", "Eslint", "Vite"],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/memory",
      },
    ],
  },
  {
    title: "Quote Generator",
    image: quote,
    description:
      "Quote Generator is a simple generator built with HTML, Sass, and TypeScript. The app displays inspiring, funny, or thoughtful quotes one at a time.",
    stack: ["HTML", "SASS", "TypeScript", "Prettier", "Eslint", "Vite"],
    links: [
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/quote-generator",
      },
    ],
  },
  {
    title: "Christmas Shop",
    image: christmas,
    description:
      "Task with the aim of learning the basics of the JavaScript course where the goal was a webshop based on a list of requirements from a customer.",
    stack: ["HTML", "SASS", "JavaScript", "Prettier", "Eslint"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-ellinorjohansson/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/christmas-shop",
      },
    ],
  },
  {
    title: "Tough Cookie",
    image: tough,
    description:
      "Task with the aim of learning the basics of the HTML/CSS course where the goal was a website based on a wireframe from a customer.",
    stack: ["HTML", "SASS"],
    links: [
      {
        label: "View demo",
        href: "https://medieinstitutet.github.io/fed24d-html-css-kundprojekt-ellinorjohansson/",
      },
      {
        label: "Go to Github",
        href: "https://github.com/ellinorjohansson/tough-cookie-made-up-customer-project",
      },
    ],
  },
];

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);
  const visibleItems = projectItems.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projectItems.length;

  return (
    <>
      <section className="projects-wrapper" id="projects">
        <div className="projects-intro">
          <p className="projects-eyebrow">Selected work</p>
          <h2 className="project-header">Projects</h2>
          <p className="projects-lead">
            A mix of production-ready school projects, collaborations, and
            personal builds where I focused on frontend structure, readability,
            and visual presentation.
          </p>
        </div>
        <div className="projects-grid">
          {visibleItems.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  <ul>
                    {project.stack.map((item) => (
                      <li key={`${project.title}-${item}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                {project.links ? (
                  <div className="project-buttons-row">
                    {project.links.map((link) => (
                      <a
                        className="project-button"
                        href={link.href}
                        key={`${project.title}-${link.href}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        {hasMoreProjects ? (
          <div className="projects-footer">
            <button
              className="show-more-projects"
              onClick={() =>
                setVisibleProjects((currentCount) =>
                  Math.min(currentCount + LOAD_MORE_COUNT, projectItems.length),
                )
              }
              type="button"
            >
              Show more projects
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
};
