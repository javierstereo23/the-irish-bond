import { useState } from 'react'
import Particles from './components/ui/Particles'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SagaConcept from './components/SagaIntro/SagaConcept'
import Differential from './components/SagaIntro/Differential'
import Hook from './components/SagaIntro/Hook'
import BookEntry from './components/SagaIntro/BookEntry'
import SynopsisModal from './components/SynopsisModal'
import Saga from './components/Saga/Saga'
import Characters from './components/Characters/Characters'
import Editorial from './components/Editorial'
import Teaser from './components/Teaser'
import Authors from './components/Authors'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [synopsisOpen, setSynopsisOpen] = useState(false)

  return (
    <div className="bg-bg-main text-white min-h-screen">
      <Particles />
      <Nav />
      <Hero />
      <SagaConcept />
      <Differential />
      <Hook variant="main" />
      <BookEntry onOpenSynopsis={() => setSynopsisOpen(true)} />
      <Saga />
      <Characters />
      <Editorial />
      <Teaser />
      <Authors />
      <Newsletter />
      <Contact />
      <Footer />
      <SynopsisModal open={synopsisOpen} onClose={() => setSynopsisOpen(false)} />
    </div>
  )
}
