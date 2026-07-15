import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Learning from '../components/Learning'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bi-900 text-bi-300 font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Learning />
      <Contact />
      <Footer />
    </div>
  )
}
