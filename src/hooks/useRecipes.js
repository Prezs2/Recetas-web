import beefRecipes from "../data/beefRecipes";
import pigRecipes from "../data/pigRecipes";
import legumesRecipes from "../data/legumesRecipes";

function useRecipes(category) {
  const recipes = {
    beef: beefRecipes,
    pig: pigRecipes,
    legumes: legumesRecipes
  };

  return recipes[category] || [];
}

export default useRecipes;