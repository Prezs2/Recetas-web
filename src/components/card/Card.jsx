import "./Card.css";

function Card({ recipe }) {
  return (
    <article className="recipe-card">
      <img
        className="recipe-card__image"
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="recipe-card__content">
        <h2>{recipe.name}</h2>

        <h3>Ingredientes</h3>

        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Preparación</h3>

        <p>{recipe.preparation}</p>
      </div>
    </article>
  );
}

export default Card;