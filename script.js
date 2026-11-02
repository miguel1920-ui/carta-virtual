
// Obtener los elementos del HTML

const sobre = document.getElementById("sobre");

const botonAbrir = document.getElementById("botonAbrir");

const botonCerrar = document.getElementById("botonCerrar");

const instruccion = document.getElementById("instruccion");

const contenedorCorazones = document.getElementById("corazones");


// FUNCION PARA ABRIR LA CARTA

function abrirCarta() {

    // Agregar la clase que activa la animacion
    sobre.classList.add("abierto");

    // Ocultar el boton de abrir
    botonAbrir.classList.add("oculto");

    // Mostrar el boton de cerrar
    botonCerrar.classList.remove("oculto");

    // Cambiar el texto de instrucciones
    instruccion.textContent =
        "Hay cosas que merecen decirse con el corazón. ♡";

    // Crear corazones flotantes
    crearCorazones();
}


// FUNCION PARA CERRAR LA CARTA

function cerrarCarta() {

    // Quitar la clase de apertura
    sobre.classList.remove("abierto");

    // Ocultar el boton de cerrar
    botonCerrar.classList.add("oculto");

    // Mostrar nuevamente el boton de abrir
    botonAbrir.classList.remove("oculto");

    // Restaurar el texto inicial
    instruccion.textContent =
        "Hay algo que me gustaría que leyeras.";
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
