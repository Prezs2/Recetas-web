import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Icon from './components/Icon/Icon'
import Home from './pages/Home/Home'
import Recipes from './pages/Recipes/Recipes'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import { getRecipe, getCategory } from './data'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const parts = pathname.split('/').filter(Boolean)
    const title = parts[0] === 'receta' ? getRecipe(parts[1])?.name : getCategory(parts[0])?.name
    document.title = title ? `${title} · Entre sabores` : 'Entre sabores · Recetas caseras'
  }, [pathname])
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <div id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receta/:recipeId" element={<RecipeDetail key={pathname} />} />
          <Route path="/:category" element={<Recipes />} />
          <Route path="*" element={<main className="empty-state"><h1>Página no encontrada</h1><a className="button" href="/">Volver al inicio</a></main>} />
        </Routes>
      </div>
      <footer className="site-footer container"><span><Icon name="chef" size={19} /> Entre sabores</span><p>Una receta, un buen momento.</p><small>Tu recetario casero</small></footer>
    </>
  )
}
