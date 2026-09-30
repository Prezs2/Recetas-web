export default {
  id: 'cerdo', name: 'Cerdo', icon: '🍖',
  description: 'Recetas reconfortantes, doradas y llenas de sabor.',
  recipes: [
    {
      id: 'costillas-de-cerdo', name: 'Costillas de cerdo',
      description: 'Costillas tiernas con tomate, cebolla y un toque de paprika.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
      time: 80, servings: 2, difficulty: 'Fácil',
      ingredients: ['500 g de costillas de cerdo', '1 cebolla picada', '1 tomate picado', '1 cucharadita de paprika', '1 cucharada de aceite', '250 ml de agua o caldo', 'Sal y pimienta al gusto'],
      steps: ['Sazona las costillas con sal, pimienta y paprika.', 'Calienta el aceite en una olla y sella las costillas por ambos lados. Retíralas y reserva.', 'Sofríe la cebolla y el tomate en la misma olla hasta que estén blandos.', 'Añade las costillas y el agua o caldo. Tapa y cocina a fuego bajo unos 60 minutos, hasta que estén cocidas y tiernas. Agrega agua si el líquido se reduce demasiado.', 'Destapa al final para espesar la salsa y sirve caliente.'],
      tip: 'La cocción lenta ayuda a que las costillas queden más tiernas.',
    },
  ],
}
