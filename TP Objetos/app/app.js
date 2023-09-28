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



