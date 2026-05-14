import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.scss'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
