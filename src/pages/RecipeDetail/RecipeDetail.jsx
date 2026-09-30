import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRecipe } from '../../data'
import Icon from '../../components/Icon/Icon'
import RecipeImage from '../../components/RecipeImage/RecipeImage'
import './RecipeDetail.css'

export default function RecipeDetail() {
  const { recipeId } = useParams()
  const recipe = getRecipe(recipeId)
  const [checked, setChecked] = useState([])
  if (!recipe) return <main className="empty-state container"><h1>Esta receta no está en el recetario</h1><p>Quizás encuentres tu próximo plato favorito entre las otras recetas.</p><Link className="button" to="/">Explorar recetas</Link></main>
  const toggleIngredient = (index) => setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
  return (
    <main className="detail container">
      <Link className="back-link" to={`/${recipe.category.id}`}><Icon name="back" size={18} /> Volver a recetas de {recipe.category.name.toLowerCase()}</Link>
      <section className="detail__hero">
        <div><span className="eyebrow">{recipe.category.icon} RECETAS DE {recipe.category.name.toUpperCase()}</span><h1>{recipe.name}</h1><p className="detail__description">{recipe.description}</p><div className="detail__stats"><span><Icon name="clock" /><strong>{recipe.time} min</strong><small>Tiempo estimado</small></span><span><Icon name="people" /><strong>{recipe.servings} porciones</strong><small>Para compartir</small></span><span><Icon name="chef" /><strong>{recipe.difficulty}</strong><small>Dificultad</small></span></div></div>
        <RecipeImage src={recipe.image} alt={recipe.name} fetchPriority="high" />
      </section>
      <div className="detail__body">
        <section className="ingredients"><span className="eyebrow">ANTES DE EMPEZAR</span><h2>Ingredientes</h2><p>Marca los ingredientes que ya tienes.</p><ul>{recipe.ingredients.map((ingredient, index) => <li key={ingredient}><label className={checked.includes(index) ? 'is-checked' : ''}><input type="checkbox" checked={checked.includes(index)} onChange={() => toggleIngredient(index)} /><span>{ingredient}</span></label></li>)}</ul><span className="ingredients__progress" role="status">{checked.length} de {recipe.ingredients.length} ingredientes listos</span></section>
        <section className="preparation"><span className="eyebrow">MANOS A LA OBRA</span><h2>Preparación paso a paso</h2><ol>{recipe.steps.map((step, index) => <li key={step}><span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>{recipe.tip && <aside className="recipe-tip"><Icon name="leaf" size={24} /><div><h3>Un pequeño consejo</h3><p>{recipe.tip}</p></div></aside>}</section>
      </div>
    </main>
  )
}
