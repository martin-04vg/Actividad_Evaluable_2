//A. Añadir un libro
let biblioteca = new Map();
let salir = false;

function crearLibro() {
    let isbn = window.prompt("Introduce el ISBN");
    if (biblioteca.has(isbn)) {
        alert("Ese ya existe");
    } else {
        let titulo = window.prompt("Introduce el título: ");
        let autor = window.prompt("Introduce el autor: ");
        let ejemplares = parseInt(window.prompt("Introduce el numero de ejemplares: "));

        let libro = {
            titulo: titulo,
            autor: autor,
            ejemplares: ejemplares
        };

        biblioteca.set(isbn, libro);
        console.log("Libro añadido correctamente");
    }
}


//B. Eliminar un libro
function elminarLibro() {
    let eliminar = window.prompt("Introduce el ISBN: ");

    if (biblioteca.has(eliminar)) {
        biblioteca.delete(eliminar);
        console.log("Libro eliminado con exito");
    } else {
        console.log("No existe ningun libro con ese isbn");
    }
}


//C. Consultar un libro
function consultarLibro() {
    let consultar = window.prompt("Introduce el ISBN: ");

    if (biblioteca.has(consultar)) {
        let libro = biblioteca.get(consultar);

        console.log("ISBN: " + consultar + "\nTítulo: " + libro.titulo + "\nAutor: " + libro.autor + "\nEjemplares: " + libro.ejemplares);
    } else {
        console.log("El libro no existe");
    }
}


//D. Mostrar un catalogo
function mostrarCatalogo() {
    let catalogo = "";
    for (let [isbn, libro] of biblioteca) {
        catalogo += "ISBN: " + isbn + "\nTítulo: " + libro.titulo + "\nAutor: " + libro.autor + "\nEjemplares: " + libro.ejemplares + "\n----------------------------\n";
    }

    if (biblioteca.size === 0) {
        console.log("El catalogo esta vacio");
    } else {
        console.log(catalogo + "\nTotal de libros registrados: " + biblioteca.size);
    }

}

//E. Modificar ejemplares
function modificarEjemplares() {
    let modificar = window.prompt("Introduce el ISBN");

    if (biblioteca.has(modificar)) {
        let cantidad = parseInt(window.prompt("Introduce la nueva cantidad: "));
        let libro = biblioteca.get(modificar);
        libro.ejemplares = cantidad;
        console.log("Ejemplares modificados con exito");
    } else {
        console.log("El libro no existe");
    }

}

//F. Buscar libros de un autor
function buscarLibros() {
    let buscarAutor = window.prompt("Introduce el autor: ");
    let encontrados = "";

    for (let [isbn, libro] of biblioteca) {
        if (libro.autor.toLowerCase() === buscarAutor.toLowerCase()) {
            encontrados += "ISBN: " + isbn + "\nTitulo: " + libro.titulo + "\nAutor: " + libro.autor + "\nEjemplares: " + libro.ejemplares + "\n------------------\n";
        }
    }

    if (encontrados === "") {
        console.log("No se han encontrado libros de ese autor.");
    } else {
        console.log(encontrados);
    }
}


//G. Prestar un libro
function prestarLibro() {
    let prestar = window.prompt("Introduce el ISBN: ");
    if (biblioteca.has(prestar)) {
        let libro = biblioteca.get(prestar);

        if (libro.ejemplares > 0) {
            libro.ejemplares--;

            console.log("Libro prestado. \n" + "Ejemplares restantes: " + libro.ejemplares);
        } else {
            console.log("No quedan disponibles");
        }
    }
}


//H. Devolver un libro
function devolverLibro() {
    let devolver = window.prompt("Introduce el ISBN:");
    if (biblioteca.has(devolver)) {
        let libro = biblioteca.get(devolver);
        libro.ejemplares++;

        console.log("Libro entregado. \n" + "Ejemplares disponibles: " + libro.ejemplares);
    } else {
        console.log("Ese libero no existe");
    }
}


//I. Mostrar estadisticas
function mostrarEstadisticas() {
    let total = 0;
    let libroMayor = null;
    let isbnMayor = null;

    for (let [isbn, libro] of biblioteca) {
        total += libro.ejemplares;

        if (libroMayor === null || libro.ejemplares > libroMayor.ejemplares) {
            libroMayor = libro;
            isbnMayor = isbn;
        }
    }

    let mensaje = "Total de libros registrados " + biblioteca.size + "\nTotal de ejemplares disponibles: " + total;

    if (libroMayor !== null) {
        let mensaje2 = "Libro con más ejemplares:" + "\nISBN: " + isbnMayor + "\nTitulo " + libroMayor.titulo + "\nAutor " + libroMayor.autor + "\nEjemplares " + libroMayor.ejemplares;
        console.log(mensaje2);
    }

    console.log(mensaje);
}



//J. Vaciar Ccatalogo: Eliminar todos los libros del mapa
function vaciar() {
    biblioteca.clear();
    console.log("El catálogo ha sido vaciado");
}


//K. Salir: Finalizar programa

do {

    let entrada = prompt(`Escribe las siguientes letras para poder ejecutar las siguientes funciones:
A. Añadir un libro
B. Eliminar un libro
C. Consultar un libro
D. Mostrar catálogo
E. Modificar ejemplares
F. Buscar libros de un autor
G. Prestar un libro
H. Devolver un libro
I. Mostrar estadísticas
J. Vaciar catálogo: Eliminar todos los libros del mapa.
K. Salir: Finalizar el programa.
`);

    switch (entrada?.toLowerCase().trim()) {
        case "a":
            crearLibro();
            break;
        case "b":
            elminarLibro();
            break;
        case "c":
            consultarLibro();
            break;
        case "d":
            mostrarCatalogo();
            break;
        case "e":
            modificarEjemplares();
            break;
        case "f":
            buscarLibros();
            break;
        case "g":
            prestarLibro();
            break;
        case "h":
            devolverLibro();
            break;
        case "i":
            mostrarEstadisticas();
            break;
        case "j":
            vaciar();
            break;
        case "k":
            salir = true;
            console.log("Programa finalizado");
            break;
        default:
            console.log("Letra no reconocida");

    }

} while (!salir);