// Añade categories/<id>/index.js para registrar una nueva categoría automáticamente.
const modules = import.meta.glob('./categories/*/index.js', { eager: true, import: 'default' })
export const categories = Object.values(modules).sort((a, b) => a.name.localeCompare(b.name, 'es'))
export const recipes = categories.flatMap(({ recipes: items, ...category }) => items.map((recipe) => ({ ...recipe, category })))
export const categoryAliases = { beef: 'res', pig: 'cerdo', legumes: 'legumbres' }
export function getCategory(id) { return categories.find((category) => category.id === (categoryAliases[id] || id)) }
export function getRecipe(id) { return recipes.find((recipe) => recipe.id === id) }
