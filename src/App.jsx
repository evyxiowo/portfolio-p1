import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectsCard from "./components/ProjectsCard"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <ProjectsCard/>
    </div>
  )
}
export default App