export default {
  id: 'res', name: 'Res', icon: '🥩',
  description: 'Platos con mucho sabor para compartir en la mesa.',
  recipes: [
    {
      id: 'carne-guisada', name: 'Carne guisada',
      description: 'Un guiso casero, con carne tierna y un sofrito lleno de sabor.',
      image: '/images/carne-guisada.svg',
      time: 70, servings: 4, difficulty: 'Fácil',
      ingredients: ['500 g de carne de res para guisar, en cubos', '1 cebolla picada', '1 tomate picado', '2 dientes de ajo picados', '1 cucharada de aceite', '250 ml de agua o caldo', 'Sal y pimienta al gusto'],
      steps: ['Calienta el aceite en una olla y dora la carne por todos sus lados. Retírala y reserva.', 'En la misma olla, sofríe la cebolla y el ajo. Añade el tomate y cocina hasta que se ablande.', 'Regresa la carne a la olla, agrega el agua o caldo y sazona. Tapa y cocina a fuego bajo unos 50 minutos, o hasta que esté tierna. Añade más agua si hace falta.', 'Ajusta la sal y sirve caliente con arroz o tu acompañamiento favorito.'],
      tip: 'Corta la carne en cubos de tamaño similar para que se cocinen de manera uniforme.',
    },
    {
      id: 'carne-asada', name: 'Carne asada',
      description: 'Dorada por fuera y llena de sabor. Un clásico para cualquier día.',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85',
      time: 25, servings: 2, difficulty: 'Fácil',
      ingredients: ['500 g de carne de res para asar', '1 cucharada de aceite', 'Sal al gusto', 'Pimienta al gusto'],
      steps: ['Seca la superficie de la carne con papel de cocina y sazona con sal y pimienta.', 'Calienta una sartén o parrilla con el aceite a fuego medio-alto.', 'Asa la carne por ambos lados hasta alcanzar la cocción deseada. El tiempo depende del grosor del corte.', 'Deja reposar unos 5 minutos antes de cortar y servir.'],
      tip: 'Deja que la carne se dore antes de darle la vuelta.',
    },
  ],
}
