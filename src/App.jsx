
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Skills from './Components/Skills'

function App() {

  return (
    <main>
      <nav className="fixed top-0 right-0 w-full">
        <Navbar></Navbar>
      </nav>
      <Banner></Banner>
      <Services></Services>
      <Skills></Skills>
      <Footer></Footer>
    </main>
  )
}

export default App
