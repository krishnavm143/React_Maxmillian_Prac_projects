
import { Suspense, lazy } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  const Home = lazy(() => import('./component/Home'))
  const Contact = lazy(() => import('./component/Contact'))
  const About = lazy(() => import('./component/About'))

  return (
    <>
      <Router>
        <Suspense>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
