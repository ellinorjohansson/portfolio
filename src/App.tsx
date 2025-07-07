import './App.scss'
import { AboutMe } from './components/AboutMe/AboutMe'
import { GetInTouch } from './components/GetInTouch/GetInTouch'
import { Header } from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

function App() {

  return (
    <>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <GetInTouch/>
    </>
  )
}

export default App
