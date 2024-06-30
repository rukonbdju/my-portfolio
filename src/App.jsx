
import './App.css'
import Achievement from './Components/Achievement'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {

  return (
    <main id='main' className='bg-background'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
      <Achievement></Achievement>
      <Footer></Footer>
    </main>
  )
}

export default App
