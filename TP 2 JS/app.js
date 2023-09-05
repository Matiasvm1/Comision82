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
