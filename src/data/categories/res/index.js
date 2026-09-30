// Recetas de Recetario_casero: time indica el máximo del rango total; description conserva los tiempos completos.
// Los utensilios se incluyen en el primer paso y las alternativas a presión se conservan en tip.
export default {
  "id": "res",
  "name": "Res",
  "icon": "🥩",
  "description": "Platos con mucho sabor para compartir en la mesa.",
  "recipes": [
    {
      "id": "carne-guisada",
      "name": "Carne de res guisada con papa y zanahoria",
      "description": "Porciones 2 · Preparación 20 min · Cocción 90 a 130 min · Total 110 a 150 min",
      "image": "/images/carne-guisada.svg",
      "time": 150,
      "servings": 2,
      "difficulty": "No indicada",
      "ingredients": [
        "400 g de res para guisar, como paleta o morrillo",
        "2 papas medianas (300 g)",
        "1 zanahoria mediana",
        "2 tomates medianos",
        "1/2 cebolla morada mediana",
        "2 dientes de ajo",
        "1/2 pimentón",
        "1 cucharada de aceite",
        "600 ml de agua caliente, más para ajustar",
        "1/2 cucharadita de paprika",
        "1/4 de cucharadita de comino",
        "1/4 de cucharadita de tomillo",
        "1/2 cucharadita de sal, dividida",
        "1/8 de cucharadita de pimienta negra"
      ],
      "steps": [
        "Utensilios: Olla gruesa con tapa y pinzas. Corta la carne en cubos de 3 cm y seca con papel de cocina. Pica cebolla y tomate en cubitos, ajo fino y pimentón en tiras cortas. Pela papa y zanahoria; corta papa de 2 cm y zanahoria de 1 cm.",
        "Sazona la carne con 1/4 de cucharadita de sal y la pimienta. Calienta aceite a fuego medio alto. Dora la carne en 2 tandas, 2 a 3 minutos por cara. Retira a un plato; no tiene que quedar cocida todavía.",
        "Baja a fuego medio. En la misma olla cocina cebolla y pimentón 4 minutos. Añade ajo por 30 segundos y luego tomate, paprika, comino y tomillo. Cocina 6 minutos.",
        "Vierte un poco del agua y raspa el fondo con cuchara de madera para desprender lo dorado. Devuelve carne y jugos del plato; incorpora el resto de los 600 ml. El líquido debe llegar aproximadamente a la altura de la carne.",
        "Cuando hierva, tapa y baja a fuego suave. Cocina 60 a 90 minutos, comprobando cada 20 minutos que no se seque. Si hace falta, añade agua caliente de 100 ml en 100 ml.",
        "Cuando la carne empiece a ceder al tenedor, añade papa y zanahoria. Cocina 20 a 30 minutos más, hasta que la carne se atraviese fácilmente y las verduras estén tiernas.",
        "Destapa y hierve suavemente 5 a 10 minutos si la salsa está muy líquida. Ajusta con la sal restante. Si la carne sigue dura, continúa la cocción con suficiente líquido; dorar no la ablanda."
      ],
      "tip": "Resultado: carne tierna y salsa que cubre ligeramente la cuchara. El sellado aporta sabor; no encierra los jugos. Opción con olla a presión (alternativa): Después de dorar y preparar el sofrito, añade carne y 400 a 500 ml de agua, siempre respetando el mínimo de tu equipo. Cocina 30 a 40 minutos a presión alta, con liberación natural completa. Abre, comprueba ternura y añade papa y zanahoria; termina sin presión 20 a 25 minutos. Si la carne sigue dura, necesita más cocción antes de incorporar las verduras."
    },
    {
      "id": "carne-asada",
      "name": "Carne asada",
      "description": "Dorada por fuera y llena de sabor. Un clásico para cualquier día.",
      "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85",
      "time": 25,
      "servings": 2,
      "difficulty": "Fácil",
      "ingredients": [
        "500 g de carne de res para asar",
        "1 cucharada de aceite",
        "Sal al gusto",
        "Pimienta al gusto"
      ],
      "steps": [
        "Seca la superficie de la carne con papel de cocina y sazona con sal y pimienta.",
        "Calienta una sartén o parrilla con el aceite a fuego medio-alto.",
        "Asa la carne por ambos lados hasta alcanzar la cocción deseada. El tiempo depende del grosor del corte.",
        "Deja reposar unos 5 minutos antes de cortar y servir."
      ],
      "tip": "Deja que la carne se dore antes de darle la vuelta."
    },
    {
      "id": "carne-de-res-sofrita-con-cebolla-y-pimenton",
      "name": "Carne de res sofrita con cebolla y pimentón",
      "description": "Porciones 2 · Preparación 15 min · Cocción 12 a 18 min · Total 27 a 33 min",
      "image": "/images/recipe-fallback.svg",
      "time": 33,
      "servings": 2,
      "difficulty": "No indicada",
      "ingredients": [
        "350 g de res tierna para bistec, como lomo o cadera",
        "1/2 cebolla morada mediana",
        "1/2 pimentón",
        "1 diente de ajo",
        "1 cucharada de aceite, dividida",
        "1/2 cucharadita de paprika",
        "1/4 de cucharadita de ajo en polvo",
        "1/4 de cucharadita de sal",
        "1/8 de cucharadita de pimienta negra",
        "2 cucharadas de agua, solo si hace falta"
      ],
      "steps": [
        "Utensilios: Sartén amplia y pinzas. Corta la carne en tiras de 0,5 a 1 cm de grosor, atravesando las fibras; así se mastica mejor. Sécala con papel y sazona con sal, pimienta, paprika y ajo en polvo.",
        "Corta cebolla y pimentón en tiras delgadas y pica el ajo. Ten todo listo antes de encender la sartén: la cocción será rápida.",
        "Calienta la mitad del aceite a fuego medio. Cocina cebolla y pimentón 4 a 5 minutos, hasta ablandar sin deshacer. Agrega ajo 30 segundos y retira las verduras a un plato.",
        "Sube a fuego medio alto y añade el resto del aceite. Coloca la carne en una sola capa. Si no cabe, haz dos tandas. Déjala quieta 1 a 2 minutos para dorar.",
        "Voltea y cocina otros 2 a 4 minutos, según grosor. Si suelta mucha agua, evita añadir más carne y deja evaporar. No cocines largo rato un corte para guiso: quedará duro en este método.",
        "Devuelve las verduras y mezcla 1 minuto. Si hay fondo dorado adherido, incorpora 2 cucharadas de agua y raspa; la preparación debe quedar con poco líquido.",
        "Comprueba al menos 63 °C en la tira más gruesa con el termómetro insertado de lado y deja reposar 3 minutos antes de servir. Ajusta la sal después de probar una porción cocida."
      ],
      "tip": "Resultado: tiras doradas y verduras suaves. Una sartén abarrotada hierve la carne y dificulta el dorado. No necesita olla a presión."
    },
    {
      "id": "carne-de-res-molida-con-verduras",
      "name": "Carne de res molida con verduras",
      "description": "Porciones 2 · Preparación 15 min · Cocción 20 a 25 min · Total 35 a 40 min",
      "image": "/images/recipe-fallback.svg",
      "time": 40,
      "servings": 2,
      "difficulty": "No indicada",
      "ingredients": [
        "350 g de carne de res molida",
        "1 tomate grande (180 g)",
        "1/2 cebolla morada mediana",
        "2 dientes de ajo",
        "1/2 zanahoria mediana",
        "1/2 pimentón",
        "1 cucharadita de aceite; hasta 1 cucharada si la carne es muy magra",
        "60 ml de agua, solo si se seca",
        "1/2 cucharadita de paprika",
        "1/4 de cucharadita de comino",
        "1/4 de cucharadita de orégano",
        "1/4 de cucharadita de sal, más una pizca para ajustar",
        "1/8 de cucharadita de pimienta negra"
      ],
      "steps": [
        "Utensilios: Sartén amplia y espátula. Pica cebolla, tomate y pimentón en cubitos de 0,5 cm. Pela y ralla la zanahoria. Pica ajo muy fino. Conserva la carne refrigerada hasta este momento.",
        "Calienta aceite a fuego medio alto. Añade la carne y extiéndela. Déjala dorar 2 minutos antes de mover.",
        "Desmenuza con espátula y cocina 5 a 7 minutos, removiendo. Si hay exceso de grasa, retíralo con cuchara a un recipiente; no lo viertas por el desagüe.",
        "Baja a fuego medio. Añade cebolla, pimentón y zanahoria; cocina 4 minutos. Incorpora ajo durante 30 segundos.",
        "Añade tomate, paprika, comino, orégano, sal y pimienta. Mezcla y cocina 8 a 10 minutos a fuego medio bajo. Si se pega por falta de líquido, añade los 60 ml de agua poco a poco.",
        "Comprueba 71 °C en varias zonas del centro de la mezcla. El color por sí solo no confirma una cocción segura. Si falta temperatura, sigue cocinando y vuelve a medir.",
        "Prueba y ajusta sal. Para una carne más seca, destapa y cocina 2 a 3 minutos más; para servir con arroz, deja una salsa corta."
      ],
      "tip": "Resultado: carne suelta y verduras integradas. No requiere olla a presión. Desmenuza durante la cocción para evitar bloques grandes."
    },
    {
      "id": "higado-de-res-encebollado",
      "name": "Hígado de res encebollado",
      "description": "Porciones 2 · Preparación 15 min · Cocción 15 a 20 min · Total 30 a 35 min",
      "image": "/images/recipe-fallback.svg",
      "time": 35,
      "servings": 2,
      "difficulty": "No indicada",
      "ingredients": [
        "300 g de hígado de res limpio, en filetes de 0,8 a 1 cm",
        "1 cebolla morada grande (180 g)",
        "1 diente de ajo",
        "1 cucharada de aceite, dividida",
        "1/4 de cucharadita de paprika",
        "1/4 de cucharadita de ajo en polvo",
        "1/4 de cucharadita de sal",
        "1/8 de cucharadita de pimienta negra",
        "2 a 3 cucharadas de agua, si hace falta",
        "1 cucharada de cebollín picado, opcional"
      ],
      "steps": [
        "Utensilios: Sartén amplia, pinzas y termómetro. Retira con un cuchillo la membrana visible y conductos duros del hígado, o pide que lo entreguen limpio. Seca con papel; no lo laves bajo el grifo. Corta filetes de grosor uniforme.",
        "Corta la cebolla en plumas finas y pica ajo. Sazona el hígado con paprika, ajo en polvo, pimienta y sal justo antes de cocinar.",
        "Calienta la mitad del aceite a fuego medio. Añade cebolla y cocina 8 a 10 minutos, removiendo, hasta suave y ligeramente dorada. Si se pega, usa 1 cucharada de agua.",
        "Añade ajo, cocina 30 segundos y retira la cebolla a un plato.",
        "Agrega el resto del aceite y sube a fuego medio alto. Coloca el hígado sin amontonar. Cocina aproximadamente 2 a 3 minutos por lado; el tiempo varía con el grosor.",
        "Comprueba 71 °C en el centro, insertando el termómetro desde un borde. Si aún no llega, baja a fuego medio y cocina brevemente, revisando de nuevo. No uses el color como única comprobación.",
        "Devuelve la cebolla y mezcla 30 a 60 segundos. Añade 1 o 2 cucharadas de agua si deseas una salsa ligera. Sirve de inmediato y termina con cebollín si lo usas."
      ],
      "tip": "Resultado: cebolla dulce y hígado cocido sin prolongar innecesariamente la cocción. Cocinarlo muchos minutos después de alcanzar 71 °C lo vuelve seco. No necesita remojo en leche ni olla a presión."
    }
  ]
}
