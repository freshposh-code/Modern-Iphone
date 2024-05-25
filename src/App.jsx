
import * as Sentry from '@sentry/react';

import { Features, Footer, Hero, Highlight, HowItWorks, Model, Navbar } from "./components";


const App = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);