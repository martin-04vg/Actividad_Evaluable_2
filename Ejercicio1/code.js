let notas = [];
let salir = false;
let salir2 = false;
let contador = 0;
let vaciar = 0;
//A Introudcir una nota al principio
function introducirNotaPrincipio() {
    do {
        let notaPrincipio = parseInt(window.prompt("Escribe la nota para el principio"));
        notas.unshift(notaPrincipio);

        decision = window.prompt("Si deseas salir escribe 1 si deseas poner otra nota escriba 2");

        if (decision == 1) {
            salir = true;
        }
        contador++
    } while (!salir);

    console.table(notas);
}

//B Introducir una nota al final
function introducirNotaFinal() {
    do {
        let notaFinal = parseInt(window.prompt("Escribe la nota para el final"));
        notas.push(notaFinal);

        decision = window.prompt("Si deseas salir escribe 1 si deseas poner otra nota escriba 2");

        if (decision == 1) {
            salir = true;
        }
        contador++
    } while (!salir);

    console.table(notas);
}


//C Subir todas las notas por puntos
function subirNotas() {
    let notaSubir = parseInt(window.prompt("Cuantos puntos deseas subir la nota"));

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 10) {
            notas[i] = notas[i] + notaSubir;
            if (notas[i] >= 10) {
                notas[i] = 10;
            }
        } else {
            notas[i] = 10;
        }
    }
    console.table(notas);
}


//D Calcular estadisticas actuales 
function calcularEstadisticas() {
    let mediaNota = 0;
    let moda = 0;

    for (let i = 0; i < notas.length; i++) {
        mediaNota = mediaNota + notas[i];
    }
    if (notas.length === 0) {
        console.log("No se pueden hacer calculos de las notas poruqe no hay datos");
    } else {
        console.table(notas);
        console.log(`La nota menor es ${Math.min(...notas)}`);
        console.log(`La nota mayor es ${Math.max(...notas)}`);
        console.log("La media de todas las notas es: " + mediaNota / notas.length);
    }
}

//E Vaciar notas
function vaciarNotas() {
    vaciar = parseInt(window.prompt("Si deseas vaciar la lista pulse 1 si deseas dejar la lista pulse 2"));
    if (vaciar == 1) {
        for (let i = 0; i < notas.length; i++) {
            notas.shift();
            notas.pop();
        }
        console.log("La lista de notas se ha eliminado con exito");
    } else {
        console.log("Has elegido no vaciar la lista");
    }

    console.table(notas);
}

//F Inicializar N notas a valor X
function inicializarNotas() {
    let numeroNotasGenerar = parseInt(window.prompt("Escribe el numero de notas que deseas generar"));
    let valorNota = parseInt(window.prompt("Escribe el valor de las notas que deseas generar"));
    let contador2 = 0;
    if (vaciar == 1) {
        do {
            notas.unshift(valorNota);

            contador2++;
        } while (contador2 < numeroNotasGenerar);
    } else {
        console.log("Para poder generar la tabla nueva debes vaciar la anterior");
    }
    console.table(notas);
}

//G Eliminar la primera nota
function eliminarPrimera() {
    if (notas.length === 0) {
        console.log("La lista esta vacia");
    } else {
        notas.shift();
        console.table(notas);
    }
}

//H Eliminar la segunda nota
function eliminarSegunda() {
    if (notas.length >= 1) {
        notas.splice(1, 1);
        console.table(notas);
    } else {
        console.log("No hay una segunda nota para eliminar");
    }
}

//I Establecer a 0 todos los suspensos
function establecerCero() {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            notas[i] = 0;
        }
    }
    console.table(notas);
}

//J Sustituir una nota por otra
function sustituirNota() {
    let notaSubstituida = parseInt(window.prompt("Escribe la nota que deseas substituir"));
    let notaSubstitucion = parseInt(window.prompt("Escribe la nota que substituye la anterior"));

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] == notaSubstituida) {
            notas[i] = notaSubstitucion;
        }
    }
    console.table(notas);
}

//K Añadir una nota en una posición determinada
function posicionDeterminada() {
    let notaPosicion = parseInt(window.prompt("La nota nueva que deseas insertar en la lista"));
    let posicion = parseInt(window.prompt("Escribe en que posicion deseas insertar la nota"));

    notas.splice(posicion, 0, notaPosicion);
    console.table(notas);
}

//L Contar el numero de suspensos
function contarSuspensos() {
    let contadorSuspensos = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            contadorSuspensos++
        }
    }


    console.log("Hay un total de " + contadorSuspensos + " suspensos en la lista");
}



do {

    let entrada = prompt(`Escribe las siguientes letras para poder ejecutar las siguientes funciones:
A. Introducir una nota al principio
B. Introducir una nota al final
C. Subir todas las notas X puntos
D. Calcular estadísticas actuales
E. Vaciar notas
F. Inicializar N notas a valor X
G. Eliminar la primera nota
H. Eliminar la segunda nota
I. Establecer a 0 todos los suspensos
J. Sustituir una nota por otra
K. Añadir una nota en una posición determinada
L. Contar el número de suspensos
M. Salir: Finalizar la ejecución del programa`);

    switch (entrada?.toLowerCase().trim()) {
        case "a":
            introducirNotaPrincipio();
            break;
        case "b":
            introducirNotaFinal();
            break;
        case "c":
            subirNotas();
            break;
        case "d":
            calcularEstadisticas();
            break;
        case "e":
            vaciarNotas();
            break;
        case "f":
            inicializarNotas();
            break;
        case "g":
            eliminarPrimera();
            break;
        case "h":
            eliminarSegunda();
            break;
        case "i":
            establecerCero();
            break;
        case "j":
            sustituirNota();
            break;
        case "k":
            posicionDeterminada();
            break;
        case "l":
            contarSuspensos();
            break;
        case "m":
            salir2 = true;
            console.log("Programa finalizado");
            break;
        default:
            console.log("Letra no reconocida");

    }

} while (!salir2);


