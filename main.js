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

var index=1;

function mostrarDer(i) {
    index+=i;
    if(index>6){
        index=1;
    }
  document.carru.src = slider[index];
};

function mostrarIzq(i) {
    index-=i;
    if(index<1){
        index=6;
    }
  document.carru.src = slider[index];
};
