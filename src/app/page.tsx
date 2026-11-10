import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import TechMarquee from '@/components/TechMarquee'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Work from '@/components/Work'
import Featured from '@/components/Featured'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Insights from '@/components/Insights'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Dock from '@/components/Dock'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechMarquee />
        <Services />
        <TechStack />
        <Work />
        <Featured />
        <Experience />
        <Testimonials />
        <Insights />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </>
  )
}
