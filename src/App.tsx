import "./App.scss";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <AboutMe />
        <Projects />
        <Skills />
        <GetInTouch />
      </main>
    </div>
  );
}

export default App;
