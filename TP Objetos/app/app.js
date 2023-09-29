// // //------------------Ejercicio 1------------------
// // class Auto {
// //     constructor(marca,modelo,color){
// //         this.marca = marca;
// //         this.modelo = modelo;
// //         this.color = color;
// //         this.estado = false;
// //     }

// //     encender(){
// //     if(this.estado == false){
// //         this.estado = true;
// //         console.log("Se encendio el vehiculo.");
// //     }else{
// //         console.log("El vehiculo ya esta encendido");
// //         }
// //     }

// //     apagar(){
// //         if (this.estado ==true)  {
// //             this.estado = false;
// //             console.log('Vehiculo Apagado');
// //         }else{
// //             console.log("Debe encende el vehiculo primero.");
// //         }
// //     }
// // }
// // const camioneta = new Auto("Volskwagen","Amarok","Negra");
// // camioneta.encender();
// // camioneta.apagar();
// // //-------------------Ejercicio 2---------------------------
// // class Cuenta {
// //     constructor(titular){
// //         this.titular = titular;
// //         this.saldo = 0;
// //     }

// //     depositar(cantidad){
// //         this.saldo += cantidad;
// //     }

// //     retirar(cantidad){
// //         if(this.saldo-cantidad >= 0){
// //             this.saldo -= cantidad;
// //             console.log(`Se retiro ${cantidad} de la cuenta.`);
// //         }else{
// //             console.log("No cuenta con ese dinero en cuenta.");  
// //         }     
// //     }

// //     informar(){
// //         console.log(`${this.titular}, tu saldo es: $${this.saldo}`);
// //     }

// // }

// // const primerCliente = new Cuenta ("Alex");
// // primerCliente.depositar(4000);
// // primerCliente.informar();
// // primerCliente.retirar(3500);
// // primerCliente.informar();
// // primerCliente.retirar(1000);
// // //------------------Ejercicio 3 --------------
// // class Rectangulo{
// //     constructor(base,altura){
// //     this.base = base;
// //     this.altura = altura;
// //     }
// //     getBase(){
// //         return this.base;
// //     }
// //     setBase(baseNueva){
// //     this.base = baseNueva;
// //     console.log(`La base ahora mide ${baseNueva}`);
// //     }
// //     getAltura(){
// //         return this.altura;
// //     }
// //     setAltura(alturaNueva){
// //     this.altura = alturaNueva;
// //     console.log(`La altura ahora mide ${alturaNueva}`);
// //     }
// //     perimetro(){
// //         const perimetroAux = (this.getBase()*2)+(this.getAltura()*2);
// //         console.log(`El perimetro es ${perimetroAux}.`);
// //     }

// //     area(){
// //         const areaAux = (this.getBase()*this.getAltura());
// //         console.log(`El area es ${areaAux}.`);
// //     }
// // }

// // const rectangulo1 = new Rectangulo(1,4);
// // const rectangulo2 = new Rectangulo(2,6);

// // rectangulo1.area();
// // rectangulo1.perimetro();
// // rectangulo2.area();
// // rectangulo2.perimetro();
// // //------------------Ejercicio 4 ------------------
// // class Product{
// //     constructor(codigo,nombre,precio){
// //         this.codigo = codigo;
// //         this.nombre = nombre;
// //         this.precio = precio;
// //     }

// //     getCodigo(){
// //         return this.codigo;
// //     }
// //     setCodigo(codigoNuevo){
// //         this.codigo = codigoNuevo;
// //     }
// //     getNombre(){
// //         return this.nombre;
// //     }
// //     setNombre(nombreNuevo){
// //         this.nombre=nombreNuevo;
// //     }
// //     getPrecio(){
// //         return this.precio;
// //     }
// //     setPrecio(precioNuevo){
// //         this.precio= precioNuevo;
// //     }

// //     imprimir(){
// //         console.log(`Codigo: ${this.codigo}`);
// //         console.log(`Nombe: ${this.nombre}`);
// //         console.log(`Precio: ${this.precio}`);
// //     }

// // }

// // const producto1 = new Product("0000","Old Spice",4500);
// // const producto2 = new Product("0001","New Spice",9500);
// // const producto3 = new Product("0002","Used Spice",6500);

// // const Productos = [producto1,producto2,producto3];
// // Productos.forEach(element => {
// //     element.imprimir();
// // });
// //-------------------Ejercicio 5------------------
// class Persona{
//     constructor (nombre,edad,sexo,peso,altura,anioNac){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//         this.anioNac = anioNac;
//     }

//     mostrarGeneracion(){
//         if(this.anioNac >= 1994 && this.anioNac <= 2010){
//             console.log(`Nombre de la generacion: Generacion Z.`);
//             console.log(`Marco Temporal: 1994 - 2010.`);
//             console.log(`Poblacion de la generacion: 7800000.`);
//             console.log(`Circunstancia Historica: Expansion masiva de internet.`);
//             console.log(`Rasgo Caracteristico: Irreverencia 😋`);
//         }else if(this.anioNac <= 1993 && this.anioNac >= 1981){
//             console.log(`Nombre de la generacion: Generacion Y.`);
//             console.log(`Marco Temporal: 1981 - 1993.`);
//             console.log(`Poblacion de la generacion: 7200000.`);
//             console.log(`Circunstancia Historica: Inicio de la Digitalizacion.`);
//             console.log(`Rasgo Caracteristico: Frustracion 😖`);
//         }else if(this.anioNac >= 1969 && this.anioNac <=1980){
//             console.log(`Nombre de la generacion: Generacion X.`);
//             console.log(`Marco Temporal: 1969 - 1980.`);
//             console.log(`Poblacion de la generacion: 9300000.`);
//             console.log(`Circunstancia Historica: Crisis del 73 y transicion española.`);
//             console.log(`Rasgo Caracteristico: Obsesion por el éxito. 😎`);
//         }else if(this.anioNac >= 1949 && this.anioNac <= 1968){
//             console.log(`Nombre de la generacion: Baby Boom.`);
//             console.log(`Marco Temporal: 1949 - 1968.`);
//             console.log(`Poblacion de la generacion: 12200000.`);
//             console.log(`Circunstancia Historica: Paz y explosión demografica.`);
//             console.log(`Rasgo Caracteristico: Ambicion 🤑`);
//         }else if(this.anioNac >= 1930 && this.anioNac <= 1948){
//             console.log(`Nombre de la generacion: Silent Generation.`);
//             console.log(`Marco Temporal: 1930 - 1948.`);
//             console.log(`Poblacion de la generacion: 6300000.`);
//             console.log(`Circunstancia Historica: Conflictos Belicos.`);
//             console.log(`Rasgo Caracteristico: Austeridad 😐`);
//         }else{
//             console.error("No existe una población con ese rango.");
//         }
//     }
//     esMayorDeEdad(){
//         if(this.edad >=18){
//             console.log(`${this.nombre} tiene ${this.edad} y es mayor.`)
//         }else{
//             console.log(`${this.nombre} tiene ${this.edad} y no es mayor.`)
//         }
//     }
//     mostrarDatos(){
//         console.log(`Nombre: ${this.nombre}\n Sexo: ${this.sexo} \n Edad: ${this.edad} \n Dni: ${this.dni} \n Peso: ${this.peso} \n Altura: ${this.altura} \n Año de Nacimiento: ${this.anioNac}`);

//     }

//     generaDNI(){
//         let band = false;
//         do{
//         let dni = Math.floor((Math.random())*100000000);
//         if(dni >= 10000000 && dni <= 99999999){
//             this.dni = dni;
//             console.log(this.dni);
//             band = true;
//         }
//         }while(!band);
//     }
// }

// const Matias = new Persona("Matias",23,"H",95,181,2000);
// const Gaston = new Persona("Gaston",17,"H",70,170,2007);
// const Rodrigo = new Persona ("Rodrigo",56,"M",130,1120,1943);

// Matias.generaDNI();
// Gaston.generaDNI();
// Rodrigo.generaDNI();

// Matias.esMayorDeEdad();
// Gaston.esMayorDeEdad();
// Rodrigo.esMayorDeEdad();

// Matias.mostrarGeneracion();
// Gaston.mostrarGeneracion();
// Rodrigo.mostrarGeneracion();

// Matias.mostrarDatos();
// Gaston.mostrarDatos();
// Rodrigo.mostrarDatos();

// //---------------Ejercicio 6 ------------------
// class Libro {
//     constructor (titulo, autor,isbn,paginas) {
//         this.titulo= titulo;
//         this.autor = autor;
//         this.isbn = isbn;
//         this.paginas = paginas;
//     }
//     getTitulo(){
//         return this.titulo;
//     }
//     setTitulo(tituloNuevo){
//         this.titulo = tituloNuevo;
//     }
//     getAutor(){
//         return `El autor es ${this.autor}`;
//     }
//     setAutor(autorNuevo){
//         this.autor = autorNuevo;
//     }
//     getIsbn(){
//         return`el ISBN del libro es: ${this.isbn}` ;
//     }
//     setIsbn(isbnNuevo){
//         this.isbn = isbnNuevo;
//     }
//     getPaginas(){
//         return this.paginas;
//     }
//     setPaginas(paginasNuevas){
//         this.paginas = paginasNuevas;
//     }

//     mostrarLibro(){
//         console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor}, tiene un total de ${this.paginas} paginas.`);
//     }    

// }

// const mayorPaginas = (libro1,libro2) =>{
//     if(libro1.getPaginas() > libro2.getPaginas()){
//         console.log(`${libro1.getTitulo()} tiene mas paginas que ${libro2.getTitulo()}`);
//     }else{
//         console.log(`${libro2.getTitulo()} tiene mas paginas que ${libro1.getTitulo()}`);
//     }
// }



// const miLibro1 = new Libro("La vida es bella", "<GASTON PERALTA>", "978-3452",300);
// const miLibro2 = new Libro("La vida es hermosa", "<JULIAN PERALTA>", "978-4000",320);


// miLibro1.mostrarLibro();
// miLibro2.mostrarLibro();
// mayorPaginas(miLibro1,miLibro2);

// // ----------------Ejercicio 7 -----------------------
// class Contacto {
//     constructor(nombre, numero) {
//         this.nombre = nombre;
//         this.numero = numero;
//     }
//     getNombre() {
//         return this.nombre;
//     }
//     setNombre(nombreNuevo) {
//         this.nombre = nombreNuevo;
//     }
//     getNumero() {
//         return this.numero;
//     }
//     setNumero(numeroNuevo) {
//         this.numero = numeroNuevo;
//     }

//     imprimir() {
//         console.log(`Nombre: ${this.nombre} \n Numero: ${this.numero}`);
//     }
// }

// class Agenda {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.contactos = [];
//     }

//     getNombre() {
//         return this.nombre;
//     }
//     setNombre(nombreNuevo) {
//         this.nombre = nombreNuevo;
//     }
//     addContacto(contacto) {
//         if (this.contactos.length < 10) {
//             this.contactos.push(contacto);
//         } else {
//             console.log("La agenda esta llena.");
//         }
//     }
//     existeContacto(nombre) {
//         let band = true;
//         this.contactos.forEach(element => {
//             if (element.nombre === nombre) {
//                 console.log(`${nombre} esta en la agenda.`);
//                 band = false;
//             }
//         });
//         if (band == true) {
//             console.log(`${nombre} no se encuentra en la agenda.`);
//         }
//     }
//     listarContactos() {
//         console.table(this.contactos, ["nombre", "numero"]);
//     }

//     buscarContacto(nombre) {
//         this.contactos.forEach(element => {
//             if (element.nombre === nombre) {
//                 console.log(`El numero de ${element.nombre} es ${element.numero}`);
//             }
//         });
//     }
//     eliminarContacto(nombre) {
//         this.contactos.forEach(element => {
//             if (nombre === element.nombre) {
//                 this.contactos.splice(this.contactos.indexOf(element), 1);
//             }
//         });
//     }

//     agendaLlena() {
//         if (this.contactos.length == 10) {
//             console.log("La agenda esta llena.");
//         } else {
//             console.log('La agenda no esta llena.');
//         }
//     }

//     huecosLibres() {
//         let contadorHueco = 10 - this.contactos.length;
//         console.log(`Hay un total de ${contadorHueco} huecos libres`);
//     }
// }

// const agendaAux = new Agenda("Agenda Matias");
// const menuAgenda = () => {
//     let band = true;
//     do {
//         let opcion = parseInt(prompt('Ingrese la opcion que desea: \n 1. Añadir Contacto 2. Contacto Existente. \n 3.Listar Contactos. 4. Buscar Contacto \n 5. Estado de Agenda 6. Eliminar Contactos. \n 7. Huecos disponibles. 8. Salir'));

//             switch (opcion) {
//                 case 1: 
//                         let contactoAux = new Contacto(prompt('Ingrese el nombre del contacto:'),parseInt(prompt('Ingrese el numero del contacto:')));
//                         agendaAux.addContacto(contactoAux);
//                     break;
//                 case 2:
//                         let nombreAux = prompt('Ingrese el nombre del contacto a buscar:');
//                         agendaAux.existeContacto(nombreAux);
//                     break;
//                 case 3:
//                         agendaAux.listarContactos();
//                     break;
//                 case 4:
//                         let nombreAux2 = prompt('Ingrese el nombre del contacto a buscar:');
//                         agendaAux.buscarContacto(nombreAux2);
//                     break;
//                 case 5:
//                         agendaAux.agendaLlena();
//                     break;
//                 case 6:
//                         let nombreAux3 = prompt('Ingrese el nombre del contacto que quiere eliminar:');
//                         agendaAux.eliminarContacto(nombreAux3);
//                     break;

//                 case 7:
//                         agendaAux.huecosLibres();
//                     break;
//                 case 8:
//                         alert('Usted a decidido salir del menu.');
//                         band = false;
//                     break;
//                 default:
//                     alert('Ingrese una opcion valida.');
//                     break;
//             }


//     } while (band === true);

// }


// menuAgenda();
// //--------------------Ejercicio 8 ----------------------
class Persona{
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;    
    }

    getNombre(){
        return this.nombre;
    } 
    setNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }
    getEdad(){
        return this.edad;
    }
    getProfesion(){
        return this.profesion;
    }

    saludar(nombre){
        console.log(`Hola ${nombre} como estas? Mi nombre es ${this.nombre}, tengo ${this.edad} y soy ${this.profesion}`);
    }

    despedirse(nombre){
        console.log(`Chau ${nombre}, nos vemos.`);
    }
}

// const matias = new Persona("Matias",23,"Ingeniero en Sistemas");
// const paula = new Persona ("Paula",21,"Contador Publico");

// matias.saludar(paula.getNombre());
// paula.saludar(matias.getNombre());
// matias.despedirse(paula.getNombre());
// paula.despedirse(matias.getNombre());
// //------------------------------Ejercicio 9 -------------------
// class Animal {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     emitirSonido() {
//     }
// }

// class Gato extends Animal {
//     constructor(nombre, edad) {
//         super(nombre, edad);
//     }

    
//     emitirSonido() {
//         console.log("Miau Miau");
//     }

// }
// class Perro extends Animal {
//     constructor(nombre, edad) {
//         super(nombre, edad);
//     }


//     emitirSonido() {
//         console.log("Guau Guau");
//     }

// }


// const tony = new Perro("Tony",23);
// const minu = new Gato("Minu",8);


// tony.emitirSonido();
// minu.emitirSonido();

//-----------------------------Ejercicio 10 -------------------------
class Avion{
    
    constructor(nombre,capacidad,destino){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }

    addPasajero(persona){
        if(this.pasajeros.length < this.capacidad){
            this.pasajeros.push(persona);
            console.log(`${persona.getNombre()} fue agregada a la lista de pasajeros del avion ${this.nombre}.`);
        }else{
            console.log(`El avion ${this.nombre} esta llena.`);
        }
    }
}

class Aeropuerto{
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto;
        this.aviones = [];
    }
    getNombre(){
        return nombre;
    }
    setNombre(nombreNuevo){
        this.nombreAeropuerto= nombreNuevo;
    }

    addAviones(avion){
        this.aviones.push(avion);
    }

    searchAvion(nombreAvion){
    let band = true;
        this.aviones.forEach(element => {
            if(nombreAvion == element.nombre ){
                console.table(element,["Nombre","Capacidad","Destino"]);
                console.table(element.pasajeros.map(pasajero =>({
                    Nombre: pasajero.getNombre(),
                    Edad:   pasajero.getEdad(),
                    Profesion: pasajero.getProfesion(),
                })));
                band=false;
            }
        });

        if (band==true){
            console.log(`El avion ${nombreAvion} no se encuentra en el Aeropouerto ${this.nombreAeropuerto}`);
        }
    }

}
const juan = new Persona("Matias Villafañe",23,"Ingeniero en Sistemas");
const lucia = new Persona("Lucia Miranda",28,"Contador Publico");
const julian= new Persona("Julian Peralta",23,"Medico");
const jose = new Persona("Jose Villafañe",23,"Contador Publico");
const patricia = new Persona("Patricia",53,"Abogada");

const avion1 = new Avion("Avion1",4,"Buenos Aires");
avion1.addPasajero(juan);
avion1.addPasajero(lucia);
avion1.addPasajero(julian);
avion1.addPasajero(jose);
avion1.addPasajero(patricia);
const avion2 = new Avion("Avion2",3,"Cordoba");
avion2.addPasajero(juan);
avion2.addPasajero(lucia);
avion2.addPasajero(julian);
avion2.addPasajero(jose);
avion2.addPasajero(patricia);
const avion3 = new Avion("Avion3",5,"Tucuman");
avion3.addPasajero(juan);
avion3.addPasajero(lucia);
avion3.addPasajero(julian);
avion3.addPasajero(jose);
avion3.addPasajero(patricia);

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
aeropuertoInternacional.addAviones(avion1);
aeropuertoInternacional.addAviones(avion2);
aeropuertoInternacional.addAviones(avion3);

aeropuertoInternacional.searchAvion("Avion1");
aeropuertoInternacional.searchAvion("Avion2");
aeropuertoInternacional.searchAvion("Avion3");

