// Catálogo de Cursos - 9no Aniversario La Martina
// Total cursos: 173
const COURSES_DATA = [
  {
    "id": 1,
    "title": "3 Leches Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/3_leches_saludables.webp",
    "rawName": "3 leches saludables.jpeg"
  },
  {
    "id": 2,
    "title": "Alfajores Novedosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/alfajores_novedosos.webp",
    "rawName": "alfajores novedosos.jpeg"
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
    "rawName": "bolos frutales y heladitos de leche.jpeg"
  },
  {
    "id": 6,
    "title": "Bolos Gourmet",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bolos_gourmet.webp",
    "rawName": "bolos gourmet.jpeg"
  },
  {
    "id": 7,
    "title": "Brazo Gitano",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brazo_gitano.webp",
    "rawName": "brazo gitano.jpeg"
  },
  {
    "id": 8,
    "title": "Brigadeiros Gourmet",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brigadeiros_gourmet.webp",
    "rawName": "brigadeiros gourmet.jpeg"
  },
  {
    "id": 9,
    "title": "Brownies Blondies y Brookies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/brownies_blondies_y_brookies.webp",
    "rawName": "brownies blondies y brookies.jpeg"
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
    "rawName": "bufet brunch para la tarde.jpeg"
  },
  {
    "id": 12,
    "title": "Bundt Cakes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/bundt_cakes.webp",
    "rawName": "bundt cakes.jpeg"
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
    "rawName": "cheesecakes al horno.jpeg"
  },
  {
    "id": 15,
    "title": "Cheesecakes Al Horno",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cheesecakes_al_horno.webp",
    "rawName": "cheesecakes al horno.jpeg"
  },
  {
    "id": 16,
    "title": "Cheesecakes para Eventos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/cheesecakes_para_eventos.webp",
    "rawName": "cheesecakes para eventos.jpeg"
  },
  {
    "id": 17,
    "title": "Cheesecakesmanía",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cheesecakesman_a.webp",
    "rawName": "cheesecakesmanía.jpeg"
  },
  {
    "id": 18,
    "title": "Choco Bites",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/choco_bites.webp",
    "rawName": "choco bites.jpeg"
  },
  {
    "id": 19,
    "title": "Choripanes por el Mundo",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/choripanes_por_el_mundo.webp",
    "rawName": "Choripanes por el mundo.jpeg"
  },
  {
    "id": 20,
    "title": "Chunk Cakes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/chunk_cakes.webp",
    "rawName": "chunk cakes.jpeg"
  },
  {
    "id": 21,
    "title": "Comida Brasilera",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_brasilera.webp",
    "rawName": "comida brasilera.jpeg"
  },
  {
    "id": 22,
    "title": "Comida China",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_china.webp",
    "rawName": "comida china.jpeg"
  },
  {
    "id": 23,
    "title": "Comida Peruana",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_peruana.webp",
    "rawName": "comida peruana.jpeg"
  },
  {
    "id": 24,
    "title": "Comida Rapida Comercial",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_rapida_comercial.webp",
    "rawName": "comida rapida comercial.jpeg"
  },
  {
    "id": 25,
    "title": "Comida Rapida Saludable",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_rapida_saludable.webp",
    "rawName": "comida rapida saludable.jpeg"
  },
  {
    "id": 26,
    "title": "Comida Saludable Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_saludable_keto.webp",
    "rawName": "comida saludable keto.jpeg"
  },
  {
    "id": 27,
    "title": "Comida Vegetariana",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_vegetariana.webp",
    "rawName": "comida vegetariana.jpeg"
  },
  {
    "id": 28,
    "title": "Comidas Deliciosas con Chancho",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_deliciosas_con_chancho.webp",
    "rawName": "comidas deliciosas con chancho.jpeg"
  },
  {
    "id": 29,
    "title": "Comidas Economicas y Saludables",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comidas_economicas_y_saludables.webp",
    "rawName": "comidas economicas y saludables.jpeg"
  },
  {
    "id": 30,
    "title": "Comidas Economicas y Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comidas_economicas_y_saludables.webp",
    "rawName": "comidas economicas y saludables.jpeg"
  },
  {
    "id": 31,
    "title": "Comita Tipica Cruceña",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comita_tipica_cruce_a.webp",
    "rawName": "comita tipica cruceña.jpeg"
  },
  {
    "id": 32,
    "title": "Cremas y Rellenos",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/cremas_y_rellenos.webp",
    "rawName": "cremas y rellenos.jpeg"
  },
  {
    "id": 33,
    "title": "Crumble Buns",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/crumble_buns.webp",
    "rawName": "crumble buns.jpeg"
  },
  {
    "id": 34,
    "title": "Cuchareables",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/cuchareables.webp",
    "rawName": "cuchareables.jpeg"
  },
  {
    "id": 35,
    "title": "Cuchareables Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/cuchareables_saludables.webp",
    "rawName": "cuchareables saludables.jpeg"
  },
  {
    "id": 36,
    "title": "Delicias Típicas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/delicias_t_picas.webp",
    "rawName": "delicias típicas.jpeg"
  },
  {
    "id": 37,
    "title": "Desayunos para Emprender",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/desayunos_para_emprender.webp",
    "rawName": "desayunos para emprender.jpeg"
  },
  {
    "id": 38,
    "title": "Donuts Rellenos Especiales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/donuts_rellenos_especiales.webp",
    "rawName": "donuts rellenos especiales.jpeg"
  },
  {
    "id": 39,
    "title": "Dulces Economicos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/dulces_economicos.webp",
    "rawName": "dulces economicos.jpeg"
  },
  {
    "id": 40,
    "title": "Dulces Fusiones",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/dulces_fusiones.webp",
    "rawName": "dulces fusiones.jpeg"
  },
  {
    "id": 41,
    "title": "Dulces Pascuas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/dulces_pascuas.webp",
    "rawName": "dulces pascuas.jpeg"
  },
  {
    "id": 42,
    "title": "El Mundo de las Hamburguesas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/el_mundo_de_las_hamburguesas.webp",
    "rawName": "el mundo de las hamburguesas.jpeg"
  },
  {
    "id": 43,
    "title": "El Mundo del 3 Leches",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/el_mundo_del_3_leches.webp",
    "rawName": "el mundo del 3 leches.jpeg"
  },
  {
    "id": 44,
    "title": "Empanadas Argentinas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_argentinas.webp",
    "rawName": "empanadas argentinas.jpeg"
  },
  {
    "id": 45,
    "title": "Empanadas Fritas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_fritas.webp",
    "rawName": "empanadas fritas.jpeg"
  },
  {
    "id": 46,
    "title": "Empanadas Integrales",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/empanadas_integrales.webp",
    "rawName": "empanadas integrales.jpeg"
  },
  {
    "id": 47,
    "title": "Empanadas sin Gluten",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/empanadas_sin_gluten.webp",
    "rawName": "empanadas sin gluten.jpeg"
  },
  {
    "id": 48,
    "title": "Entre Brasas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/entre_brasas.webp",
    "rawName": "entre brasas.jpeg"
  },
  {
    "id": 49,
    "title": "Especial de Comida Boliviana",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/especial_de_comida_boliviana.webp",
    "rawName": "especial de comida boliviana.jpeg"
  },
  {
    "id": 50,
    "title": "Especial de Milanesas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/especial_de_milanesas.webp",
    "rawName": "Especial de milanesas.jpeg"
  },
  {
    "id": 51,
    "title": "Especial de Panes Salados",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/especial_de_panes_salados.webp",
    "rawName": "especial de panes salados.jpeg"
  },
  {
    "id": 52,
    "title": "Especial de San Valentin",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/especial_de_san_valentin.webp",
    "rawName": "especial de san valentin.jpeg"
  },
  {
    "id": 53,
    "title": "Fábrica de Alfajores",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/f_brica_de_alfajores.webp",
    "rawName": "fábrica de alfajores.jpeg"
  },
  {
    "id": 54,
    "title": "Facturas Argentinas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/facturas_argentinas.webp",
    "rawName": "facturas argentinas.jpeg"
  },
  {
    "id": 55,
    "title": "Fatias en Tendencia",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/fatias_en_tendencia.webp",
    "rawName": "fatias en tendencia.jpeg"
  },
  {
    "id": 56,
    "title": "Festival de las Alitas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_de_las_alitas.webp",
    "rawName": "festival de las alitas.jpeg"
  },
  {
    "id": 57,
    "title": "Festival del Pato Sabroso",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_del_pato_sabroso.webp",
    "rawName": "festival del pato sabroso.jpeg"
  },
  {
    "id": 58,
    "title": "Festival del Pollo",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/festival_del_pollo.webp",
    "rawName": "festival del pollo.jpeg"
  },
  {
    "id": 59,
    "title": "Festival del Tiramisú",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/festival_del_tiramis.webp",
    "rawName": "festival del tiramisú.jpeg"
  },
  {
    "id": 60,
    "title": "Frutas en Tendencias",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/frutas_en_tendencias.webp",
    "rawName": "frutas en tendencias.jpeg"
  },
  {
    "id": 61,
    "title": "Galletas Crumble",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/galletas_crumble.webp",
    "rawName": "galletas crumble.jpeg"
  },
  {
    "id": 62,
    "title": "Galletas y Alfajores Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/galletas_y_alfajores_saludables.webp",
    "rawName": "galletas y alfajores saludables.jpeg"
  },
  {
    "id": 63,
    "title": "Helados Paletas y Bolos Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/helados_paletas_y_bolos_saludables.webp",
    "rawName": "helados paletas y bolos saludables.jpeg"
  },
  {
    "id": 64,
    "title": "Horneados Típicos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/horneados_t_picos.webp",
    "rawName": "horneados típicos.jpeg"
  },
  {
    "id": 65,
    "title": "Jugos Detox y Smoothies Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/jugos_detox_y_smoothies_saludables.webp",
    "rawName": "jugos detox y smoothies saludables.jpeg"
  },
  {
    "id": 66,
    "title": "La Fabrica del Chocolate",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/la_fabrica_del_chocolate.webp",
    "rawName": "la fabrica del chocolate.jpeg"
  },
  {
    "id": 67,
    "title": "Lácteos Caseros",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/l_cteos_caseros.webp",
    "rawName": "lácteos caseros.jpeg"
  },
  {
    "id": 68,
    "title": "Lácteos Caseros",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/l_cteos_caseros.webp",
    "rawName": "lácteos caseros.jpeg"
  },
  {
    "id": 69,
    "title": "Las Marquesas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/las_marquesas.webp",
    "rawName": "las marquesas.jpeg"
  },
  {
    "id": 70,
    "title": "Lasañas y Crepes",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/lasa_as_y_crepes.webp",
    "rawName": "lasañas y crepes.jpeg"
  },
  {
    "id": 71,
    "title": "Loncheras Nutritivas",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/loncheras_nutritivas.webp",
    "rawName": "loncheras nutritivas.jpeg"
  },
  {
    "id": 72,
    "title": "Masas para el Frío",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masas_para_el_fr_o.webp",
    "rawName": "masas para el frío.jpeg"
  },
  {
    "id": 73,
    "title": "Mermeladas de Temporada",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/mermeladas_de_temporada.webp",
    "rawName": "mermeladas de temporada.jpeg"
  },
  {
    "id": 74,
    "title": "Mermeladas de Temporada",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mermeladas_de_temporada.webp",
    "rawName": "mermeladas de temporada.jpeg"
  },
  {
    "id": 75,
    "title": "Mini Donuts",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_donuts.webp",
    "rawName": "mini donuts.jpeg"
  },
  {
    "id": 76,
    "title": "Mini Layer Cakes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_layer_cakes.webp",
    "rawName": "mini layer cakes.jpeg"
  },
  {
    "id": 77,
    "title": "Mini Layer Cakes",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/mini_layer_cakes.webp",
    "rawName": "mini layer cakes.jpeg"
  },
  {
    "id": 78,
    "title": "Mini Postres",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mini_postres.webp",
    "rawName": "mini postres.jpeg"
  },
  {
    "id": 79,
    "title": "Mochis Frutales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mochis_frutales.webp",
    "rawName": "mochis frutales.jpeg"
  },
  {
    "id": 80,
    "title": "Mundo Chocolatoso",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_chocolatoso.webp",
    "rawName": "mundo chocolatoso.jpeg"
  },
  {
    "id": 81,
    "title": "Mundo Muffins",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_muffins.webp",
    "rawName": "mundo muffins.jpeg"
  },
  {
    "id": 82,
    "title": "Negocios en Tendencias",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/negocios_en_tendencias.webp",
    "rawName": "negocios en tendencias.jpeg"
  },
  {
    "id": 83,
    "title": "Nutrición para Niños",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/nutrici_n_para_ni_os.webp",
    "rawName": "nutrición para niños.jpeg"
  },
  {
    "id": 84,
    "title": "Pacumutos y Brochetas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/pacumutos_y_brochetas.webp",
    "rawName": "pacumutos y brochetas.jpeg"
  },
  {
    "id": 85,
    "title": "Panadería con Queso",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panader_a_con_queso.webp",
    "rawName": "panadería con queso.jpeg"
  },
  {
    "id": 86,
    "title": "Panadería sin Gluten",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/panader_a_sin_gluten.webp",
    "rawName": "panadería sin gluten.jpeg"
  },
  {
    "id": 87,
    "title": "Panadería Vallegrandina",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panader_a_vallegrandina.webp",
    "rawName": "panadería vallegrandina.jpeg"
  },
  {
    "id": 88,
    "title": "Panes Caseros",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_caseros.webp",
    "rawName": "panes caseros.jpeg"
  },
  {
    "id": 89,
    "title": "Panes Clasicos Bolivianos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_clasicos_bolivianos.webp",
    "rawName": "panes clasicos bolivianos.jpeg"
  },
  {
    "id": 90,
    "title": "Panes Dulces",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_dulces.webp",
    "rawName": "panes dulces.jpeg"
  },
  {
    "id": 91,
    "title": "Panes Económicos y Deliciosos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_econ_micos_y_deliciosos.webp",
    "rawName": "panes económicos y deliciosos.jpeg"
  },
  {
    "id": 92,
    "title": "Panes Nutritivos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_nutritivos.webp",
    "rawName": "panes nutritivos.jpeg"
  },
  {
    "id": 93,
    "title": "Panes Nutritivos",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/panes_nutritivos.webp",
    "rawName": "panes nutritivos.jpeg"
  },
  {
    "id": 94,
    "title": "Paninis y Shawarmas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/paninis_y_shawarmas.webp",
    "rawName": "paninis y shawarmas.jpeg"
  },
  {
    "id": 95,
    "title": "Pasteles Especiales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/pasteles_especiales.webp",
    "rawName": "pasteles especiales.jpeg"
  },
  {
    "id": 96,
    "title": "Paves Brasileños",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/paves_brasile_os.webp",
    "rawName": "paves brasileños.jpeg"
  },
  {
    "id": 97,
    "title": "Platos para Kermesse",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/platos_para_kermesse.webp",
    "rawName": "platos para kermesse.jpeg"
  },
  {
    "id": 98,
    "title": "Postres Cremosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_cremosos.webp",
    "rawName": "postres cremosos.jpeg"
  },
  {
    "id": 99,
    "title": "Postres Deliciosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_deliciosos.webp",
    "rawName": "postres deliciosos.jpeg"
  },
  {
    "id": 100,
    "title": "Postres Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_helados.webp",
    "rawName": "postres helados.jpeg"
  },
  {
    "id": 101,
    "title": "Postres Helados",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/postres_helados.webp",
    "rawName": "postres helados.jpeg"
  },
  {
    "id": 102,
    "title": "Postres Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/postres_keto.webp",
    "rawName": "postres keto.jpeg"
  },
  {
    "id": 103,
    "title": "Postres Personales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_personales.webp",
    "rawName": "postres personales.jpeg"
  },
  {
    "id": 104,
    "title": "Postres Porcionados Frutales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_porcionados_frutales.webp",
    "rawName": "postres porcionados frutales.jpeg"
  },
  {
    "id": 105,
    "title": "Postres Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/postres_saludables.webp",
    "rawName": "postres saludables.jpeg"
  },
  {
    "id": 106,
    "title": "Productos Congelados para Vender",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/productos_congelados_para_vender.webp",
    "rawName": "productos congelados para vender.jpeg"
  },
  {
    "id": 107,
    "title": "Productos Virales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/productos_virales.webp",
    "rawName": "productos virales.jpeg"
  },
  {
    "id": 108,
    "title": "Queques Comerciales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_comerciales.webp",
    "rawName": "queques comerciales.jpeg"
  },
  {
    "id": 109,
    "title": "Queques Crumble",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_crumble.webp",
    "rawName": "queques crumble.jpeg"
  },
  {
    "id": 110,
    "title": "Queques Especiales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/queques_especiales.webp",
    "rawName": "queques especiales.jpeg"
  },
  {
    "id": 111,
    "title": "Queques Nutritivos",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/queques_nutritivos.webp",
    "rawName": "queques nutritivos.jpeg"
  },
  {
    "id": 112,
    "title": "Queques sin Gluten y sin Azúcar",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/queques_sin_gluten_y_sin_az_car.webp",
    "rawName": "queques sin gluten y sin azúcar.jpeg"
  },
  {
    "id": 113,
    "title": "Recetas de la Abuela",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/recetas_de_la_abuela.webp",
    "rawName": "Recetas de la abuela.jpeg"
  },
  {
    "id": 114,
    "title": "Reposteria Saludable",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/reposteria_saludable.webp",
    "rawName": "reposteria saludable.jpeg"
  },
  {
    "id": 115,
    "title": "Roles Gigantes",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/roles_gigantes.webp",
    "rawName": "roles gigantes.jpeg"
  },
  {
    "id": 116,
    "title": "Salsas y Aderezos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/salsas_y_aderezos.webp",
    "rawName": "salsas y aderezos.jpeg"
  },
  {
    "id": 117,
    "title": "Salteñas Especiales",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/salte_as_especiales.webp",
    "rawName": "salteñas especiales.jpeg"
  },
  {
    "id": 118,
    "title": "Sándwiches Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/s_ndwiches_helados.webp",
    "rawName": "sándwiches helados.jpeg"
  },
  {
    "id": 119,
    "title": "Slice Cake Brasileños",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/slice_cake_brasile_os.webp",
    "rawName": "slice cake brasileños.jpeg"
  },
  {
    "id": 120,
    "title": "Snack Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/snack_saludables.webp",
    "rawName": "snack saludables.jpeg"
  },
  {
    "id": 121,
    "title": "Snacks Deliciosos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/snacks_deliciosos.webp",
    "rawName": "snacks deliciosos.jpeg"
  },
  {
    "id": 122,
    "title": "Snacks Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/snacks_saludables.webp",
    "rawName": "snacks saludables.jpeg"
  },
  {
    "id": 123,
    "title": "Stuffed Cookies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/stuffed_cookies.webp",
    "rawName": "stuffed cookies.jpeg"
  },
  {
    "id": 124,
    "title": "Sushimanía",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/sushiman_a.webp",
    "rawName": "sushimanía.jpeg"
  },
  {
    "id": 125,
    "title": "Tacos Mexicanos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/tacos_mexicanos.webp",
    "rawName": "tacos mexicanos.jpeg"
  },
  {
    "id": 126,
    "title": "Tarde de Cinnamons",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tarde_de_cinnamons.webp",
    "rawName": "tarde de cinnamons.jpeg"
  },
  {
    "id": 127,
    "title": "Tartaletas y Pays",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tartaletas_y_pays.webp",
    "rawName": "tartaletas y pays.jpeg"
  },
  {
    "id": 128,
    "title": "Tartamania",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tartamania.webp",
    "rawName": "tartamania.jpeg"
  },
  {
    "id": 129,
    "title": "Tendencias Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tendencias_saludables.webp",
    "rawName": "tendencias saludables.jpeg"
  },
  {
    "id": 130,
    "title": "Tiramisus Coreanos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tiramisus_coreanos.webp",
    "rawName": "tiramisus coreanos.jpeg"
  },
  {
    "id": 131,
    "title": "Tortas Aflanadas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_aflanadas.webp",
    "rawName": "tortas aflanadas.jpeg"
  },
  {
    "id": 132,
    "title": "Tortas de la Abuela",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_de_la_abuela.webp",
    "rawName": "tortas de la abuela.jpeg"
  },
  {
    "id": 133,
    "title": "Tortas de Temporada",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_de_temporada.webp",
    "rawName": "tortas de temporada.jpeg"
  },
  {
    "id": 134,
    "title": "Tortas Desnudas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_desnudas.webp",
    "rawName": "tortas desnudas.jpeg"
  },
  {
    "id": 135,
    "title": "Tortas Económicas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_econ_micas.webp",
    "rawName": "tortas económicas.jpeg"
  },
  {
    "id": 136,
    "title": "Tortas en Vaso",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_en_vaso.webp",
    "rawName": "tortas en vaso.jpeg"
  },
  {
    "id": 137,
    "title": "Tortas Florales para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_florales_para_mam.webp",
    "rawName": "tortas florales para mamá.jpeg"
  },
  {
    "id": 138,
    "title": "Tortas Frutales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_frutales.webp",
    "rawName": "tortas frutales.jpeg"
  },
  {
    "id": 139,
    "title": "Tortas Heladas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_heladas.webp",
    "rawName": "tortas heladas.jpeg"
  },
  {
    "id": 140,
    "title": "Tortas Heladas Saludables",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_heladas_saludables.webp",
    "rawName": "tortas heladas saludables.jpeg"
  },
  {
    "id": 141,
    "title": "Tortas Heladas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_heladas_saludables.webp",
    "rawName": "tortas heladas saludables.jpeg"
  },
  {
    "id": 142,
    "title": "Tortas para la Tarde",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_para_la_tarde.webp",
    "rawName": "tortas para la tarde.jpeg"
  },
  {
    "id": 143,
    "title": "Tortas Pinterest para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_pinterest_para_mam.webp",
    "rawName": "tortas pinterest para mamá.jpeg"
  },
  {
    "id": 144,
    "title": "Tortas Porcionadas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_porcionadas_saludables.webp",
    "rawName": "tortas porcionadas saludables.jpeg"
  },
  {
    "id": 145,
    "title": "Tortas Virales",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortas_virales.webp",
    "rawName": "tortas virales.jpeg"
  },
  {
    "id": 146,
    "title": "Tortastortas Rápidas",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/tortastortas_r_pidas.webp",
    "rawName": "tortastortas rápidas.jpeg"
  },
  {
    "id": 147,
    "title": "Variedades de Arroz",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/variedades_de_arroz.webp",
    "rawName": "variedades de arroz.jpeg"
  },
  {
    "id": 148,
    "title": "Variedades de Ensaladas",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/variedades_de_ensaladas.webp",
    "rawName": "variedades de ensaladas.jpeg"
  },
  {
    "id": 149,
    "title": "Bocaditos para Eventos",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/bocaditos_para_eventos.webp",
    "rawName": "bocaditos para eventos.jpeg"
  },
  {
    "id": 150,
    "title": "Comida Casera",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/comida_casera.webp",
    "rawName": "comida casera.jpeg"
  },
  {
    "id": 151,
    "title": "Mundo Pastas",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/mundo_pastas.webp",
    "rawName": "mundo pastas.jpeg"
  },
  {
    "id": 152,
    "title": "Mundo Pizza",
    "category": "Comidas",
    "categorySlug": "comida",
    "image": "images/comida/mundo_pizza.webp",
    "rawName": "mundo pizza.jpeg"
  },
  {
    "id": 153,
    "title": "Masas Hojaldradas Deliciosas",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masas_hojaldradas_deliciosas.webp",
    "rawName": "masas hojaldradas deliciosas.jpeg"
  },
  {
    "id": 154,
    "title": "Masitas para el Té",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/masitas_para_el_te.webp",
    "rawName": "masitas para el té.jpeg"
  },
  {
    "id": 155,
    "title": "Panes de Todos Santos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/panes_de_todos_santos.webp",
    "rawName": "panes de todos santos.jpeg"
  },
  {
    "id": 156,
    "title": "Snack, Postres y Refrescos Típicos",
    "category": "Panadería",
    "categorySlug": "panaderia",
    "image": "images/panaderia/snack_postres_y_refrescos_tipicos.webp",
    "rawName": "snack postres y refrescos tipicos.jpeg"
  },
  {
    "id": 157,
    "title": "Desayuno para Papá",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/desayuno_para_papa.webp",
    "rawName": "desayuno para papá.jpeg"
  },
  {
    "id": 158,
    "title": "Frappes y Smoothies",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/frappes_y_smoothies.webp",
    "rawName": "frappes y smoothies.jpeg"
  },
  {
    "id": 159,
    "title": "Habanitos Helados",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/habanitos_helados.webp",
    "rawName": "habanitos helados.jpeg"
  },
  {
    "id": 160,
    "title": "Helados Artesanales",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/helados_artesanales.webp",
    "rawName": "helados artesanales.jpeg"
  },
  {
    "id": 161,
    "title": "Masas Esponjosas",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/masas_esponjosas.webp",
    "rawName": "masas esponjosas.jpeg"
  },
  {
    "id": 162,
    "title": "Mundo Merengón",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/mundo_merengon.webp",
    "rawName": "mundo merengon.jpeg"
  },
  {
    "id": 163,
    "title": "Postres Económicos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_economicos.webp",
    "rawName": "postres economicos.jpeg"
  },
  {
    "id": 164,
    "title": "Postres Fríos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/postres_frios.webp",
    "rawName": "postres frios.jpeg"
  },
  {
    "id": 165,
    "title": "Tarde de Queques Mantequillosos",
    "category": "Pastelería",
    "categorySlug": "pasteleria",
    "image": "images/pasteleria/tarde_de_queques_mantequillosos.webp",
    "rawName": "tarde de queques mantequillosos.jpeg"
  },
  {
    "id": 166,
    "title": "Comida de Catering",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/comida_de_catering.webp",
    "rawName": "comida de catering.jpeg"
  },
  {
    "id": 167,
    "title": "Mermeladas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/mermeladas_saludables.webp",
    "rawName": "mermeladas saludables.jpeg"
  },
  {
    "id": 168,
    "title": "Pastelería con Avena",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/pasteleria_con_avena.webp",
    "rawName": "pasteleria con avena.jpeg"
  },
  {
    "id": 169,
    "title": "Smoothies, Kéfir y Shots Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/smoothies_kefir_y_shots_saludables.webp",
    "rawName": "smoothies kefir y shots saludables.jpeg"
  },
  {
    "id": 170,
    "title": "Tartas Saludables",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tartas_saludables.webp",
    "rawName": "tartas saludables.jpeg"
  },
  {
    "id": 171,
    "title": "Tortas Keto",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/tortas_keto.webp",
    "rawName": "tortas keto.jpeg"
  },
  {
    "id": 172,
    "title": "Especial para Mamá",
    "category": "Tortas",
    "categorySlug": "tortas",
    "image": "images/tortas/especial_para_mama.webp",
    "rawName": "especial para mamá.jpeg"
  },
  {
    "id": 173,
    "title": "Repostería Saludable",
    "category": "Saludables",
    "categorySlug": "saludables",
    "image": "images/saludables/reposteria_saludable.webp",
    "rawName": "repostería saludable.jpeg"
  }
];
