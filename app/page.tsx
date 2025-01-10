import Hero from '@/components/Hero'
import Awards from '@/components/Awards'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Showreel from '@/components/Showreel'
import News from '@/components/News'
import Clients from '@/components/Clients'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Awards />
      <About />
      <Portfolio />
      <Showreel />
      <News />
      <Clients />
    </main>
  )
}

