import './App.css'
import { AboutMe } from './components/AboutMe'
import { GetInTouch } from './components/GetInTouch'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

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
