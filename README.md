# Entre sabores

Recetario en React + Vite, con componentes funcionales y hooks. Incluye categorías, búsqueda por nombre o ingrediente (sin distinguir tildes ni mayúsculas), ordenación y una página de detalle para cada receta.

## Ejecutar

Con Node.js compatible con las versiones de Vite del proyecto y pnpm:

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Organización

```text
src/
  App.jsx                       Rutas, estructura común y títulos
  components/
    card/                       Tarjeta reutilizable enlazada al detalle
    Icon/                       Iconos SVG
    Navbar/                     Navegación generada desde los datos
    RecipeCollection/           Buscador, filtros, ordenación y cuadrícula
    RecipeImage/                Imagen con respaldo local
  data/
    index.js                    Descubre las categorías automáticamente
    categories/
      res/index.js
      cerdo/index.js
      legumbres/index.js
  hooks/
    useRecipes.js               Estado de búsqueda y ordenación
  pages/
    Home/
    Recipes/
    RecipeDetail/               Ingredientes y pasos numerados
public/
  images/                       Imágenes locales y respaldo
```

## Añadir una receta

Añade un objeto al arreglo `recipes` en el archivo de su categoría. Cada `id` debe ser único en TODO el recetario y usar letras minúsculas, números y guiones. Los ingredientes y los pasos son arreglos de textos; cada paso se muestra por separado.

```js
{
  id: 'frijoles-caseros',
  name: 'Frijoles caseros',
  description: 'Un plato reconfortante para compartir.',
  image: '/images/frijoles-caseros.jpg',
  time: 90,              // minutos estimados
  servings: 4,
  difficulty: 'Fácil',
  ingredients: ['250 g de frijoles', '1 cebolla', 'Sal al gusto'],
  steps: ['Prepara los ingredientes.', 'Cocina hasta que estén tiernos.', 'Sirve caliente.'],
  tip: 'Un consejo opcional.',
}
```

Guarda la foto en `public/images/`; su ruta en los datos comienza por `/images/`. También puedes usar una URL HTTPS. Las fotografías remotas actuales son ilustrativas y necesitan conexión; si fallan se muestra `recipe-fallback.svg`. Para que las fotos funcionen sin conexión, usa archivos locales.

## Añadir una categoría

Crea `src/data/categories/pollo/index.js` (o pescado, verduras, etc.):

```js
export default {
  id: 'pollo',
  name: 'Pollo',
  icon: '🍗',
  description: 'Recetas de pollo para todos los días.',
  recipes: [
    // Objetos con el formato anterior.
  ],
}
```

Vite descubre las carpetas mediante `import.meta.glob`: el menú, los filtros y las páginas se actualizan automáticamente, sin editar componentes ni rutas. Los identificadores de categoría también deben ser únicos.

Para un recetario más grande, puedes separar cada receta en su propio archivo dentro de la carpeta de categoría e importarla en el arreglo `recipes` de su `index.js`.

## Navegación y comportamiento

- `/`: todas las recetas.
- `/res`, `/cerdo`, `/legumbres`: recetas de una categoría.
- `/receta/<id>`: detalle con ingredientes, pasos, tiempo y porciones.
- Los enlaces anteriores `/beef`, `/pig` y `/legumes` siguen funcionando.
- Las categorías o recetas inexistentes muestran una vista de recuperación.
- Los ingredientes marcados se conservan mientras permanece abierta esa vista y se reinician al cambiar de receta.
- Cuadrícula de una columna en celular, dos en tablet y tres en escritorio; navegación horizontal desplazable para más categorías.
- Incluye etiquetas accesibles, navegación por teclado, foco visible y respeto por movimiento reducido.

Al publicar con un servidor propio, configura que las rutas de la aplicación devuelvan `index.html` para que los enlaces directos a recetas funcionen con BrowserRouter.
