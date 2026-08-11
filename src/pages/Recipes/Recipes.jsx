import { useParams } from "react-router-dom";

import useRecipes from "../../hooks/useRecipes";
import Card from "../../components/Card/Card";

import "./Recipes.css";

function Recipes() {
  const { category } = useParams();
  const recipes = useRecipes(category);

  return (
    <main className="recipes-page">
      <h1>Recetas de {category}</h1>

      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}

export default Recipes;