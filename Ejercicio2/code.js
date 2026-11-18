/**
 * A. Inscribir un participante
 * a. Solicitar el nombre de un participante
 * b. Añadirlo al conjunto
 * c. No permitir nombres duplicados
 */
let set_participantes = new Set(); 
let salir = false; 

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

/**
 * B. Dar de baja un participante
 * a. Solicitar nombre
 * b. Eliminarlo del conjunto si existe
 * c. Informar si no se encuentra
 */
let participanteBaja = window.prompt("Introduce el nombre de la persona que deseas dar de baja");
if(set_participantes.delete(participanteBaja)){
    console.log("Participante eliminado de la lista"); 
}else{
    console.log("El participante no existe en la lista / Escribe bien el nombre");
}

console.log(set_participantes); 

/**
 * C. Comprobar inscripción
 * a. Solicitar nombre
 * b. Indicar si está inscrito en la actividad
 */
let comprobarParticipante = window.prompt("Introduce el nombre de la persona que deseas comprobar que esta en la lista");

if(set_participantes.has(comprobarParticipante)){
    console.log("El participante que estas comporobando existe en la lista");
}else{
    console.log("No existe el participante en la lista"); 
}

/**
 * D. Mostrar participantes
 * a. Recorrer el conjunto y mostrar todos los participantes inscritos
 * b. Mostrar el número total de participantes. 
 */
for (let participante of set_participantes) console.log(participante); 
console.log("En la lista ahora mismo hay un total de " + set_participantes.size + " participantes");   

/**
 * E. Vaciar inscripciones: Eliminar todos los participantes del conjunto
 */
for(let participante of set_participantes) set_participantes.delete(participante);
console.log("Ya no existen participantes en la lista");
console.log(set_participantes);