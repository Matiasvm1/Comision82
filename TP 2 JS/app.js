//Ejercicio 1
let edad = parseInt(prompt('Ingrese la edad:'));
if (!isNaN(edad)) {

    if (edad > 17) {
        alert("Tiene edad para conducir.");
    } else {
        alert("No tiene edad para conducir.");
    }
} else {
    alert('Debe ingresar un numero');
}

//Ejercicio 2
let nota = parseInt(prompt('Ingrese la nota'));

if (!isNaN(nota)) {

    if (nota >= 0 && nota <= 10) {
        if (nota >= 0 && nota <= 2) {
            alert('Muy deficiente');
        }
        else if (nota >= 3 && nota <= 4) {
            alert('Insuficiente');
        }
        else if (nota >= 5 && nota <= 6) {
            alert('Suficiente');
        }
        else if (nota == 7) {
            alert('Bien');
        }
        else if (nota >= 8 && nota <= 9) {
            alert('Notable');
        }
        else {
            alert('Sobresaliente');
        }
    } else {
        alert('Error, ingrese una nota entre el rango de 0 a 10.');
    }
} else {
    alert('Ingrese un numero valido.');
}

//Ejercicio 3
let cadenas = '';

while (true) {
    let cadenasAux = prompt('Ingrese una cadena');

    if (cadenasAux === '' || cadenasAux === null) {
        break;
    }


    if (cadenas != '') {
        cadenas = cadenas.concat('-');
        cadenas = cadenas.concat(cadenasAux);
    } else {
        cadenas = cadenas.concat(cadenasAux);
    }

}
if (cadenas !== '') {
    alert(`La cadena es: ${cadenas}`);
} else {
    alert('No se introdujeron cadenas');
}
//Ejercicio 4
let sumador = 0;

while (true) {
    let numero = prompt('Ingrese un numero para sumar:');
    if (numero === null || numero === '') {
        break;
    }
    if (!isNaN(parseInt(numero))) {
        sumador += parseInt(numero);
    } else {
        alert("El valor no es un número");
    }

}
alert(sumador);
//Ejercicio 5

while (true) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let dni = prompt('Ingrese el dni: ');
    if (dni === null || dni === '') {
        break;
    }
    dni = parseInt(dni);
    if (!isNaN(dni)) {
        if (dni >= 0 && dni <= 99999999) {
            const resto = dni % 23;
            const letraDni = letras.charAt(resto);
            alert(`${letraDni} - DNI:${dni}`);

        } else {
            alert('Ingrese un numero en el intervalo solicitado.');
        }
    } else {
        alert('Ingrese un numero por favor.');
    }
}

//Ejercicio 6
for (let i = 1; i <= 30; i++) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
        linea += i;
    }

    console.log(linea);
}
//Ejercicio 7
let maximo = parseInt(prompt('Ingrese el numero maximo:'));
for (let i = maximo; i > 0; i--) {
    let linea = '';
    for (let j = 0; j < i; j++) {
        linea += i;
    }
    console.log(linea);
}
//Ejercicio 8

let maximo2 = parseInt(prompt('Ingrese el numero maximo:'));
for (let i = 1; i <= maximo2; i++) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
        linea += j;
    }

    console.log(linea);
}
//Ejercicio 9
let z=1;
for(let i=1;i<=500;i++){

    if(i%4===0){
    console.log(i+' es multiplo de 4');
    }else if(i%9===0){
    console.log(i+' es multiplo de 9');
    }else{
        console.log(i);
    }
    if(z===5){
        console.log('-------------------------------------');
        z=0;
    }
    z++; 

}
//Ejercicio 10
let fila = parseInt(prompt('Ingrese el numero de filas:'));
let columna = parseInt(prompt('Ingrese el numero de columnas'));
let total = fila * columna;

for (let i = 0; i < columna; i++) {
    let linea = "";
    for (let j = 0; j < fila; j++) {
        if (linea !== "") {

            linea += " " + total;
        } else {
            linea += total;

        }
        total--;
    }
    console.log(linea);
}
//Ejercicio 11
let edades = [];
let nombres = [];

for (let i = 0; i < 3; i++) {
    let edad = parseInt(prompt('Ingrese la edad:'));
    let nombre = prompt('Ingrese el nombre:');
    if (!isNaN(edad)) {
        edades.push(edad);
        nombres.push(nombre);
    } else {
        alert('Ingrese una edad valida.');
    }
}
let mayorEdad = 0;
let mayorNombre = '';
for (let i = 0; i < 3; i++) {
    if (edades[i] > mayorEdad) {
        mayorEdad = edades[i];
        mayorNombre = nombres[i];
    }
}
if(mayorNombre !==''){
    alert(`El usuario con mas edad es ${mayorNombre}, y tiene ${mayorEdad}`);
}else{
    alert('No se ingresaron edades validas.');
}
//Ejercicio 12
let numAleatorio =parseInt( Math.random()*100);
alert(numAleatorio);
//Ejercicio 13
let texto = prompt('Ingrese un texto:');
alert(texto.toUpperCase());
//Ejercicio 14
let cadenaTexto = prompt('Ingrese una cadena de texto:');
let cadenaTextoAux='';
for(let i=0;i<cadenaTexto.length;i++){
    let letra = cadenaTexto.charAt(i);
    if(cadenaTextoAux!==''){
        cadenaTextoAux+="-"+letra;
    }else{
        cadenaTextoAux+=letra;
    }
}
alert(cadenaTextoAux);
//Ejercicio 15
let vocales2 = 'aeiou';
let textoIntroducido= prompt('Ingrese un texto:').toLowerCase();
let nroVocales=0;

for(let i=0;i<textoIntroducido.length-1;i++){
    for(let j=0;j<5;j++){
        if(textoIntroducido.charAt(i)=== vocales.charAt(j)){
            nroVocales++;
        }

    }
}
alert("El numero de vocales es: "+nroVocales);
//Ejercicio 16
let cadenaInvertir = prompt('Ingrese una cadena de texto a invertir:');
alert(cadenaInvertir.split('').reverse().join(''));
//Ejercicio 17
function encontrarPrimeraVocal(texto) {
    const vocales3 = "aeiouAEIOU"; // Lista de vocales en minúsculas y mayúsculas

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if (vocales.includes(caracter)) {
            return i ; 
        }
    }

    return -1; // Si no se encuentra ninguna vocal, devuelve -1
}

const texto4 = prompt("Introduce un texto para encontrar la primera vocal:");
const posicion = encontrarPrimeraVocal(texto.toLowerCase()); // Convertir el texto a minúsculas

if (posicion !== -1) {
    alert("La primera vocal se encuentra en la posición " + posicion + ".");
} else {
    alert("No se encontraron vocales en el texto.");
}  