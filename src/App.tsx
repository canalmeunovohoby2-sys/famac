import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { BeforeAfter } from './sections/BeforeAfter'
import { Projects } from './sections/Projects'
import { Differentials } from './sections/Differentials'
import { CtaBand } from './sections/CtaBand'
import { Location } from './sections/Location'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Projects />
        <Differentials />
        <CtaBand />
        <Location />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
