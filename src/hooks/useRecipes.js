import { useMemo, useState } from 'react'
import { getCategory, recipes } from '../data'

const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function useRecipes(categoryId) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('recommended')
  const category = getCategory(categoryId)
  const filteredRecipes = useMemo(() => {
    const search = normalize(query.trim())
    const items = recipes.filter((recipe) =>
      (!categoryId || recipe.category.id === category?.id) &&
      normalize([recipe.name, recipe.description, ...recipe.ingredients].join(' ')).includes(search),
    )
    if (sort === 'time') items.sort((a, b) => a.time - b.time)
    if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name, 'es'))
    return items
  }, [categoryId, category, query, sort])
  return { recipes: filteredRecipes, category, query, setQuery, sort, setSort }
}
