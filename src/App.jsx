import React from "react"
import Navigation  from "./components/Navigation/Navigation"
import Hero from "./components/Hero/Hero";
import { useObserver } from "./hooks/useObserver"
import About from "./components/About/About";
//import { useScrollTop } from "./hooks/useScrollTop"

const App = () => {
  const hasAnimated = useObserver()
  //const showScrollTop = useScrollTop()

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
    </div>
  )
}

export default App;