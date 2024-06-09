
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {

  return (
    <main className='overflow-hidden'>
      <nav className="fixed top-0 right-0 w-screen overflow-hidden">
        <Navbar></Navbar>
      </nav>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>
      <Services></Services>
      <Footer></Footer>
    </main>
  )
}

export default App
