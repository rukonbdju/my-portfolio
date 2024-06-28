
import './App.css'
import Banner from './Components/Banner'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {

  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
      <Blogs></Blogs>
      <Footer></Footer>
    </main>
  )
}

export default App
