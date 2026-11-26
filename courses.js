// Catálogo Oficial de Cursos - La Martina
// Total cursos: 183
const COURSES_DATA = [
  {
    "id": 1,
    "title": "3 Leches Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/3_leches_saludables.webp",
    "rawName": "3 leches saludables.jpeg",
    "description": "🍰 Tres leches clásico\n🍰 Tres leches de Maracuyá\n🍰 Tres leches de Chocolate\n🍰 Tres leches de frutos rojos\n🍰 Tres leches lemon pie\n🍰 Mousse de Maracuyá saludable \n🍰 Mousse de chocolate saludable \n🍰 Mousse de lemon pie Saludable \n🍰 Mousse de frutos rojos saludable \n🍰 Bizcochuelo de vainilla saludable\n🍰 Bizcochuelo de chocolate saludable\n🍰 Leche de coco casera saludable\n🍰 Leche de almendras casera saludable\n🍰 Salsa tres leches de vainilla saludable\n🍰 Salsa tres leches de chocolate saludable\n🍰 Crema chantilly sin azúcar\n🍰 Mermelada sin azúcar \n🍰 Jalea de Maracuyá sin azúcar",
    "price": 70
  },
  {
    "id": 2,
    "title": "Alfajores Novedosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/alfajores_novedosos.webp",
    "rawName": "alfajores novedosos.jpeg",
    "description": "🍥 Alfajor Premium de Pistacho\n🍥 Alfajor de Frutilla\n🍥 Alfajor de Coco y Manjar\n🍥 Alfajor intenso de Chocolate\n🍥 Alfajor estilo Oreo y Alfajor Cookies\n🍥 Relleno cremoso de Pistacho \n🍥 Relleno cremoso de frutilla \n🍥 Relleno Brigadeiro de chocolate \n🍥 Baño de chocolate blanco\n🍥 Baño de chocolate semi amargo",
    "price": 70
  },
  {
    "id": 3,
    "title": "Bocaditos Brasileños",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/bocaditos_brasile_os.webp",
    "rawName": "bocaditos brasileños.jpeg"
  },
  {
    "id": 4,
    "title": "Bolos de Pote",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bolos_de_pote.webp",
    "rawName": "bolos de pote.jpeg"
  },
  {
    "id": 5,
    "title": "Bolos Frutales y Heladitos de Leche",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bolos_frutales_y_heladitos_de_leche.webp",
    "rawName": "bolos frutales y heladitos de leche.jpeg",
    "description": "🍉 Bolo tropical de sandía, piña y naranja\n🍓 Bolo tropical de frutilla, moras y frambuesa\n🍊 Bolo tropical de mandarina, manga y papaya\n🥥 Heladito de leche y coco\n🍓 Heladito de fresas con crema\n🍫 Heladito de leche y chocolate\n🍋 Heladito de leche y pie de limón\n🥭 Heladito de leche y maracuyá (paletas y en vasito)",
    "price": 80
  },
  {
    "id": 6,
    "title": "Bolos Gourmet",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bolos_gourmet_2.webp",
    "rawName": "Remove_course_price_and_date_bf9acb10.jpg",
    "description": "🍨 Bolo Gourmet de coco y condensada \n🍨 Bolo Gourmet de Chocolate y Nutella \n🍨 Bolo Gourmet de chicle (Color Barbie) \n🍨 Bolo Gourmet de Oreo\n🍨 Bolo Gourmet Chocomenta\n🍨 Bolo Gourmet de Maracuyá \n🍨 Bolo Gourmet de frutilla\n🍨 Bolo Gourmet de Dulce de Leche\n🍨 jalea de Maracuyá",
    "price": 60
  },
  {
    "id": 7,
    "title": "Festival del Brazo Gitano",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brazo_gitano.webp",
    "rawName": "brazo gitano.jpeg",
    "description": "🍥 Brazo gitano Clásico de coco y manjar\n🍥 Brazo gitano de Chocolate relleno de Brigadeiro\n🍥 Brazo gitano de Durazno con crema pastelera\n🍥 Brazo gitano de Merengue, Chantilly y frutilla\n🍥 Brazo gitano \"Estanpado especial de corazón\"\n🍥 relleno de crema de frutilla\n🍥 Crema Brigadeiro\n🍥 Crema Chantilly\n🍥 Salsa para humedecer\n🍥 Ganache de Chocolate\n🍥 Crema de Frutilla\n🍥 Crema pastelera",
    "price": 70
  },
  {
    "id": 8,
    "title": "Brigadeiros Gourmet",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brigadeiros_gourmet.webp",
    "rawName": "brigadeiros gourmet.jpeg",
    "description": "🍬 Brigadeiros de Morango\n🍬 Brigadeiros de Chocolate.\n🍬 Brigadeiros de Coco Rellenos de manjar \n🍬 Brigadeiros de Lemon pie\n🍬 Brigadeiros de maracuyá \n🍬 Brigadeiros Nido\n🍬 Brigadeiros de oreo",
    "price": 60
  },
  {
    "id": 9,
    "title": "Brownies Blondies y Brookies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brownies_blondies_y_brookies.webp",
    "rawName": "brownies blondies y brookies.jpeg",
    "description": "🍓 Blondie blanco de frambuesa\n🍫 Blondie blanco Snickers toffi casero con mantequilla de maní\n🍪 Brookies de chips\n🥛 Brownie Nido con crema Nido casera\n🍫 Brownie clásico chocolatoso\n🍮 Brownie Brigadeiro con crema artesanal\n❤️ Brownie Cheese Red Velvet\n✨ Masa de galleta chips de chocolate \n✨ Crema nido \n✨ Crema brigadeiro",
    "price": 70
  },
  {
    "id": 10,
    "title": "Brunch Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/brunch_saludables.webp",
    "rawName": "brunch saludables.jpeg"
  },
  {
    "id": 11,
    "title": "Bufet Brunch para la Tarde",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bufet_brunch_para_la_tarde.webp",
    "rawName": "bufet brunch para la tarde.jpeg",
    "description": "🧇 Wafles dulces frutales y salados de queso\n🥧 Tarta/Quiché integral\n🥐 Facturas Esponjosas\n🥯 Bagel de pollo crispy con salsa de miel\n🥯 Pan bagel\n🥖 Paninis integrales de pollo al strogonof\n🥖 Pan de panini\n🧀 Tablita de quesos y fiambres\n🥣 Granola casera con yogur\n🍰 Banana bread con Maracuyá \n🍰 Mini cheesecakes de frutos rojos a la copa\n🍞 Tostadas Francesas\n🍹 Té helado de frutos rojos\n✨ técnicas de Decoración de Mesa Brunch para eventos",
    "price": 120
  },
  {
    "id": 12,
    "title": "Mini Volcanes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_volcanes.webp",
    "rawName": "Remove_course_price_and_date_06192fe2.jpg",
    "description": "🍮 mini volcan de chocolate y brigadeiro.\n🍮 mini volcan nido.\n🍮 mini volcan red velvet.\n🍮 mini volcan confetti.\n🍮 mini volcan de maracuyá.\n🍮 mini volcane de dulce de leche.\n🍮 Cremas.\n🍮 Masas húmedas.\n🍮 Baños consistentes.\n🍮 Salsas para humedecer",
    "price": 60
  },
  {
    "id": 13,
    "title": "Cakes Cup",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cakes_cup.webp",
    "rawName": "cakes cup.jpeg"
  },
  {
    "id": 14,
    "title": "Cheesecakes Al Horno",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/cheesecakes_al_horno.webp",
    "rawName": "cheesecakes al horno.jpeg",
    "description": "🍮 Cheesecakes al horno clásico brulee\n🍫 Cheesecakes al horno blondie y caramelo\n🥭 Cheesecakes al horno de maracuyá\n🍓 Cheesecakes al horno de frutos rojos\n🍪 Brownie blondie duo\n✨ Jalea de Maracuyá\n✨ Brownie blondie caramelo \n✨ Caramelo para Brulee\n✨ Jalea de Frutos rojos",
    "price": 70
  },
  {
    "id": 15,
    "title": "Cheesecakes para Eventos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/cheesecakes_para_eventos.webp",
    "rawName": "cheesecakes para eventos.jpeg"
  },
  {
    "id": 16,
    "title": "Cheesecakesmanía",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cheesecakesman_a.webp",
    "rawName": "cheesecakesmanía.jpeg"
  },
  {
    "id": 17,
    "title": "Choco Bites",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/choco_bites.webp",
    "rawName": "choco bites.jpeg",
    "description": "🍫 Fruit bits de Frambuesa chocolate blanco y negro\n🍫 Chocofruit de banana y mantequilla de maní\n🍫 ChoFruits de frutilla y yogur\n🍫 ChocoBites de Arándanos\n🍫 Banana Frozen\n🍫 Kiwi  chocofruit\n🍫 Baño de chocolate sin azúcar (Saludable) \n🍫 Baño de chocolate blanco sin azucar (Saludable) \n🍫 Baño de chocolate con leche (Clásico) \n🍫 Baño de chocolate blanco(Clásico)",
    "price": 60.04
  },
  {
    "id": 18,
    "title": "Choripanes por el Mundo",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/choripanes_por_el_mundo.webp",
    "rawName": "Choripanes por el mundo.jpeg"
  },
  {
    "id": 19,
    "title": "Chunk Cakes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/chunk_cakes.webp",
    "rawName": "chunk cakes.jpeg",
    "description": "🍫 Chunck Cakes de Morango.\n🍫 Chunck Cakes de Mockachino.\n🍫 Chunck Cakes de Oreo.\n🍫 Chunck Cakes Chocobombom\n🍫 Masa saborizada morango \n🍫 Masa saborizada café y dulce de leche \n🍫 Masa saborizada oreo \n🍫 Masa saborizada chips y bombom \n🍫 Salsa 4 leches sabor Morango \n🍫 Salsa 4 leches sabor Mockachino\n🍫 Salsa 4 leches sabor Oreo\n🍫 Salsa 4 leche sabor chocolate \n🍫 Crema mix Morango\n🍫 Crema mix oreo\n🍫 Crema mix dulce de leche y chocolate",
    "price": 60
  },
  {
    "id": 20,
    "title": "Comida Brasilera",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_brasilera.webp",
    "rawName": "comida brasilera.jpeg"
  },
  {
    "id": 21,
    "title": "Comida China",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_china.webp",
    "rawName": "comida china.jpeg"
  },
  {
    "id": 22,
    "title": "Comida Peruana",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_peruana.webp",
    "rawName": "comida peruana.jpeg"
  },
  {
    "id": 23,
    "title": "Comida Rapida Comercial",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_rapida_comercial.webp",
    "rawName": "comida rapida comercial.jpeg",
    "description": "🍔 Hamburguesa clásicas y Americana desde el pan\n🍕 Pizza Comercial desde la masa y Salsa\n🍗 Alitas con miel y mostaza\n🍗 Alita Barbacoa\n🥪 sándwich de Lomito\n🍗 Pipocas de pollo \n🍔 Pan de hamburguesa \n🫕 Salsa barbacoa \n🍟 Papas fritas doble cocción \n🫕 Salsa de pizza comercial \n🫕 Salsa de miel y mostaza \n🫕 Salsa de lomito",
    "price": 70
  },
  {
    "id": 24,
    "title": "Comida Rapida Saludable",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_rapida_saludable.webp",
    "rawName": "comida rapida saludable.jpeg"
  },
  {
    "id": 25,
    "title": "Comida Saludable Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_saludable_keto.webp",
    "rawName": "comida saludable keto.jpeg"
  },
  {
    "id": 26,
    "title": "Comida Vegetariana",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_vegetariana.webp",
    "rawName": "comida vegetariana.jpeg"
  },
  {
    "id": 27,
    "title": "Comidas Deliciosas con Chancho",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_deliciosas_con_chancho.webp",
    "rawName": "comidas deliciosas con chancho.jpeg"
  },
  {
    "id": 28,
    "title": "Comidas Economicas y Saludables",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_economicas_y_saludables.webp",
    "rawName": "comidas economicas y saludables.jpeg"
  },
  {
    "id": 29,
    "title": "Comidas Economicas y Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comidas_economicas_y_saludables.webp",
    "rawName": "comidas economicas y saludables.jpeg"
  },
  {
    "id": 30,
    "title": "Comita Tipica Cruceña",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comita_tipica_cruce_a.webp",
    "rawName": "comita tipica cruceña.jpeg"
  },
  {
    "id": 31,
    "title": "Cremas y Rellenos",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cremas_y_rellenos.webp",
    "rawName": "cremas y rellenos.jpeg"
  },
  {
    "id": 32,
    "title": "Crumble Buns",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/crumble_buns.webp",
    "rawName": "crumble buns.jpeg",
    "description": "🫐 Crumble Buns de arándanos\n🍏 Crumble Buns de manzana y avena\n🍓 Crumble Buns de frutilla y cheesecakes\n🍌 Crumble Buns de banana y caramelo salado\n🥥 Crumble Buns de coco y piña\n🥖 Masa brioche especial de buns\n✨ Mermelada de arándanos \n✨ crema de coco \n✨ Caramelo casero \n✨ Crumble casero \n✨ Crema cheesecakes",
    "price": 70
  },
  {
    "id": 33,
    "title": "Cuchareables",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/cuchareables.webp",
    "rawName": "cuchareables.jpeg"
  },
  {
    "id": 34,
    "title": "Cuchareables Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/cuchareables_saludables_2.webp",
    "rawName": "cuchareables_saludables.webp_bbbe887e.jpg",
    "description": "🍨 Cuchareable de coco\n🍨 Cuchareable de frutos rojos\n🍨 Cuchareable de Chocolate \n🍨 Cuchareable de Maracuyá\n🍨 Masa de vainilla sin gluten \n🍨 Masa de chocolate sin gluten\n🍨 Relleno de Chessecakes sin azúcar \n🍨 Relleno de coco sin azúcar \n🍨 3 leches sin azúcar \n🍨 Crema chantilly sin azúcar \n🍨 Ganache sin azúcar\n🍨 Relleno Mousse de Maracuyá sin azúcar \n🍨 Crema pastelera de chocolate sin azúcar \n🍨 Jalea de Maracuyá sin azúcar\n🍨 Mermelada de frutos rojos sin azúcar",
    "price": 70
  },
  {
    "id": 35,
    "title": "Delicias Típicas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/delicias_t_picas.webp",
    "rawName": "delicias típicas.jpeg",
    "description": "🥛 Maja blanco\n🍰 Panqueques cruceños (bizcochuelo) con merengue\n🧀 Cuñapé abizcochado\n🍮 “Quiero más”\n🥛 Leche nevada\n🥟 Empanada de arroz extra suave\n🍖 Asadito con yuca\n🍮 Budín con grosella casera\n☁️ Merengue para Panqueques cruceños \n🍬 Caramelo \n🍷 Grosella casera",
    "price": 80
  },
  {
    "id": 36,
    "title": "Desayunos para Emprender",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/desayunos_para_emprender.webp",
    "rawName": "desayunos para emprender.jpeg"
  },
  {
    "id": 37,
    "title": "Donuts Rellenos Especiales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/donuts_rellenos_especiales.webp",
    "rawName": "donuts rellenos especiales.jpeg",
    "description": "🍩 Masa hiper esponja\n🍩 Donut relleno creme brulee con caramelo crocante\n🍩 Donut relleno merengue pie de limón\n🍩 Donut nutella\n🍩 Donut Nido relleno\n🍩 Donut Fresas con crema\n🍩 Donut oreo relleno\n🍩 Donuts Rafaello de Coco\n🍩 Glaseado clásico de donut\n🍩 Crema chantilly\n🍩 Merengue para donuts\n🍩 Relleno cremoso básico\n🍩 Relleno cremoso sabor Oreo\n🍩 Relleno cremoso sabor coco\n🍩 Relleno cremoso sabor Lemon Pie\n🍩 baño de Chocolate blanco\n🍩 baño de Chocolate semi amargo",
    "price": 70
  },
  {
    "id": 38,
    "title": "Dulces Economicos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/dulces_economicos.webp",
    "rawName": "dulces economicos.jpeg"
  },
  {
    "id": 39,
    "title": "Dulces Fusiones",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/dulces_fusiones.webp",
    "rawName": "dulces fusiones.jpeg"
  },
  {
    "id": 40,
    "title": "Dulces Pascuas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/dulces_pascuas.webp",
    "rawName": "dulces pascuas.jpeg"
  },
  {
    "id": 41,
    "title": "El Mundo de las Hamburguesas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/el_mundo_de_las_hamburguesas_2.webp",
    "rawName": "Remove_burger_list_and_replace_48decdfc.jpg",
    "description": "🍔 Hamburguesa Americana.\n🍔 Hamburguesa Colombiana.\n🍔 Hamburguesa Hawaiana.\n🍔 Hamburguesa Mexicana.\n🍔 Panes De Hamburguesas Suaves Y Esponjosos.\n🍔 Carne De Hamburguesa Jugosa De Res.\n🍟 Papas Crocantes.\n🍟 Aros De Cebolla.\n🍟 Salsa De Morrón Ahumado.\n🍟 Salsa De Cebolla Caramelizada.\n🍟 Salsa Barbacoa.\n🍟 Salsa De Piña.\n🍟 Salsa De Guacamole.",
    "price": 70
  },
  {
    "id": 42,
    "title": "El Mundo del 3 Leches",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/el_mundo_del_3_leches.webp",
    "rawName": "el mundo del 3 leches.jpeg"
  },
  {
    "id": 43,
    "title": "Empanadas Argentinas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_argentinas.webp",
    "rawName": "empanadas argentinas.jpeg"
  },
  {
    "id": 44,
    "title": "Empanadas Fritas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_fritas.webp",
    "rawName": "empanadas fritas.jpeg"
  },
  {
    "id": 45,
    "title": "Empanadas Integrales",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_integrales.webp",
    "rawName": "empanadas integrales.jpeg"
  },
  {
    "id": 46,
    "title": "Empanadas sin Gluten",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/empanadas_sin_gluten.webp",
    "rawName": "empanadas sin gluten.jpeg"
  },
  {
    "id": 47,
    "title": "Entre Brasas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/entre_brasas.webp",
    "rawName": "entre brasas.jpeg"
  },
  {
    "id": 48,
    "title": "Especial de Comida Boliviana",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/especial_de_comida_boliviana.webp",
    "rawName": "especial de comida boliviana.jpeg"
  },
  {
    "id": 49,
    "title": "Especial de Milanesas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/especial_de_milanesas.webp",
    "rawName": "Especial de milanesas.jpeg"
  },
  {
    "id": 50,
    "title": "Especial de Panes Salados",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/especial_de_panes_salados.webp",
    "rawName": "especial de panes salados.jpeg"
  },
  {
    "id": 51,
    "title": "Especial de San Valentin",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/especial_de_san_valentin.webp",
    "rawName": "especial de san valentin.jpeg"
  },
  {
    "id": 52,
    "title": "Fábrica de Alfajores",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/f_brica_de_alfajores.webp",
    "rawName": "fábrica de alfajores.jpeg"
  },
  {
    "id": 53,
    "title": "Facturas Argentinas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/facturas_argentinas.webp",
    "rawName": "facturas argentinas.jpeg"
  },
  {
    "id": 54,
    "title": "Fatias en Tendencia",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/fatias_en_tendencia.webp",
    "rawName": "fatias en tendencia.jpeg",
    "description": "🍒 Torta/Fatias Selva Negra\n🍫 Torta/Fatias Chocolate, Bombom y Nido\n🥥 Torta/Fatias Coco y Frambuesa\n🍮 Torta/Fatias Pudim Crocante con Feuilletine\n🍰 Masa de chocolate extra suave \n🍰 Masa de coco \n🍰 Masa de vainilla \n🍰 Masa crocante de feuilletine \n🍰 Relleno bombom de mantequilla de maní\n🍰 Relleno de coco\n🍰 Mermelada de Frambuesa \n🍰 Relleno diplomata de vainilla \n🍰 Crema chantilly \n🍰 Crema pastelera de chocolate sedosa\n🍰 Crema de chocolate blanco y nido \n🍰 Crema pudimg de vainilla \n🍰 Flan casero \n🍰 Salsa de almibar de licor suave para humedecer \n🍰 Armados y decoración de las 4 tortas",
    "price": 90
  },
  {
    "id": 55,
    "title": "Festival de las Alitas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_de_las_alitas_2.webp",
    "rawName": "festival_de_las_alitas.webp_672f3900.jpg",
    "description": "🍗 Alitas crocantes.\n🍗 Alitas Buffalo.\n🍗 Alitas BBQ.\n🍗 Alitas Teriyaki.\n🍗 Alitas con miel y mostaza.\n🍗 Alitas parmesano y ajo.\n🍟 Papas fritas crocantes.\n🍟 Papas gringas condimentadas\n🟠 Salsa de ajo y cebollín\n🟠 Salsa golf desde la Mayonesa desde cero",
    "price": 70
  },
  {
    "id": 56,
    "title": "Festival del Pato Sabroso",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_del_pato_sabroso.webp",
    "rawName": "festival del pato sabroso.jpeg"
  },
  {
    "id": 57,
    "title": "Festival del Pollo",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_del_pollo.webp",
    "rawName": "festival del pollo.jpeg"
  },
  {
    "id": 58,
    "title": "Festival del Tiramisú",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/festival_del_tiramis.webp",
    "rawName": "festival del tiramisú.jpeg"
  },
  {
    "id": 59,
    "title": "Frutas en Tendencias",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/frutas_en_tendencias.webp",
    "rawName": "frutas en tendencias.jpeg"
  },
  {
    "id": 60,
    "title": "Galletas Crumble",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/galletas_crumble.webp",
    "rawName": "galletas crumble.jpeg"
  },
  {
    "id": 61,
    "title": "Galletas y Alfajores Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/galletas_y_alfajores_saludables.webp",
    "rawName": "galletas y alfajores saludables.jpeg",
    "description": "🍪 Galleta New York keto sin gluten\n🍊 Galleta de naranja\n🍋 Galleta de limón keto sin gluten\n🍫 Alfajores de chocolate y brigadeiro (sin gluten, sin azúcar)\n🥥 Alfajor de coco sin gluten\n🍫 Crema de brigadeiro desde cero \n🍫 Baño de chocolate semi amargo 70%\n✨ Baños y rellenos saludables",
    "price": 90
  },
  {
    "id": 62,
    "title": "Helados Paletas y Bolos Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/helados_paletas_y_bolos_saludables.webp",
    "rawName": "helados paletas y bolos saludables.jpeg"
  },
  {
    "id": 63,
    "title": "Horneados Típicos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/horneados_t_picos.webp",
    "rawName": "horneados típicos.jpeg"
  },
  {
    "id": 64,
    "title": "Jugos Detox y Smoothies Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/jugos_detox_y_smoothies_saludables.webp",
    "rawName": "jugos detox y smoothies saludables.jpeg"
  },
  {
    "id": 65,
    "title": "La Fabrica del Chocolate",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/la_fabrica_del_chocolate.webp",
    "rawName": "la fabrica del chocolate.jpeg",
    "description": "🍫 Chocolate dubai \n🍫 Conos trufados de brigadeiro \n🍫 Conos trufados de morango \n🍫 Bombones de Frutilla\n🍫 Bombones de Maracuyá \n🍫 Tabletas de menta \n🍫 Chocolate marroc \n🍫 Barritas de coco\n🍫 Frutillas bañadas para eventos especiales \n🍫 Temperaturas, templados.\n🍫 Procedimientos con variedades de chocolates",
    "price": 90
  },
  {
    "id": 66,
    "title": "Lácteos Caseros",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/l_cteos_caseros.webp",
    "rawName": "lácteos caseros.jpeg"
  },
  {
    "id": 67,
    "title": "Lácteos Caseros",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/l_cteos_caseros.webp",
    "rawName": "lácteos caseros.jpeg"
  },
  {
    "id": 68,
    "title": "Las Marquesas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/las_marquesas.webp",
    "rawName": "las marquesas.jpeg"
  },
  {
    "id": 69,
    "title": "Lasañas y Crepes",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/lasa_as_y_crepes.webp",
    "rawName": "lasañas y crepes.jpeg"
  },
  {
    "id": 70,
    "title": "Loncheras Nutritivas",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/loncheras_nutritivas.webp",
    "rawName": "loncheras nutritivas.jpeg"
  },
  {
    "id": 71,
    "title": "Masas para el Frío",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masas_para_el_fr_o.webp",
    "rawName": "masas para el frío.jpeg"
  },
  {
    "id": 72,
    "title": "Mermeladas de Temporada",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/mermeladas_de_temporada.webp",
    "rawName": "mermeladas de temporada.jpeg"
  },
  {
    "id": 73,
    "title": "Mermeladas de Temporada",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mermeladas_de_temporada.webp",
    "rawName": "mermeladas de temporada.jpeg"
  },
  {
    "id": 74,
    "title": "Mini Donuts",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_donuts.webp",
    "rawName": "mini donuts.jpeg"
  },
  {
    "id": 75,
    "title": "Mini Layer Cakes",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/mini_layer_cakes.webp",
    "rawName": "mini layer cakes.jpeg"
  },
  {
    "id": 76,
    "title": "Mini Postres",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_postres_2.webp",
    "rawName": "Remove_course_price_and_date_91cf9344.jpg",
    "description": "🍮 Mini Trifle Selva Negra \n🍮 Mini Cremoso de Dulce de leche\n🍮 Mini Zing zag de Frutilla\n🍮 Mini mousse de Nutella\n🍮 Mini Mousse de Maracuyá \n🍮 Mini Lemon pie \n🎊 Mix de crema\n🎊 Jalea de maracuyá\n🎊 Ganache\n🎊 Estructuras de chocolate para darle altura a los postres",
    "price": 70
  },
  {
    "id": 77,
    "title": "Mochis Frutales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mochis_frutales.webp",
    "rawName": "mochis frutales.jpeg"
  },
  {
    "id": 78,
    "title": "Mundo Chocolatoso",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_chocolatoso.webp",
    "rawName": "mundo chocolatoso.jpeg"
  },
  {
    "id": 79,
    "title": "Mundo Muffins",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_muffins.webp",
    "rawName": "mundo muffins.jpeg",
    "description": "🟠 Muffins de Chocolate y Doblon (Americano)\n🟠 Muffins de Arándanos y crumble\n🟠 Muffins de Vainilla y Chips \n🟠 Muffins de Limón y Amapola \n🟠 Muffins de pizza  \n🟠 Muffins de tocino y queso \n🟠 Glasé de Naranja",
    "price": 60
  },
  {
    "id": 80,
    "title": "Negocios en Tendencias",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/negocios_en_tendencias.webp",
    "rawName": "negocios en tendencias.jpeg"
  },
  {
    "id": 81,
    "title": "Nutrición para Niños",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/nutrici_n_para_ni_os.webp",
    "rawName": "nutrición para niños.jpeg",
    "description": "🍪 Galletas de avena y plátano\n🥬 Pancakes de espinaca\n🍫 Cupcake de lenteja y chocolate\n🌾 Barritas de cereales nutritivos\n🧇 Wafles dulces de remolacha\n🍦 Helado de yogur y frutilla saludable\n🍭 Paletas heladas de chocolate y yogur",
    "price": 70
  },
  {
    "id": 82,
    "title": "Pacumutos y Brochetas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/pacumutos_y_brochetas.webp",
    "rawName": "pacumutos y brochetas.jpeg"
  },
  {
    "id": 83,
    "title": "Panadería con Queso",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panader_a_con_queso.webp",
    "rawName": "panadería con queso.jpeg",
    "description": "🧀 Queso Criollo Desde Cero\n🧀 Queque de Queso\n🥖 Pan con Queso Casero\n🥖 Empanadas de Queso\n🥖 Marraquetas de Leche con Queso\n🥖 Rollos Royal de Queso\n🥖 Rolls de Pizza",
    "price": 60
  },
  {
    "id": 84,
    "title": "Panadería sin Gluten",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/panaderia_sin_gluten.webp",
    "rawName": "Eliminar_contenido_de_pie_pagina_10960460.jpg",
    "description": "🥖 Pan de Semillas.\n🥖 Pan de Linaza.\n🥖 Pan de Hamburguesa de Almendras.\n🍞 Pan de Plátano Verde sin Gluten. \n🥨 Pretzel de Queso.\n📈 Presentación",
    "price": 70
  },
  {
    "id": 85,
    "title": "Panadería Vallegrandina",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panader_a_vallegrandina.webp",
    "rawName": "panadería vallegrandina.jpeg"
  },
  {
    "id": 86,
    "title": "Panes Caseros",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_caseros.webp",
    "rawName": "panes caseros.jpeg",
    "description": "🍞 Pan de mantequilla con queso\n🍞 Pan molde integral\n🍞 Pan con harina\n🍞 Pan de leche marraqueta\n🍞 Pan integral\n🍞 Cuernitos\n🍞 Rollito integral\n🍞 Empanadas de queso al horno de leche\n🍞 Empanadas integrales con semilla\n🍞 Pan mollete con dulce",
    "price": 60
  },
  {
    "id": 87,
    "title": "Panes Clasicos Bolivianos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_clasicos_bolivianos.webp",
    "rawName": "panes clasicos bolivianos.jpeg"
  },
  {
    "id": 88,
    "title": "Panes Dulces",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_dulces.webp",
    "rawName": "panes dulces.jpeg"
  },
  {
    "id": 89,
    "title": "Panes Económicos y Deliciosos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_econ_micos_y_deliciosos.webp",
    "rawName": "panes económicos y deliciosos.jpeg"
  },
  {
    "id": 90,
    "title": "Panes Nutritivos",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/panes_nutritivos.webp",
    "rawName": "panes nutritivos.jpeg",
    "description": "🥬 Pan de espinaca con quinua y semillas\n🍠 Pan molde de remolacha integral con garbanzo\n🎃 Pan de zapallo integral con avena\n🥕 Pan de zanahoria y camote\n🍯 Pan challah de miel, manzana y uvas pasas",
    "price": 70
  },
  {
    "id": 91,
    "title": "Paninis y Shawarmas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/paninis_y_shawarmas.webp",
    "rawName": "paninis y shawarmas.jpeg"
  },
  {
    "id": 92,
    "title": "Pasteles Especiales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/pasteles_especiales.webp",
    "rawName": "pasteles especiales.jpeg",
    "description": "🥮 Chocoflan Clásico.\n🥮 Chocoflan de Dulce de Leche.\n🥮 Flan Red Velvet con Naranja.\n🥮 Zingarella de Pera.\n🥮 Bizcochuelo de Vainilla.\n🥮 Bizcochuelo de Chocolate.\n🥮 Bizcochuelo de Red Velvet.\n🥮 Mix Para Decorar.\n🥮 Flanes.\n🥮 Decoraciones desde cero.",
    "price": 60
  },
  {
    "id": 93,
    "title": "Paves Brasileños",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/paves_brasile_os.webp",
    "rawName": "paves brasileños.jpeg"
  },
  {
    "id": 94,
    "title": "Platos para Kermesse",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/platos_para_kermesse.webp",
    "rawName": "platos para kermesse.jpeg"
  },
  {
    "id": 95,
    "title": "Postres Cremosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_cremosos.webp",
    "rawName": "postres cremosos.jpeg"
  },
  {
    "id": 96,
    "title": "Postres Deliciosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_deliciosos.webp",
    "rawName": "postres deliciosos.jpeg"
  },
  {
    "id": 97,
    "title": "Postres Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_helados.webp",
    "rawName": "postres helados.jpeg"
  },
  {
    "id": 98,
    "title": "Postres Helados",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/postres_helados.webp",
    "rawName": "postres helados.jpeg"
  },
  {
    "id": 99,
    "title": "Postres Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/postres_keto.webp",
    "rawName": "postres keto.jpeg"
  },
  {
    "id": 100,
    "title": "Postres Personales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_personales.webp",
    "rawName": "postres personales.jpeg",
    "description": "🍩 Bombitas\n🍫 Éclairs rellenos de pastelera\n🍓 Fresas con crema\n🍮 Mini chocoflan\n🥄 Cuchareable nido y flan\n🍫 Palet brownies\n🍩 Mini donuts\n🍥 Crema pastelera suave \n🍥 Crema nido \n🍬 Caramelo \n🍮 Flan casero\n🥯 Baño de mini donuts \n🍫 Baño de palet brownie",
    "price": 90
  },
  {
    "id": 101,
    "title": "Postres Porcionados Frutales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_porcionados_frutales.webp",
    "rawName": "postres porcionados frutales.jpeg"
  },
  {
    "id": 102,
    "title": "Postres Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/postres_saludables.webp",
    "rawName": "postres saludables.jpeg"
  },
  {
    "id": 103,
    "title": "Productos Congelados para Vender",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/productos_congelados_para_vender.webp",
    "rawName": "productos congelados para vender.jpeg",
    "description": "🥟 Conservación y empaquetado\n🥟 Coxinhas\n🥟 Kibes\n🥟 Cuñape rellenos\n🥟 Empanada de arroz\n🥟 Sonso\n🥟 Empanada de queso\n🥟 Empanada de pollo",
    "price": 60
  },
  {
    "id": 104,
    "title": "Productos Virales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/productos_virales.webp",
    "rawName": "productos virales.jpeg",
    "description": "🍰 Torta de merengue blando\n🎂 Dot cakes en tendencia\n🍓 Tiramisú coreano de frutos rojos\n🍫 Torta Matilda\n🍰 Merengue suave desde cero \n🍰 Masa de Dot cakes de colores \n🍰 Masa de chocolate\n🍰 Bizcochuelo de vainilla \n🍰 Crema de tiramisú \n🍰 Mermelada de frutos rojos \n🍰 Crema de chocolate matilda\n🍰 Crema de mantequilla dot cakes \n🍰 Salsa para humedecer\n🍰 Crema chantilly",
    "price": 90
  },
  {
    "id": 105,
    "title": "Queques Comerciales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_comerciales.webp",
    "rawName": "queques comerciales.jpeg"
  },
  {
    "id": 106,
    "title": "Queques Crumble",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_crumble.webp",
    "rawName": "queques crumble.jpeg"
  },
  {
    "id": 107,
    "title": "Queques Especiales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_especiales.webp",
    "rawName": "queques especiales.jpeg"
  },
  {
    "id": 108,
    "title": "Queques Nutritivos",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/queques_nutritivos.webp",
    "rawName": "queques nutritivos.jpeg"
  },
  {
    "id": 109,
    "title": "Queques sin Gluten y sin Azúcar",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/queques_sin_gluten_y_sin_az_car.webp",
    "rawName": "queques sin gluten y sin azúcar.jpeg",
    "description": "🥮 Queque de chocolate sin gluten y sin azúcar.\n🥮 Queque de Coco y yogur sin gluten y sin azúcar.\n🥮 Queque marmolado sin gluten y sin azúcar.\n🥮 Queque de Cítricos y frutos rojos sin gluten y sin azúcar.\n🥮 Cremas sin gluten y sin azúcar.",
    "price": 70
  },
  {
    "id": 110,
    "title": "Recetas de la Abuela",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/recetas_de_la_abuela.webp",
    "rawName": "Recetas de la abuela.jpeg",
    "description": "🍊 Queque de naranja y licor con baño de mantequilla\n🌰 Queque de almendras y uvas pasas con baño de turron de merengue\n🍞 Budín de pan clásico\n🍍 Queque de piña volteado\n🍮 Flan casero de leche crema (de antaño)\n🍰 Baño de mantequilla de antaño \n🍰 Merengue italiano para decorar \n🍰 Caramelo para budin y leche Crema",
    "price": 70
  },
  {
    "id": 111,
    "title": "Reposteria Sin Azúcar",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/reposteria_saludable.webp",
    "rawName": "reposteria Sin Azúcar.jpeg"
  },
  {
    "id": 112,
    "title": "Roles Gigantes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/roles_gigantes.webp",
    "rawName": "roles gigantes.jpeg",
    "description": "🍥 Rolls Gigante Clásico de Canela.\n🍥 Rolls Gigante de Frutilla\n🍥 Rolls Gigante de Oreo.\n🍥 Rolls Gigante de Chocolate y nutella \n🍥 Rolls Gigante de Doblon\n🍥 Rolls Gigante Nido \n🍥 Baño de queso crema\n🍥 Baño de chocolate y queso crema \n🍥 Mermelada de Frutilla casera \n🍥 Crema de oreo\n🍥 Crema de chocolate",
    "price": 70.05
  },
  {
    "id": 113,
    "title": "Salsas y Aderezos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/salsas_y_aderezos.webp",
    "rawName": "salsas y aderezos.jpeg"
  },
  {
    "id": 114,
    "title": "Salteñas Especiales",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/salte_as_especiales.webp",
    "rawName": "salteñas especiales.jpeg"
  },
  {
    "id": 115,
    "title": "Sándwiches Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/s_ndwiches_helados.webp",
    "rawName": "sándwiches helados.jpeg"
  },
  {
    "id": 116,
    "title": "Slice Cake Brasileños",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/slice_cake_brasile_os.webp",
    "rawName": "slice cake brasileños.jpeg",
    "description": "🍰 Slice Cakes Chocolate y Morango\n🍰 Slice Napolitano 3 amores\n🍰 Slice de Limón y Frutos Rojos\n🍰 Slice Cakes Red Velvet Nido\n🍰 Slice Cakes de Oreo\n🍰 Slice Cakes Doble Chocolate\n🍰 Masa de chocolate\n🍰 Masa Red Velvet\n🍰 Masa de limón\n🍰 Masa de Oreo\n🍰 Crema de brigadeiro de chocolate negro\n🍰 Mermelada de frutos rojos\n🍰 Crema de chocolate pudín brasileño\n🍰 Crema de morango (fresa) pudín brasileño\n🍰 Crema de limón pudín brasileño\n🍰 Crema de Nido pudín brasileño\n🍰 Crema de queso crema\n🍰 Brigadeiro de coco\n🍰 Brigadeiro de chocolate\n🍰 Salsa para humedecer",
    "price": 90
  },
  {
    "id": 117,
    "title": "Snack Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/snack_saludables.webp",
    "rawName": "snack saludables.jpeg"
  },
  {
    "id": 118,
    "title": "Snacks Deliciosos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/snacks_deliciosos.webp",
    "rawName": "snacks deliciosos.jpeg"
  },
  {
    "id": 119,
    "title": "Snacks Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/snacks_saludables.webp",
    "rawName": "snacks saludables.jpeg"
  },
  {
    "id": 120,
    "title": "Stuffed Cookies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/stuffed_cookies_2.webp",
    "rawName": "Eliminar_pie_de_página_00a81406.jpg",
    "description": "🍪 Cookies New York Rellenas de Nutella.\n🍪 Cookies De Chocolate Blanco.\n🍪 Cookies Red Velvet Rellenas de Cheesecakes.\n🍪 Cookies de chocolate intenso.\n🍪 Cookies de Oreo.\n🍪 Crema chessecakes",
    "price": 60
  },
  {
    "id": 121,
    "title": "Sushimanía",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/sushiman_a.webp",
    "rawName": "sushimanía.jpeg"
  },
  {
    "id": 122,
    "title": "Tacos Mexicanos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/tacos_mexicanos.webp",
    "rawName": "tacos mexicanos.jpeg",
    "description": "🌮 Tortillas clásicas.\n🌮 Tortillas XL.\n🌮 Quesadillas.\n🌮 Nachos desde cero.\n🌮 Nachos supremos.\n🌮 Burritos.\n🌮 Agua de horchata.\n🌮 Guacamole.\n🌮 Salsa Agría.\n🌮 Pico de gallo.\n🌮 Salsa de cilantro.\n🌮 Salsa guacamole \n🌮 Salsa de frijol refrito \n🌮 Salsa de Carne \n🌮 Salsa cheddar para nachos",
    "price": 60
  },
  {
    "id": 123,
    "title": "Tarde de Cinnamons",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tarde_de_cinnamons.webp",
    "rawName": "tarde de cinnamons.jpeg"
  },
  {
    "id": 124,
    "title": "Tartaletas y Pays",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tartaletas_y_pays.webp",
    "rawName": "tartaletas y pays.jpeg",
    "description": "🥧 Masa de vainilla de Tartaletas\n🥧 Masa de chocolate de Tartaletas\n🥧 Tartaleta de Lemon pie \n🥧 Tartaleta de Maracuyá \n🥧 Tartaleta de chocolate \n🥧 Tartaleta de manzana trenzada \n🥧 Tartaleta de banoffe de Banana \n🥧 Tartaleta frutal \n🥧 Tarlaleta de frutilla \n🥧 Tartaleta de durazno \n🥧 Merengue Italiano \n🥧 Crema chantilly\n🥧 Ganache de chocolate \n🥧 Brillo para frutas \n🥧 Crema mousse de Maracuyá\n🥧 Crema mousse de chocolate \n🥧 Crema pastelera vainilla \n🥧 Crema mousse limón \n🥧 Relleno especiado de manzana",
    "price": 70
  },
  {
    "id": 125,
    "title": "Tartamania",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tartamania.webp",
    "rawName": "tartamania.jpeg"
  },
  {
    "id": 126,
    "title": "Tendencias Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tendencias_saludables.webp",
    "rawName": "tendencias saludables.jpeg",
    "description": "🍓 Fresas con crema saludable\n🍋 Lemon Pie saludable\n🍩 Donuts saludables\n🍮 Flan casero saludable\n🍫 Bombones chicocos saludables rellenos sin azúcar (desde cero)\n🎂 Torta de merengue saludable\n🥤 Frappuccino saludable\n🥛 Leche condensada sin azúcar\n☁️ Crema chantilly sin azúcar\n🍪 Masa de vainilla para tarta\n🍫 Ganache de chocolate\n🍯 Caramelo sin azúcar\n☁️ Merengue desde cero saludable\n🌰 Leche de almendras casera",
    "price": 90
  },
  {
    "id": 127,
    "title": "Tiramisus Coreanos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tiramisus_coreanos.webp",
    "rawName": "tiramisus coreanos.jpeg",
    "description": "🍮 Tiramisú coreano de Maracuyá\n🍮 Tiramisú coreano de Frutilla\n🍮 Tiramisú coreano de oreo\n🍮 Tiramisú clásico de café\n🍮 Galletas champagne caseras\n🍮 Bizcochuelo para tiramisú\n🍮 Jalea de frutilla \n🍮 Jalea de maracuya \n🍮 jalea de chocolate\n🍮 Rellenos cremosos\n🍮 Salsas para humedecer",
    "price": 70
  },
  {
    "id": 128,
    "title": "Tortas Aflanadas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_aflanadas.webp",
    "rawName": "tortas aflanadas.jpeg",
    "description": "👼 Torta aflanada Beso de Ángel\n🍓 Torta Aflanada de Frutilla\n🍫 Torta Cheesecakes de Chocolate\n🍋 Torta Cheesecakes de Limón\n🍮 Masa de chocolate \n🍮 Masa de vainilla\n🍮 Masa de frutilla \n🍮 Crema de limon \n🍮 Relleno de cheesecakes \n🍮 Flan casero\n🍮 Frutillas do amor caramelizada \n🍮 Jalea de frutilla \n🍮 Pastelera de vainilla\n🍮 Crema chantilly  -  Mix de crema \n🍮 Merengue Italiano \n🍮 Salsa 3 leches para humedecer\n🍮 Fudge de Chocolate",
    "price": 90
  },
  {
    "id": 129,
    "title": "Tortas de la Abuela",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_de_la_abuela.webp",
    "rawName": "tortas de la abuela.jpeg"
  },
  {
    "id": 130,
    "title": "Tortas de Temporada",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_de_temporada.webp",
    "rawName": "tortas de temporada.jpeg"
  },
  {
    "id": 131,
    "title": "Tortas Desnudas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_desnudas.webp",
    "rawName": "tortas desnudas.jpeg"
  },
  {
    "id": 132,
    "title": "Tortas Económicas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_econ_micas.webp",
    "rawName": "tortas económicas.jpeg"
  },
  {
    "id": 133,
    "title": "Tortas en Vaso",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_en_vaso.webp",
    "rawName": "tortas en vaso.jpeg"
  },
  {
    "id": 134,
    "title": "Tortas Florales para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_florales_para_mam.webp",
    "rawName": "tortas florales para mamá.jpeg"
  },
  {
    "id": 135,
    "title": "Tortas Frutales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_frutales.webp",
    "rawName": "tortas frutales.jpeg"
  },
  {
    "id": 136,
    "title": "Tortas Heladas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_heladas.webp",
    "rawName": "tortas heladas.jpeg",
    "description": "🎂 Torta helada de maracuyá y vainilla \n🎂 Torta helada cassata \n🎂 Torta helada de frutos rojos y vainilla \n🎂 Torta helada de dulce de leche y chocolate \n🎂 Torta helada de oreo \n🍨 Helados especiales artesanales desde cero para tortas sin maquinas \n🍨 Masa de vainilla para torta helada.\n🍨 Masa de Chocolate para torta helada.\n🍨 Crema mix de crema\n🍨 Ganache de chocolate \n🍨 Decoraciones de las tortas  y armados\n🍨 Chococonos \n🍨 Paletas de helado bañada en chocolate \n🍨 Salsa para humedecer",
    "price": 90
  },
  {
    "id": 137,
    "title": "Tortas Heladas Saludables",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_heladas_saludables.webp",
    "rawName": "tortas heladas saludables.jpeg"
  },
  {
    "id": 138,
    "title": "Tortas Heladas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_heladas_saludables.webp",
    "rawName": "tortas heladas saludables.jpeg"
  },
  {
    "id": 139,
    "title": "Tortas para la Tarde",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_para_la_tarde.webp",
    "rawName": "tortas para la tarde.jpeg"
  },
  {
    "id": 140,
    "title": "Tortas Pinterest para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_pinterest_para_mam.webp",
    "rawName": "tortas pinterest para mamá.jpeg",
    "description": "🍰 Masa 4x4 almendras y uvas pasas empapadas en Ron\n🍰 Masa 4x4 de Naranja y cítricos\n🍰 Relleno pastelera de naranja y limón \n🍰 Crema pastelera clásica de vainilla \n🍰 Buttercream con queso crema \n🍰 Mermelada de frutos rojos casera \n🍰 Mermelada de durazno casera\n🍰 Almíbar de naranja, canela y vino\n🍰 Crema de mantequilla sedosa de colores para decorar\n🍰 Decoración de las tortas en taza pinterest",
    "price": 70
  },
  {
    "id": 141,
    "title": "Tortas Porcionadas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_porcionadas_saludables.webp",
    "rawName": "tortas porcionadas saludables.jpeg",
    "description": "🍫 Torta saludable de chocolate y maracuyá\n🥥 Torta saludable de coco, limón y arándanos\n🍮 Torta saludable de puding y flan\n🥛 Leches vegetales caseras\n🍰 Masa sin gluten y sin azúcar de vainilla \n🍰 Masa sin gluten y sin azúcar de chocolate \n🍰 Masa sin gluten y sin azúcar de coco\n🥭 Crema de Maracuyá cremosa sin azúcar\n🍫 Crema mousse de chocolate sin azúcar \n🍋 Crema de limón sin azúcar \n☁️ Crema chantilly para decorar sin azúcar \n🍮 Crema puding sin azúcar \n🥥 Leche vegetal casera de Coco \n🌰 Leche vegetal casera de almendras\n🍮 Flan casero sin azúcar \n🥥 Relleno cremoso se coco \n🫐 Mermelada de arándanos",
    "price": 90
  },
  {
    "id": 142,
    "title": "Tortas Virales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_virales.webp",
    "rawName": "tortas virales.jpeg",
    "description": "🎂 Torta rectangular floral \n🎂 Torta Domo \n🎂 Masa de frutos rojos y limon \n🎂 Masa marmolada vainilla y chocolate \n🎂 Relleno de Crema de limon \n🎂 Relleno crema de frutos rojos \n🎂 Mermelada de Frambuesa, mora y naranja \n🎂 Buttercream resistente al calor  \n🎂 Relleno Crema de oreo \n🎂 Relleno de queso crema\n🎂 Salsa de leche para humedecer\n🎂 Decoraciones de las tortas",
    "price": 70
  },
  {
    "id": 143,
    "title": "Tortastortas Rápidas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortastortas_r_pidas.webp",
    "rawName": "tortastortas rápidas.jpeg",
    "description": "🍰 Torta húmeda de durazno y dulce de leche \n🍰 Torta de chocolate con Fudge de chocolate \n🍰 Torta de coco con crema especial de coco \n🍰 Masa de coco \n🍰 Masa de chocolate\n🍰 Masa chifonada de vainilla \n🍰 Salsa de leche especiada para humedecer clásica y de coco \n🍰 Relleno fudge de chocolate \n🍰 Crema chantilly extra cremosa \n🍰 Mix de crema para decorar",
    "price": 70
  },
  {
    "id": 144,
    "title": "Variedades de Arroz",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/variedades_de_arroz.webp",
    "rawName": "variedades de arroz.jpeg"
  },
  {
    "id": 145,
    "title": "Variedades de Ensaladas",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/variedades_de_ensaladas.webp",
    "rawName": "variedades de ensaladas.jpeg"
  },
  {
    "id": 146,
    "title": "Bocaditos para Eventos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/bocaditos_para_eventos.webp",
    "rawName": "bocaditos para eventos.jpeg",
    "description": "🍔 Mini Hamburguesa.\n🍔 Mini Panini de Pollo.\n🍗Alitas Teriyakis.\n🍗Bolitas de Carne.\n🍗Mini Pizza.\n🍗Brochetas de Carne.\n🍗Brochetas de pollo con verduras.\n🥖 Mini pan de panini \n🥖 Mini pan de hamburguesa \n🫕 Salsa de pizza casera\n🍕 Masa de mini pizzas",
    "price": 90
  },
  {
    "id": 147,
    "title": "Comida Casera",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_casera.webp",
    "rawName": "comida casera.jpeg"
  },
  {
    "id": 148,
    "title": "Mundo Pastas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/mundo_pastas.webp",
    "rawName": "mundo pastas.jpeg"
  },
  {
    "id": 149,
    "title": "Mundo Pizza",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/mundo_pizza.webp",
    "rawName": "mundo pizza.jpeg"
  },
  {
    "id": 150,
    "title": "Masas Hojaldradas Deliciosas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masas_hojaldradas_deliciosas.webp",
    "rawName": "masas hojaldradas deliciosas.jpeg"
  },
  {
    "id": 151,
    "title": "Masitas para el Té",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masitas_para_el_te.webp",
    "rawName": "masitas para el té.jpeg"
  },
  {
    "id": 152,
    "title": "Panes de Todos Santos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_de_todos_santos.webp",
    "rawName": "panes de todos santos.jpeg"
  },
  {
    "id": 153,
    "title": "Snack, Postres y Refrescos Típicos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/snack_postres_y_refrescos_tipicos.webp",
    "rawName": "snack postres y refrescos tipicos.jpeg"
  },
  {
    "id": 154,
    "title": "Desayuno para Papá",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/desayuno_para_papa.webp",
    "rawName": "desayuno para papá.jpeg",
    "description": "🦸🏻‍♂️ Armado y Decorado de Bandejas.\n🦸🏻‍♂️ Sándwich de Foccacia Rápida.\n🦸🏻‍♂️ Relleno de Cerdo Adobado\n🦸🏻‍♂️ Jugo de Naranja Fresco.\n🦸🏽‍♂️ Frapuchino con Crema.\n🦸🏽‍♂️ Panini de Peceto con Cebollas Caramelizada.\n🦸🏽‍♂️ Torta en Vaso de Amarula Casero\n🦸🏽‍♂️ Pancakes de Banana con Miel y Frutas.\n🦸🏼‍♂️ Ensalada de Frutas Tropical.\n🦸🏼‍♂️ Pan de Focaccia Rápido \n🦸🏼‍♂️ Pan de Panini\n🦸🏼‍♂️ Crema Chantilly \n🦸🏿‍♂️ Salsa de Cebolla Caramelizada \n🦸🏿‍♂️ Bizcochuelo de Vainilla\n🦸🏿‍♂️ Amarula Casero \n🦸🏿‍♂️ Pecetos Adobado.\n🦸🏿‍♂️ Mayonesa de Miel y Mostaza",
    "price": 70
  },
  {
    "id": 155,
    "title": "Frappes y Smoothies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/frappes_y_smoothies_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (1).jpeg",
    "description": "🧋 Frapuchino (frappuccino) ☕ \n🧋 Mockachino 🍫\n🥛 Frappe de Frutilla 🍓 \n🥛 Smoothies tropical de Mango Maracuyá 🥭 \n🥛 Smoothie Piña Coloda 🍍 \n🧋 Frappe de Oreo 🍫\n🧋 Frappe mágnum Goloso 🍬 \n🍫 Brownie Americano \n🍫 Mix de Crema\n🍫 Ganache de chocolate\n🍫 Palets cakes de brownie",
    "price": 70
  },
  {
    "id": 156,
    "title": "Habanitos Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/habanitos_helados.webp",
    "rawName": "habanitos helados.jpeg"
  },
  {
    "id": 157,
    "title": "Helados Artesanales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/helados_artesanales.webp",
    "rawName": "helados artesanales.jpeg"
  },
  {
    "id": 158,
    "title": "Masas Esponjosas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/masas_esponjosas.webp",
    "rawName": "masas esponjosas.jpeg"
  },
  {
    "id": 159,
    "title": "Mundo Merengón",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_merengon.webp",
    "rawName": "mundo merengon.jpeg"
  },
  {
    "id": 160,
    "title": "Postres Económicos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_economicos.webp",
    "rawName": "postres economicos.jpeg"
  },
  {
    "id": 161,
    "title": "Postres Fríos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_frios.webp",
    "rawName": "postres frios.jpeg"
  },
  {
    "id": 162,
    "title": "Tarde de Queques Mantequillosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tarde_de_queques_mantequillosos.webp",
    "rawName": "tarde de queques mantequillosos.jpeg",
    "description": "🧈 Queque de manzana y nuez con crumble de avena\n🧈 Queque de banana y caramelo.\n🧈 Queque de zanahoria, especias y piña.\n🧈 Queque de chocolate y dulce de leche.\n🧈 Queque de arándanos y naranja.\n🧈 Crumble de avena casero.\n🧈 Crumble clásico\n🧈 Caramelo casero.",
    "price": 60
  },
  {
    "id": 163,
    "title": "Comida de Catering",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_de_catering.webp",
    "rawName": "comida de catering.jpeg"
  },
  {
    "id": 164,
    "title": "Mermeladas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/mermeladas_saludables.webp",
    "rawName": "mermeladas saludables.jpeg"
  },
  {
    "id": 165,
    "title": "Pastelería con Avena",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/pasteleria_con_avena.webp",
    "rawName": "pasteleria con avena.jpeg"
  },
  {
    "id": 166,
    "title": "Smoothies, Kéfir y Shots Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/smoothies_kefir_y_shots_saludables.webp",
    "rawName": "smoothies kefir y shots saludables.jpeg"
  },
  {
    "id": 167,
    "title": "Tartas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tartas_saludables.webp",
    "rawName": "tartas saludables.jpeg"
  },
  {
    "id": 168,
    "title": "Tortas Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_keto.webp",
    "rawName": "tortas keto.jpeg",
    "description": "🍰 Torta de frutos rojos keto\n🍰 Torta de coco keto \n🍰 Torta de chocolate low carb \n🍰 Torta de Maracuyá low carb\n🍰 Masa de chocolate keto \n🍰 Masa de coco keto\n🍰 Mousse de Maracuyá low carb\n🍰 Crema pastelera de chocolate low carb\n🍰 Crema pastelera de Maracuyá low carb \n🍰 Salsa tres leches keto \n🍰 Almíbar especiado sin azúcar \n🍰 Crema de coco low carb\n🍰 Mermelada frutos rojos sin azúcar  \n🍰 Crema chantilly keto\n🍰 Crema de frutos rojos \n🍰 Ganache de chocolate keto\n🍰 Jalea de Maracuyá sin azúcar\n🍰 Armados de tortas \n🍰 Decoración de tortas",
    "price": 90
  },
  {
    "id": 169,
    "title": "Especial para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/especial_para_mama.webp",
    "rawName": "especial para mamá.jpeg"
  },
  {
    "id": 170,
    "title": "Comidas Alto Gourmet",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_alto_gourmet_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16.jpeg",
    "description": "🥩 Lomito albardado con salsa cremosa a las pimientas\n🍷 Rollos de chancho a la ciruela con salsa de vino\n🍗 Supremas de pollo con salsa blanca\n🍛 Pollo al curry\n🍚 Arroz gourmet\n🥔 Puré cremoso Aromático\n🥟 Bolsitas de crepes y verduras\n🥕 Verduritas salteadas\n🫕 Salsa blanca \n🫕 Salsa de vino semi dulce\n🫕 Salsa de ciruelas\n🫕 Salsa a las pimientas \n✨ Salsas gourmet y técnicas de presentación\n🥘 Relleno salteado sabroso",
    "price": 90
  },
  {
    "id": 171,
    "title": "Mesa Dulce Para Eventos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mesa_dulce_para_eventos_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (5).jpeg",
    "description": "🍓 Niditos de pavlova y frutos rojos\n🥄 Vasitos de cheesecakes\n🍫 Mini brownies de eventos\n🍓 Mini vasito de tres leches de frutilla\n🍋 Mini suspiro limeño\n🍰 Mini tortita de mesa\n🧁 Mini cupcakes de morango\n🎀 Decoraciones y presentación profesional\n🍒 Reducción de frutos rojos \n🥛 Crema chantilly \n🫕 Salsa tres leches al licor \n🍥 Merengue suizo \n🥮 Masa de torta de vainilla y limón \n🫐 Buttercream de morango y vainilla",
    "price": 90
  },
  {
    "id": 172,
    "title": "Tortas Soufles Chifonadas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_soufles_chifonadas_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.13 (1).jpeg",
    "description": "🍰 Torta Soufflé de Chantilly\n🍓 Torta Soufflé de Frutilla\n🍑 Torta Soufflé de Durazno\n❄️ Torta Soufflé Helada de Merengue y Chirimoya\n🎂 Masas chifonadas\n🥛 Rellenos cremosos\n☁️ Merengue esponja para relleno\n🍮 Cremas y técnicas de armado\n🍰 Crema chantilly \n🍰 Masa chifonada de vainilla\n🍰 Masa chifonada de frutilla \n🍰 Crema diplamata de vainilla\n🍰 Crema diplomata de frutilla\n🍰 Crema suave de dulce de leche \n🍰 Salsa de 3 leches y licor para humedecer \n🍰 Crema de chirimoya \n🍰 Mix de crema",
    "price": 90
  },
  {
    "id": 173,
    "title": "Galletas Y Alfajores Navideños",
    "category": "Navideños",
    "categorySlug": "navidenos",
    "image": "images/navidenos/galletas_y_alfajores_navidenos_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (3).jpeg",
    "description": "🎄 Galletas decoradas navideñas\n🍫 Alfajores navideños con baño de chocolate\n🏠 Casa de galleta de jengibre\n⭐ Arbolitos navideños decorados con galletas colgantes comestibles\n🍪 Mix de distintos tipos de galletas de manga\n🍓 Galletas con mermeladas\n🥜 Pepitas tradicionales\n🎨 Glaséado real blanco\n🎨 Glaséado de colores\n🍪 Decoraciones de galletas",
    "price": 80
  },
  {
    "id": 174,
    "title": "Postres Con Coco",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_con_coco_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (8).jpeg",
    "description": "🥥 Queque volcán de coco\n🍮 Flan brasileño de coco y salsa de ciruelas\n🥛 Leche de coco artesanal\n🍫 Brigadeiros de coco\n🍰 Brazo gitano de coco\n🥥 Torta en vaso de coco\n☁️ Tres leches de coco\n🍪 Cocadas.\n🎂 Masas, rellenos, armados y más",
    "price": 90
  },
  {
    "id": 175,
    "title": "Queques Navideños",
    "category": "Navideños",
    "categorySlug": "navidenos",
    "image": "images/navidenos/queques_navidenos_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.13.jpeg",
    "description": "🍊 Queque abrillantado\n🍫 Queque de chocolate y vino especiado\n🥕 Queque de especias y zanahoria\n❄️ Rosca nevada de naranja\n❤️ Queque Red Velvet pintado con cobertura de porcelana\n🍯 Baños y glaseados especiales\n🎄 Decoraciones navideñas.\n🎅🏻 Cobertura de Porcelana comestible para pintar \n🎅🏻 Glasé de citricos para queques\n🎅🏻 Baño de Queso crema y chocolate blanco \n🎅🏻 Ganache de chocolate y dulce de leche especiado",
    "price": 70
  },
  {
    "id": 176,
    "title": "Sabores Congelados",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/sabores_congelados_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.14.jpeg",
    "description": "🍗 Milanesas de pollo y carne\n🍕 Pre pizzas comerciales desde la masa\n🍔 Hamburguesas caseras\n🍝 Lasaña de carne\n🍗 Nuggets de pollo\n🍟 Papas fritas precocidas\n🥔 Yuca frita\n🔥 Alitas adobadas\n🍕 Masa de pizza con conservante\n🍕 Salsa de pizza\n📦 Técnicas de envasado y conservación",
    "price": 90
  },
  {
    "id": 177,
    "title": "Pannetones Trufados Brasileños",
    "category": "Navideños",
    "categorySlug": "navidenos",
    "image": "images/navidenos/pannetones_trufados_brasilenos_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (6).jpeg",
    "description": "🎄 Panettone abrillantado\n🍫 Chocotone clásico\n💚 Panettone trufado de pistacho\n🍫 Panettone trufado de chocolate dúo\n🍫 Panettone de Kit Kat y Brigadeiro\n🥛 Panettone Nido\n🍓 Panettone de Morango Cravejado do Amor\n🎄 Crema relleno de pistacho \n🍫 Ganache de pistacho \n🍫 Crema brigadeiro \n🥛 Crema nido \n🍓 Mermelada de Frutilla artesanal\n🍫 Baño do amor cravejado do amor \n🍫 Baños de Chocolates\n🍫 Brigadeiros de chocolate",
    "price": 90
  },
  {
    "id": 178,
    "title": "Masas Navideñas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/masas_navidenas_saludables_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (4).jpeg",
    "description": "🍫 Panettone saludable\n🍫 Chocotonne saludable.\n🍫 Budín navideño con glasé sin azúcar.\n🍫 Brownie saludable.\n🥛 Leche de almendras.\n🧁 Cupcakes saludables.\n🍪 Galletas de jengibre sin gluten y sin azúcar.\n🫙Leche condensada sin azúcar \n🍃 Presentaciones",
    "price": 90
  },
  {
    "id": 179,
    "title": "Frutas Realistas En 3D",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/frutas_realistas_en_3d_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (2).jpeg",
    "description": "🍋 Limón realista\n🍓 Frambuesa 3D realista\n🍓 Frutilla en 3D realista\n🥭 Mango en 3D\n🍌 Banana 3D\n🍋 Relleno Confit de limón\n🥭 Relleno Confit de Mango\n🍇 Relleno Confit de Frambuesa\n🍌 Relleno Confit de Banana y Caramelo\n🍓 Relleno Confit de Frutilla\n🍦 Crema Mousse de Vainilla y Queso Crema\n🎨 Baños de Chocolate Suave en Distintos Colores\n🍪 Galleta Base para Frutas Realistas\n🖌️ Técnicas de Colorimetría y Decoración de Frutas Realistas\n🌡️ Temperaturas, Cuidados y Procesos de Frutas Realistas",
    "price": 120
  },
  {
    "id": 180,
    "title": "Comida Para Eventos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_para_eventos_2.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.15.jpeg",
    "description": "🥩 Peceto relleno a la Coca Cola\n🍚 Arroz a la valenciana\n🍗 Enrollado de pollo entero\n🥩 Costillas de chancho crocantes con salsa de cerveza\n🥔 Papitas al ajillo\n🥗 Ensalada de manzana\n🌽 Ensalada de choclo\n🫒 Arroz al olivo\n🍄 Salsa de champiñones",
    "price": 90
  },
  {
    "id": 181,
    "title": "Piononos Navideños",
    "category": "Navideños",
    "categorySlug": "navidenos",
    "image": "images/navidenos/piononos_navidenos.webp",
    "rawName": "WhatsApp Image 2026-11-19 at 15.36.16 (7).jpeg",
    "description": "✨ Aprenderás desde cero:\n🎄 Tronco Navideño\n❤️ Pionono Red Velvet\n🎨 Pionono Especiado Estampado Navideño\n🥪 Brazo Gitano Salado para Compartir\n🍰 Masas profesionales para piononos\n🍮 Rellenos cremosos\n🍦 Cremas para decoración y acabado\n✨ Técnicas de decoración navideña",
    "price": 69.99
  },
  {
    "id": 182,
    "title": "Tortas Heladas Argentinas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_heladas_argentinas.webp",
    "description": "🍦 Torta Helada Clásica\n🥭 Torta Helada de Mango\n🍓 Torta Helada de Frutilla y Merengue\n🍫 Torta Helada Chocotorta\n🍋 Torta de Lemon Pie\n☁️ Merengues\n🍮 Cremas especiales para tortas heladas\n🥭 Mermelada de Mango \n🍓 Mermelada de Frutilla \n🍫Ganache de chocolate \n🍥 Mix de crema para decorar",
    "price": 80,
    "rawName": "Quitar_precio_y_fecha_del_b541252b.jpg"
  },
  {
    "id": 183,
    "title": "Tendencias de Fin de Año",
    "category": "Navideños",
    "categorySlug": "navidenos",
    "image": "images/navidenos/tendencias_de_fin_de_ano.webp",
    "description": "☁️ Torta Nube Brasileña.\n🍎 Manzana y Frutilla Acaramelada.\n🍪 Galleta de Jengibre.\n🎄 Panetón Comercial.\n❄️ Glasé Real para Galletas.\n🍫 Esferas de Chocolate.\n🎁 Bombones Navideños.\n🎨 Decoraciones Navideñas.\n🍫 Masa de chocolate húmeda para torta nube \n🍫 Relleno suave de chocolate para torta nube \n☁️ Crema nube Brasileña",
    "price": 90,
    "rawName": "Quitar_precio_y_fecha_del_9a6e9d77.jpg"
  }
];
