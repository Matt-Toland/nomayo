import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DeliDivider from './components/DeliDivider'
import About from './components/About'
import Menu from './components/Menu'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DeliDivider />
      <About />
      <DeliDivider />
      <Menu />
      <DeliDivider />
      <InstagramFeed />
      <DeliDivider />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
