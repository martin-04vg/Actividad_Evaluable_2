/**
 * A. Inscribir un participante
 * a. Solicitar el nombre de un participante
 * b. Añadirlo al conjunto
 * c. No permitir nombres duplicados
 */
let set_participantes = new Set();
let salir = false;
let salir2 = false;

function inscribirParticipante() {
    do {
        let participantes = window.prompt("Escribe el nombre del participante");
        set_participantes.add(participantes);

        decision = window.prompt("Si ya no vas a meter mas participantes escribe 1 si deseas insertar mas escribe 2");

        if (decision == 1) {
            salir = true;
        }

    } while (!salir);

    console.table(set_participantes);
    console.log(set_participantes);
}


/**
 * B. Dar de baja un participante
 * a. Solicitar nombre
 * b. Eliminarlo del conjunto si existe
 * c. Informar si no se encuentra
 */
function bajaParticipante() {
    let participanteBaja = window.prompt("Introduce el nombre de la persona que deseas dar de baja");
    if (set_participantes.delete(participanteBaja)) {
        console.log("Participante eliminado de la lista");
    } else {
        console.log("El participante no existe en la lista / Escribe bien el nombre");
    }

    console.log(set_participantes);
}


/**
 * C. Comprobar inscripción
 * a. Solicitar nombre
 * b. Indicar si está inscrito en la actividad
 */
function comprobarInscripcion() {
    let comprobarParticipante = window.prompt("Introduce el nombre de la persona que deseas comprobar que esta en la lista");

    if (set_participantes.has(comprobarParticipante)) {
        console.log("El participante que estas comporobando existe en la lista");
    } else {
        console.log("No existe el participante en la lista");
    }
}


/**
 * D. Mostrar participantes
 * a. Recorrer el conjunto y mostrar todos los participantes inscritos
 * b. Mostrar el número total de participantes. 
 */
function mostrarParticipantes() {
    for (let participante of set_participantes) console.log(participante);
    console.log("En la lista ahora mismo hay un total de " + set_participantes.size + " participantes");
}


/**
 * E. Vaciar inscripciones: Eliminar todos los participantes del conjunto
 */
function vaciarInscripciones() {
    for (let participante of set_participantes) set_participantes.delete(participante);
    console.log("Ya no existen participantes en la lista");
    console.log(set_participantes);

}


do {

    let entrada = prompt(`Escribe las siguientes letras para poder ejecutar las siguientes funciones:
A. Inscribir un participante
B. Dar de baja un participante
C. Comprobar inscripción
D. Mostrar participantes
E. Vaciar inscripciones: Eliminar todos los participantes del conjunto
F. Salir`);

    switch (entrada?.toLowerCase().trim()) {
        case "a":
            inscribirParticipante();
            break;
        case "b":
            bajaParticipante();
            break;
        case "c":
            comprobarInscripcion();
            break;
        case "d":
            mostrarParticipantes();
            break;
        case "e":
            vaciarInscripciones();
            break;
        case "f":
            salir2 = true;
            console.log("Programa finalizado");
            break;
        default:
            console.log("Letra no reconocida");

    }

} while (!salir2);


