const animales = [
  "abeja","águila","alce","alpaca","antílope","ardilla",
  "ballena_groenlandia","ballena_jorobada","búho","burro",
  "caballo","cabra","cachalote","caimán","camello","canario",
  "castor","cebra","cerdo","ciervo","cigarra","cisne","cobaya",
  "conejo","cotorra","cuervo","delfín","dragón_comodo","elefante",
  "erizo","escorpión","foca","gallina","gallo","gato","gaviota",
  "gorila","grillo","halcón","hiena","hipopótamo","jabalí",
  ,"jirafa","lagarto","lechuza","león_marino","león",
  "leopardo","lobo","loro","mapache","mariposa","mono","mosca",
  "mosquito","murciélago","nutria","orca","oso_hormiguero",
  "oso","oveja","paloma","panda","pato","pavo_real","pavo",
  "pelícano","periquito","perro","petirrojo","pingüino","rana",
  "rata","serpiente_cascabel","tejón",
  "tigre","tucán","vaca","yak","zorro"
]


let audioActual = null;
let tarjetaActual = null;

$(document).ready(function() {
    const grid = $('#animalGrid');
    animales.forEach(nombre => {
        const tarjeta = $(
            `<div class="col-md-3 col-sm-6 mb-4">
                <div data-animal="${nombre}" class="tarjeta_animal text-center">
                    <img src="./Archivos/Imagenes/${nombre}.jpeg" alt="${nombre}" class="img-fluid mb-2" style="max-height:150px; object-fit:cover;">
                    <h5 class="mb-2">${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h5>
                </div>
            </div>`
        );
        grid.append(tarjeta);
    });

    $(document).on('click', '.tarjeta_animal', function() {
        if (audioActual && !audioActual.paused) {
            audioActual.pause();
            audioActual.currentTime = 0;
            if (tarjetaActual) {
                tarjetaActual.removeClass('reproduciendo');
            }
        }
        const animal = $(this).data('animal');
        audioActual = new Audio(`./Archivos/Sonidos/${animal}.mp3`);
        tarjetaActual = $(this);
        tarjetaActual.addClass('reproduciendo');
        audioActual.play();
        audioActual.onended = function() {
            tarjetaActual.removeClass('reproduciendo');
            audioActual = null;
            tarjetaActual = null;
        };
    });
});
