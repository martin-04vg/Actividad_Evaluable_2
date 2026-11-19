//A. Añadir un libro
let libros = new Map(); 
let salir = false; 

do {
    let ISBN = window.prompt("Escribe el ISBN y que no se repita");
    let titulo = window.prompt("Escribe el titulo del libro");
    let autor = window.prompt("Escribe el autor");
    let numEjemplares = window.prompt("Escribe el numero de ejemplares");

    libros.set(ISBN, titulo, autor, numEjemplares);

    decision = window.prompt("Si ya no vas a meter mas libros escribe 1 si deseas insertar mas escribe 2"); 
    
    if (decision == 1) {
        salir = true;
    }

} while (!salir);

console.table(libros); 

//B. Eliminar un libro

//C. Consultar un libro

//D. Mostrar un catalogo

//E. Modificar ejemplares

//F. Buscar libros de un autor

//G. Prestar un libro

//H. Devolver un libro

//I. Mostrar estadisticas

//J. Vaciar Ccatalogo: Eliminar todos los libros del mapa

//K. Salir: Finalizar programa