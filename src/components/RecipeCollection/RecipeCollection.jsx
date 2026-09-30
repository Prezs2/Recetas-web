import { Link } from 'react-router-dom'
import { categories } from '../../data'
import useRecipes from '../../hooks/useRecipes'
import Card from '../card/Card'
import Icon from '../Icon/Icon'
import './RecipeCollection.css'

export default function RecipeCollection({ categoryId }) {
  const { recipes, category, query, setQuery, sort, setSort } = useRecipes(categoryId)
  const Heading = categoryId ? 'h1' : 'h2'
  if (categoryId && !category) return <section className="empty-state container"><h1>No encontramos esta categoría</h1><p>Descubre las recetas disponibles en nuestro recetario.</p><Link className="button" to="/">Volver a las recetas</Link></section>
  return (
    <section id="recetas" className="collection container" aria-labelledby="collection-title">
      <div className="collection__heading"><div><span className="eyebrow">TU RECETARIO DE CADA DÍA</span><Heading id="collection-title">{category ? `Recetas de ${category.name.toLowerCase()}` : '¿Qué cocinamos hoy?'}</Heading><p>{category?.description || 'Encuentra tu antojo y ponle sabor a tu día.'}</p></div><span className="collection__count">{recipes.length} {recipes.length === 1 ? 'receta' : 'recetas'} para inspirarte</span></div>
      <div className="collection__tools">
        <nav className="category-filters" aria-label="Filtrar por ingrediente principal">
          <Link to="/" className={!categoryId ? 'selected' : ''}><Icon name="chef" size={17} /> Todas</Link>
          {categories.map((item) => <Link key={item.id} to={`/${item.id}`} className={item.id === category?.id ? 'selected' : ''}><span aria-hidden="true">{item.icon}</span>{item.name}</Link>)}
        </nav>
        <label className="search-field"><Icon name="search" size={18} /><span className="sr-only">Buscar por receta o ingrediente</span><input type="search" placeholder="Busca una receta o ingrediente…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
      </div>
      <div className="collection__results"><span>{query ? `Resultados para “${query}”` : category ? 'Sabor casero en cada plato' : 'Un poco de todo, mucho sabor'}</span><label>Ordenar por <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recomendadas</option><option value="time">Menor tiempo</option><option value="name">Nombre A–Z</option></select></label></div>
      {recipes.length ? <div className="recipe-grid">{recipes.map((recipe) => <Card key={recipe.id} recipe={recipe} />)}</div> : <div className="empty-state" role="status"><Icon name="search" size={30} /><h3>No encontramos recetas</h3><p>Prueba con otro nombre o ingrediente.</p><button className="button" onClick={() => setQuery('')}>Limpiar búsqueda</button></div>}
    </section>
  )
}
