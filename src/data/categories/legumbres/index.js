export default {
  id: 'legumbres', name: 'Legumbres', icon: '🌱',
  description: 'Ingredientes sencillos que se convierten en grandes platos.',
  recipes: [
    {
      id: 'lentejas-guisadas', name: 'Lentejas guisadas',
      description: 'Una olla de lentejas con papas y verduras, como en casa.',
      image: '/images/lentejas-guisadas.svg',
      time: 45, servings: 4, difficulty: 'Fácil',
      ingredients: ['250 g de lentejas secas', '1 papa mediana en cubos', '1 cebolla picada', '1 tomate picado', '1 cucharada de aceite', '1 litro de agua o caldo de verduras', 'Sal y pimienta al gusto'],
      steps: ['Revisa y enjuaga las lentejas. Pela y corta la papa en cubos.', 'Calienta el aceite en una olla y sofríe la cebolla. Agrega el tomate y cocina unos minutos.', 'Añade las lentejas y el agua o caldo. Lleva a ebullición y baja el fuego.', 'Incorpora la papa y cocina unos 30 minutos, hasta que las lentejas y la papa estén tiernas. Añade agua según la consistencia que prefieras.', 'Sazona al gusto y sirve caliente.'],
      tip: 'Si prefieres un guiso más espeso, aplasta algunas papas dentro de la olla.',
    },
  ],
}
