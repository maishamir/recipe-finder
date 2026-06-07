import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.scss'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Recipes from './pages/Recipes/Recipes'
import RecipeDetails from './pages/RecipeDetails/RecipeDetails'

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
