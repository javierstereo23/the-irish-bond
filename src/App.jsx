import Particles from './components/ui/Particles'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Synopsis from './components/Synopsis'
import Characters from './components/Characters/Characters'
import Saga from './components/Saga/Saga'
import Editorial from './components/Editorial'
import Teaser from './components/Teaser'
import Authors from './components/Authors'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg-main text-white min-h-screen">
      <Particles />
      <Nav />
      <Hero />
      <Synopsis />
      <Characters />
      <Saga />
      <Editorial />
      <Teaser />
      <Authors />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}
