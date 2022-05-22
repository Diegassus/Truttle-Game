// slider manual
var slider = new Array();

slider[1] =
  "https://www.teahub.io/photos/full/297-2979988_bioshock-infinite-burial-at-sea-episode-2.jpg";

slider[2] =
  "https://gamersrd.com/wp-content/uploads/2020/01/Colin-McRaeFLAT-OUT-DiRT-Rally-2.0-GamerSRD.jpg"; //dirt
slider[3] =
  "https://www.pcgamesn.com/wp-content/uploads/2019/10/the-last-of-us.jpg"; //tlou
slider[4] =
  "https://i.blogs.es/16f278/principal-resident-evil-3-remake-1903913/1366_2000.jpg"; //hoi4
slider[5] =
  "https://i0.wp.com/caniplaythat.com/wp-content/uploads/2021/05/uncharted-4-accessibility-stats.jpg?resize=800%2C450&ssl=1"; //uncharted 4
slider[6] =
  "https://images.pushsquare.com/8b917a36c5c4b/horizon-zero-dawn-ps4-1.large.jpg"; //horizon zd

var index = 1;

// texto del slider
var texto = new Array();

texto[1] =
  "Para Bioshock Infinite: Burial at de sea 2 , nuestros aportes comunitarios permitieron el desarrollo de booker en este DLC";

texto[2] =
  "En Dirt RALLY 2.0 ayudamos a crear el entrono climatico y condiciones de pista!"; //dirt
texto[3] =
  "Una obra de arte, gracias a la comunidad logramos encontrar una experiencia de usuario en el desarrollo del combate increible"; //tlou
texto[4] =
  "En el remake de Resident Evil 3, la comunidad aporto muchos fanarts de los cuales se tomo como concepto para el ambiente"; //hoi4
texto[5] =
  "Para Uncharted 4 nuestro equipo se ocupo de la seleccion de escenarios y parte de la historia secundaria"; //uncharted 4
texto[6] =
  "Para la obra maestra de de Zero Dawn, el equipo el equipo escribio el lore detras de cada archivo de informacion coleccionable"; //horizon zd

function mostrarDer() {
  index ++;
  if (index > 6) {
    index = 1;
  }
  document.carru.src = slider[index];
  var padreViejo = document.getElementById("infoJuego");
  padreViejo.innerHTML = texto[index];
}

function mostrarIzq() {
  index --;
  if (index < 1) {
    index = 6;
  }
  document.carru.src = slider[index];
  var padreViejo = document.getElementById("infoJuego");
  padreViejo.innerHTML = texto[index];
}

function repetir(){
  setInterval(mostrarDer,5000);
}

repetir();