
// Obtener los elementos del HTML

const sobre = document.getElementById("sobre");

const botonAbrir = document.getElementById("botonAbrir");

const botonCerrar = document.getElementById("botonCerrar");

const instruccion = document.getElementById("instruccion");

const contenedorCorazones = document.getElementById("corazones");

const musicaCarta = document.getElementById("musicaCarta");


// FUNCION PARA ABRIR LA CARTA

function abrirCarta() {
    sobre.classList.add("abierto");
    botonAbrir.classList.add("oculto");
    botonCerrar.classList.remove("oculto");

    instruccion.textContent =
        "Hay cosas que merecen decirse con el corazón. ♡";

    musicaCarta.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

    crearCorazones();
}


// FUNCION PARA CERRAR LA CARTA

function cerrarCarta() {
    sobre.classList.remove("abierto");
    botonCerrar.classList.add("oculto");
    botonAbrir.classList.remove("oculto");

    instruccion.textContent =
        "Hay algo que me gustaría que leyeras.";

    musicaCarta.pause();
    musicaCarta.currentTime = 0;
}


// FUNCION PARA CREAR CORAZONES

function crearCorazones() {

    // Simbolos que apareceran
    const simbolos = ["♡", "♥", "❤"];

    // Crear 12 corazones
    for (let i = 0; i < 12; i++) {

        const corazon = document.createElement("span");

        corazon.classList.add("corazon-flotante");

        // Elegir un corazon aleatorio
        corazon.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        // Posicion horizontal aleatoria
        corazon.style.left = Math.random() * 100 + "%";

        // Tiempo de espera aleatorio
        corazon.style.animationDelay =
            Math.random() * 1.5 + "s";

        // Tamaño aleatorio
        corazon.style.fontSize =
            (14 + Math.random() * 18) + "px";

        // Agregar el corazon a la pagina
        contenedorCorazones.appendChild(corazon);

        // Eliminarlo despues de la animacion
        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }
}


// CONECTAR LOS BOTONES

botonAbrir.addEventListener("click", abrirCarta);

botonCerrar.addEventListener("click", cerrarCarta);


// PERMITIR ABRIR TOCANDO EL SOBRE

sobre.addEventListener("click", () => {

    if (!sobre.classList.contains("abierto")) {

        abrirCarta();

    }

});
