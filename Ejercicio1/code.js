let notas = [];
let salir = false;
let contador = 0; 
//A Introudcir una nota al principio
//B Introducir una nota al final
do {
    let notaPrincipio = parseInt(window.prompt("Escribe la nota para el principio"));
    let notaFinal = parseInt(window.prompt("Escribe la nota para el final"));

    notas.unshift(notaPrincipio);
    notas.push(notaFinal); 

     decision = window.prompt("Si deseas salir escribe 1 si deseas poner otra nota escriba 2");
    
     if (decision == 1) {
        salir = true;
    }
    contador++
} while (!salir);

//C Subir todas las notas por puntos
let notaSubir = parseInt(window.prompt("Cuantos puntos deseas subir la nota"));

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 10){
        notas[i] = notas[i] + notaSubir; 
        if(notas[i] >= 10){
            notas[i] = 10; 
        }
    }else{
        notas[i] = 10; 
    } 
}
console.table(notas); 

//D Calcular estadisticas actuales 
let mediaNota = 0;
let moda = 0; 

for(let i = 0; i < notas.length; i++){
    mediaNota = mediaNota + notas[i]; 
}
if(notas == 0){
    console.log("No se pueden hacer calculos de las notas poruqe no hay datos");
}else{
    console.table(notas);
    console.log(`La nota menor es ${Math.min(...notas)}`);
    console.log(`La nota mayor es ${Math.max(...notas)}`);
    console.log("La media de todas las notas es: " + mediaNota / notas.length);
}

//E Vaciar notas
let vaciar = parseInt(window.prompt("Si deseas vaciar la lista pulse 1 si deseas dejar la lista pulse 2"));
if(vaciar == 1){
    for(let i = 0; i < notas.length; i++){
        notas.shift(); 
        notas.pop(); 
    }
    console.log("La lista de notas se ha eliminado con exito");
}else{
    console.log("Has elegido no vaciar la lista");
}

console.table(notas); 

//F Inicializar N notas a valor X
let numeroNotasGenerar = parseInt(window.prompt("Escribe el numero de notas que deseas generar"));
let valorNota= parseInt(window.prompt("Escribe el valor de las notas que deseas generar"));
let contador2 = 0;
if(vaciar == 1){
    do {
        notas.unshift(valorNota);

        contador2++; 
    } while (contador2 < numeroNotasGenerar);
}else{
    console.log("Para poder generar la tabla nueva debes vaciar la anterior");
}
console.table(notas); 

//G Eliminar la primera nota
if(notas.length === 0){
    console.log("La lista esta vacia"); 
}else{
    notas.shift(); 
    console.table(notas);
}

//H Eliminar la segunda nota
if(notas.length >= 1){
    notas.splice(1,1);
    console.table(notas);
}else{
    console.log("No hay una segunda nota para eliminar");
}

//I Establecer a 0 todos los suspensos
for(let i = 0; i < notas.length; i++){
    if(notas[i] < 5){
        notas[i] = 0; 
    }
}
console.table(notas); 

//J Sustituir una nota por otra
let notaSubstituida = parseInt(window.prompt("Escribe la nota que deseas substituir"));
let notaSubstitucion = parseInt(window.prompt("Escribe la nota que substituye la anterior"));

for(let i = 0; i < notas.length; i++){
    if(notas[i] == notaSubstituida){
        notas[i] = notaSubstitucion; 
    }
}
console.table(notas); 

//K Añadir una nota en una posición determinada
let notaPosicion = parseInt(window.prompt("La nota nueva que deseas insertar en la lista"));
let posicion = parseInt(window.prompt("Escribe en que posicion deseas insertar la nota"));

notas.splice(posicion,0,notaPosicion); 
console.table(notas);
//L Contar el numero de suspensos
let contadorSuspensos = 0;

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 5){
        contadorSuspensos++
    }
}

console.log("Hay un total de " + contadorSuspensos + " suspensos en la lista");

//M Salir