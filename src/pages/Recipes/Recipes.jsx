import { useParams } from 'react-router-dom'
import RecipeCollection from '../../components/RecipeCollection/RecipeCollection'

export default function Recipes() {
  const { category } = useParams()
  return <main className="category-page"><RecipeCollection key={category} categoryId={category} /></main>
}
