import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import RecipeImage from '../RecipeImage/RecipeImage'
import './Card.css'

export default function Card({ recipe }) {
  return (
    <article className="recipe-card">
      <Link to={`/receta/${recipe.id}`} className="recipe-card__link" aria-label={`Ver receta de ${recipe.name}`}>
        <div className="recipe-card__visual">
          <RecipeImage className="recipe-card__image" src={recipe.image} alt={recipe.name} loading="lazy" />
          <span className="recipe-card__badge">{recipe.category.icon} {recipe.category.name}</span>
        </div>
        <div className="recipe-card__content">
          <div className="recipe-card__meta"><span><Icon name="clock" size={16} /> {recipe.time} min</span><span className="difficulty-dot">{recipe.difficulty}</span></div>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
          <div className="recipe-card__bottom"><span><Icon name="people" size={17} /> {recipe.servings} porciones</span><span className="recipe-card__action">Ver receta <Icon name="arrow" size={18} /></span></div>
        </div>
      </Link>
    </article>
  )
}
