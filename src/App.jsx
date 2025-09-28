import React from "react"
import Navigation  from "./components/Navigation/Navigation"
import Hero from "./components/Hero/Hero";
import { useObserver } from "./hooks/useObserver"
import About from "./components/About/About";
import ProjectsList from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useScrollTop } from "./hooks/useScrollTop"

const App = () => {
  const hasAnimated = useObserver()
  const showScrollTop = useScrollTop()

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <ProjectsList />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  )
}

export default App;