const animales = [
{name:"abeja",img:"abeja.jpeg",mp3:"abeja.mp3",id:1},
{name:"águila",img:"aguila.jpeg",mp3:"aguila.mp3",id:2},
{name:"alce",img:"alce.jpeg",mp3:"alce.mp3",id:3},
{name:"alpaca",img:"alpaca.jpeg",mp3:"alpaca.mp3",id:4},
{name:"antílope",img:"antilope.jpeg",mp3:"antilope.mp3",id:5},
{name:"ardilla",img:"ardilla.jpeg",mp3:"ardilla.mp3",id:6},
{name:"ballena de groenlandia",img:"ballena_groenlandia.jpeg",mp3:"ballena_groenlandia.mp3",id:7},
{name:"ballena jorobada",img:"ballena_jorobada.jpeg",mp3:"ballena_jorobada.mp3",id:8},
{name:"búho",img:"buho.jpeg",mp3:"buho.mp3",id:9},
{name:"burro",img:"burro.jpeg",mp3:"burro.mp3",id:10},
{name:"caballo",img:"caballo.jpeg",mp3:"caballo.mp3",id:11},
{name:"cabra",img:"cabra.jpeg",mp3:"cabra.mp3",id:12},
{name:"cachalote",img:"cachalote.jpeg",mp3:"cachalote.mp3",id:13},
{name:"caimán",img:"caiman.jpeg",mp3:"caiman.mp3",id:14},
{name:"camello",img:"camello.jpeg",mp3:"camello.mp3",id:15},
{name:"canario",img:"canario.jpeg",mp3:"canario.mp3",id:16},
{name:"castor",img:"castor.jpeg",mp3:"castor.mp3",id:17},
{name:"cebra",img:"cebra.jpeg",mp3:"cebra.mp3",id:18},
{name:"cerdo",img:"cerdo.jpeg",mp3:"cerdo.mp3",id:19},
{name:"ciervo",img:"ciervo.jpeg",mp3:"ciervo.mp3",id:20},
{name:"cigarra",img:"cigarra.jpeg",mp3:"cigarra.mp3",id:21},
{name:"cisne",img:"cisne.jpeg",mp3:"cisne.mp3",id:22},
{name:"cobaya",img:"cobaya.jpeg",mp3:"cobaya.mp3",id:23},
{name:"conejo",img:"conejo.jpeg",mp3:"conejo.mp3",id:24},
{name:"cotorra",img:"cotorra.jpeg",mp3:"cotorra.mp3",id:25},
{name:"cuervo",img:"cuervo.jpeg",mp3:"cuervo.mp3",id:26},
{name:"delfín",img:"delfin.jpeg",mp3:"delfin.mp3",id:27},
{name:"dragón de comodo",img:"dragon_comodo.jpeg",mp3:"dragon_comodo.mp3",id:28},
{name:"elefante",img:"elefante.jpeg",mp3:"elefante.mp3",id:29},
{name:"erizo",img:"erizo.jpeg",mp3:"erizo.mp3",id:30},
{name:"escorpión",img:"escorpion.jpeg",mp3:"escorpion.mp3",id:31},
{name:"foca",img:"foca.jpeg",mp3:"foca.mp3",id:32},
{name:"gallina",img:"gallina.jpeg",mp3:"gallina.mp3",id:33},
{name:"gallo",img:"gallo.jpeg",mp3:"gallo.mp3",id:34},
{name:"gato",img:"gato.jpeg",mp3:"gato.mp3",id:35},
{name:"gaviota",img:"gaviota.jpeg",mp3:"gaviota.mp3",id:36},
{name:"gorila",img:"gorila.jpeg",mp3:"gorila.mp3",id:37},
{name:"grillo",img:"grillo.jpeg",mp3:"grillo.mp3",id:38},
{name:"halcón",img:"halcon.jpeg",mp3:"halcon.mp3",id:39},
{name:"hiena",img:"hiena.jpeg",mp3:"hiena.mp3",id:40},
{name:"hipopótamo",img:"hipopotamo.jpeg",mp3:"hipopotamo.mp3",id:41},
{name:"jabalí",img:"jabali.jpeg",mp3:"jabali.mp3",id:42},
{name:"jirafa",img:"jirafa.jpeg",mp3:"jirafa.mp3",id:43},
{name:"lagarto",img:"lagarto.jpeg",mp3:"lagarto.mp3",id:44},
{name:"lechuza",img:"lechuza.jpeg",mp3:"lechuza.mp3",id:45},
{name:"león marino",img:"leon_marino.jpeg",mp3:"leon_marino.mp3",id:46},
{name:"león",img:"leon.jpeg",mp3:"leon.mp3",id:47},
{name:"leopardo",img:"leopardo.jpeg",mp3:"leopardo.mp3",id:48},
{name:"lobo",img:"lobo.jpeg",mp3:"lobo.mp3",id:49},
{name:"loro",img:"loro.jpeg",mp3:"loro.mp3",id:50},
{name:"mapache",img:"mapache.jpeg",mp3:"mapache.mp3",id:51},
{name:"mariposa",img:"mariposa.jpeg",mp3:"mariposa.mp3",id:52},
{name:"mono",img:"mono.jpeg",mp3:"mono.mp3",id:53},
{name:"mosca",img:"mosca.jpeg",mp3:"mosca.mp3",id:54},
{name:"mosquito",img:"mosquito.jpeg",mp3:"mosquito.mp3",id:55},
{name:"murciélago",img:"murciélago.jpeg",mp3:"murcielago.mp3",id:56},
{name:"nutria",img:"nutria.jpeg",mp3:"nutria.mp3",id:57},
{name:"orca",img:"orca.jpeg",mp3:"orca.mp3",id:58},
{name:"oso hormiguero",img:"oso_hormiguero.jpeg",mp3:"oso_hormiguero.mp3",id:59},
{name:"oso",img:"oso.jpeg",mp3:"oso.mp3",id:60},
{name:"oveja",img:"oveja.jpeg",mp3:"oveja.mp3",id:61},
{name:"paloma",img:"paloma.jpeg",mp3:"paloma.mp3",id:62},
{name:"panda",img:"panda.jpeg",mp3:"panda.mp3",id:63},
{name:"pato",img:"pato.jpeg",mp3:"pato.mp3",id:64},
{name:"pavo real",img:"pavo_real.jpeg",mp3:"pavo_real.mp3",id:65},
{name:"pavo",img:"pavo.jpeg",mp3:"pavo.mp3",id:66},
{name:"pelícano",img:"pelicano.jpeg",mp3:"pelicano.mp3",id:67},
{name:"periquito",img:"periquito.jpeg",mp3:"periquito.mp3",id:68},
{name:"perro",img:"perro.jpeg",mp3:"perro.mp3",id:69},
{name:"petirrojo",img:"petirrojo.jpeg",mp3:"petirrojo.mp3",id:70},
{name:"pingüino",img:"pinguino.jpeg",mp3:"pinguino.mp3",id:71},
{name:"rana",img:"rana.jpeg",mp3:"rana.mp3",id:72},
{name:"rata",img:"rata.jpeg",mp3:"rata.mp3",id:73},
{name:"serpiente de cascabel",img:"serpiente_cascabel.jpeg",mp3:"serpiente_cascabel.mp3",id:74},
{name:"tejón",img:"tejon.jpeg",mp3:"tejon.mp3",id:75},
{name:"tigre",img:"tigre.jpeg",mp3:"tigre.mp3",id:76},
{name:"tucán",img:"tucan.jpeg",mp3:"tucan.mp3",id:77},
{name:"vaca",img:"vaca.jpeg",mp3:"vaca.mp3",id:78},
{name:"yak",img:"yak.jpeg",mp3:"yak.mp3",id:79},
{name:"zorro",img:"zorro.jpeg",mp3:"zorro.mp3",id:80}
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
    function borrar_grid() {
        $('#animalGrid').empty();
    }

    function pintar_menu_juego() {
        const container = $('.container');
        container.html(`
            <div class="text-center py-5">
                <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Animales" style="width:64px;vertical-align:middle;margin-bottom:16px;">
                <h1 style="font-family: 'Montserrat', 'Roboto Slab', Arial, sans-serif; font-weight:700; letter-spacing:1px;">Sonidos de Animales</h1>
                <p style="font-size:1.2rem;color:#555;font-family:'Montserrat',Arial,sans-serif;">Haz clic en comenzar para ver los animales y escuchar sus sonidos</p>
                <button id="btnComenzar" class="btn btn-primary btn-lg mt-4" style="font-family:'Montserrat',Arial,sans-serif;">Comenzar</button>
            </div>
        `);
        $(document).on('click', '#btnComenzar', function() {
            pintar_juego();
        });
    }
    function pintar_juego(){
        
        const container = $('.container');
        container.html(`

        `);
    }
    $('#modo_juego').click(function() {
        borrar_grid();
        pintar_menu_juego();
    });
    function numeroAleatorio() {
        var numeroAleatorio=Math.floor(Math.random() * 80) + 1;
        console.log(numeroAleatorio);
        return numeroAleatorio;
    }
    numeroAleatorio();








});
