import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bi-900 text-bi-300 font-sans">
      <Navbar />
      <Hero />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
