const animales = [
{name:"abeja",img:"abeja.jpeg",mp3:"abeja.mp3"},
{name:"águila",img:"aguila.jpeg",mp3:"águila.mp3"},
{name:"alce",img:"alce.jpeg",mp3:"alce.mp3"},
{name:"alpaca",img:"alpaca.jpeg",mp3:"alpaca.mp3"},
{name:"antílope",img:"antilope.jpeg",mp3:"antílope.mp3"},
{name:"ardilla",img:"ardilla.jpeg",mp3:"ardilla.mp3"},
{name:"ballena de groenlandia",img:"ballena_groenlandia.jpeg",mp3:"ballena_groenlandia.mp3"},
{name:"ballena jorobada",img:"ballena_jorobada.jpeg",mp3:"ballena_jorobada.mp3"},
{name:"búho",img:"buho.jpeg",mp3:"búho.mp3"},
{name:"burro",img:"burro.jpeg",mp3:"burro.mp3"},
{name:"caballo",img:"caballo.jpeg",mp3:"caballo.mp3"},
{name:"cabra",img:"cabra.jpeg",mp3:"cabra.mp3"},
{name:"cachalote",img:"cachalote.jpeg",mp3:"cachalote.mp3"},
{name:"caimán",img:"caiman.jpeg",mp3:"caimán.mp3"},
{name:"camello",img:"camello.jpeg",mp3:"camello.mp3"},
{name:"canario",img:"canario.jpeg",mp3:"canario.mp3"},
{name:"castor",img:"castor.jpeg",mp3:"castor.mp3"},
{name:"cebra",img:"cebra.jpeg",mp3:"cebra.mp3"},
{name:"cerdo",img:"cerdo.jpeg",mp3:"cerdo.mp3"},
{name:"ciervo",img:"ciervo.jpeg",mp3:"ciervo.mp3"},
{name:"cigarra",img:"cigarra.jpeg",mp3:"cigarra.mp3"},
{name:"cisne",img:"cisne.jpeg",mp3:"cisne.mp3"},
{name:"cobaya",img:"cobaya.jpeg",mp3:"cobaya.mp3"},
{name:"conejo",img:"conejo.jpeg",mp3:"conejo.mp3"},
{name:"cotorra",img:"cotorra.jpeg",mp3:"cotorra.mp3"},
{name:"cuervo",img:"cuervo.jpeg",mp3:"cuervo.mp3"},
{name:"delfín",img:"delfin.jpeg",mp3:"delfín.mp3"},
{name:"dragón de comodo",img:"dragon_comodo.jpeg",mp3:"dragón_comodo.mp3"},
{name:"elefante",img:"elefante.jpeg",mp3:"elefante.mp3"},
{name:"erizo",img:"erizo.jpeg",mp3:"erizo.mp3"},
{name:"escorpión",img:"escorpion.jpeg",mp3:"escorpión.mp3"},
{name:"foca",img:"foca.jpeg",mp3:"foca.mp3"},
{name:"gallina",img:"gallina.jpeg",mp3:"gallina.mp3"},
{name:"gallo",img:"gallo.jpeg",mp3:"gallo.mp3"},
{name:"gato",img:"gato.jpeg",mp3:"gato.mp3"},
{name:"gaviota",img:"gaviota.jpeg",mp3:"gaviota.mp3"},
{name:"gorila",img:"gorila.jpeg",mp3:"gorila.mp3"},
{name:"grillo",img:"grillo.jpeg",mp3:"grillo.mp3"},
{name:"halcón",img:"halcon.jpeg",mp3:"halcón.mp3"},
{name:"hiena",img:"hiena.jpeg",mp3:"hiena.mp3"},
{name:"hipopótamo",img:"hipopotamo.jpeg",mp3:"hipopótamo.mp3"},
{name:"jabalí",img:"jabali.jpeg",mp3:"jabalí.mp3"},
{name:"jirafa",img:"jirafa.jpeg",mp3:"jirafa.mp3"},
{name:"lagarto",img:"lagarto.jpeg",mp3:"lagarto.mp3"},
{name:"lechuza",img:"lechuza.jpeg",mp3:"lechuza.mp3"},
{name:"león marino",img:"leon_marino.jpeg",mp3:"león_marino.mp3"},
{name:"león",img:"leon.jpeg",mp3:"león.mp3"},
{name:"leopardo",img:"leopardo.jpeg",mp3:"leopardo.mp3"},
{name:"lobo",img:"lobo.jpeg",mp3:"lobo.mp3"},
{name:"loro",img:"loro.jpeg",mp3:"loro.mp3"},
{name:"mapache",img:"mapache.jpeg",mp3:"mapache.mp3"},
{name:"mariposa",img:"mariposa.jpeg",mp3:"mariposa.mp3"},
{name:"mono",img:"mono.jpeg",mp3:"mono.mp3"},
{name:"mosca",img:"mosca.jpeg",mp3:"mosca.mp3"},
{name:"mosquito",img:"mosquito.jpeg",mp3:"mosquito.mp3"},
{name:"murciélago",img:"murcielago.jpeg",mp3:"murciélago.mp3"},
{name:"nutria",img:"nutria.jpeg",mp3:"nutria.mp3"},
{name:"orca",img:"orca.jpeg",mp3:"orca.mp3"},
{name:"oso hormiguero",img:"oso_hormiguero.jpeg",mp3:"oso_hormiguero.mp3"},
{name:"oso",img:"oso.jpeg",mp3:"oso.mp3"},
{name:"oveja",img:"oveja.jpeg",mp3:"oveja.mp3"},
{name:"paloma",img:"paloma.jpeg",mp3:"paloma.mp3"},
{name:"panda",img:"panda.jpeg",mp3:"panda.mp3"},
{name:"pato",img:"pato.jpeg",mp3:"pato.mp3"},
{name:"pavo real",img:"pavo_real.jpeg",mp3:"pavo_real.mp3"},
{name:"pavo",img:"pavo.jpeg",mp3:"pavo.mp3"},
{name:"pelícano",img:"pelicano.jpeg",mp3:"pelícano.mp3"},
{name:"periquito",img:"periquito.jpeg",mp3:"periquito.mp3"},
{name:"perro",img:"perro.jpeg",mp3:"perro.mp3"},
{name:"petirrojo",img:"petirrojo.jpeg",mp3:"petirrojo.mp3"},
{name:"pingüino",img:"pinguino.jpeg",mp3:"pingüino.mp3"},
{name:"rana",img:"rana.jpeg",mp3:"rana.mp3"},
{name:"rata",img:"rata.jpeg",mp3:"rata.mp3"},
{name:"serpiente de cascabel",img:"serpiente_cascabel.jpeg",mp3:"serpiente_cascabel.mp3"},
{name:"tejón",img:"tejon.jpeg",mp3:"tejón.mp3"},
{name:"tigre",img:"tigre.jpeg",mp3:"tigre.mp3"},
{name:"tucán",img:"tucan.jpeg",mp3:"tucán.mp3"},
{name:"vaca",img:"vaca.jpeg",mp3:"vaca.mp3"},
{name:"yak",img:"yak.jpeg",mp3:"yak.mp3"},
{name:"zorro",img:"zorro.jpeg",mp3:"zorro.mp3"}
]



let audioActual = null;
let tarjetaActual = null;

$(document).ready(function() {
    const grid = $('#animalGrid');
    animales.forEach(animal => {
        const tarjeta = $(
            `<div class="col-md-3 col-sm-6 mb-4">
                <div data-animal="${animal.mp3}" class="tarjeta_animal text-center">
                    <img src="./Archivos/Imagenes/${animal.img}" alt="${animal.name}" class="img-fluid mb-2" style="max-height:150px; object-fit:cover;">
                    <h5 class="mb-2">${animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}</h5>
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
        audioActual = new Audio(`./Archivos/Sonidos/${animal}`);
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
