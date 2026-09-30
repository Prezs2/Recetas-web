import RecipeCollection from '../../components/RecipeCollection/RecipeCollection'
import RecipeImage from '../../components/RecipeImage/RecipeImage'
import Icon from '../../components/Icon/Icon'
import { recipes } from '../../data'
import './Home.css'

export default function Home() {
  const featuredRecipe = recipes.find((recipe) => recipe.id === 'carne-asada') || recipes[0]
  return (
    <main>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__copy">
          <span className="eyebrow"><span /> EL GUSTO DE COCINAR EN CASA</span>
          <h1 id="hero-title">Cada día, una<br />nueva <em>delicia.</em></h1>
          <p>Ingredientes sencillos, recetas llenas de sabor y ese toque casero que hace todo especial.</p>
          <a className="button" href="#recetas">Encuentra tu próxima receta <Icon name="arrow" size={18} /></a>
          <div className="hero__caption"><Icon name="leaf" size={16} /> Cocina a tu ritmo. Disfruta cada bocado.</div>
        </div>
        <div className="hero__visual">
          <RecipeImage src={featuredRecipe?.image || '/images/recipe-fallback.svg'} alt={featuredRecipe?.name || 'Un plato casero listo para compartir'} fetchPriority="high" />
          <span className="hero__stamp">CON AMOR<br /><Icon name="chef" size={28} /><span>SABE MEJOR</span></span>
          <div className="hero__label"><span className="hero__label-icon">✦</span><div>De nuestra cocina a la tuya<small>Recetas para crear buenos momentos</small></div></div>
        </div>
      </section>
      <RecipeCollection />
      <section className="kitchen-note container"><Icon name="chef" size={35} /><div><h2>Lo mejor de cocinar es compartir.</h2><p>No necesitas ser chef. Solo buenos ingredientes y ganas de empezar.</p></div><span>Hecho con cariño ♡</span></section>
    </main>
  )
}
