//Ejercicio 1
const mesesList = () => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < meses.length; i++) {
        document.write("<li>" + meses[i] + "</li>");
    }
}


//Ejercicio 2
const cityList = () => {
    let cities = [];
    let band = true;
    while (band) {
        let city = prompt('Ingrese la ciudad:');
        if (city == null || city == 0) {
            document.write(`El arreglo de ciudades tiene ${cities.length} elementos.`)
            document.write(`<li>La ciudad en la primera posicion es: ${cities[0]}</li>`);
            document.write(`<li>La ciudad en la tercera posicion es: ${cities[2]}</li>`);
            cities.push("Paris");
            document.write(`<li>La ciudad en la ultima posicion es: ${cities[cities.length - 1]}</li><br>`);
            cities[1] = "Barcelona"
            band = false;
        } else {
            cities.push(city);
        }
    }
    for (let i = 0; i < cities.length; i++) {
        document.write('<li>' + cities[i] + '</li>');
    }
}

//Ejercicio 3

const dado = () => {
    const resultados = [];
    const conteo = [];
    for (let i = 0; i < 11; i++) {
        conteo[i] = 0;
    }
    let dado1, dado2;
    let suma;
    for (let i = 0; i < 50; i++) {
        dado1 = Math.floor(Math.random() * 7);
        dado2 = Math.floor(Math.random() * 7);
        suma = dado1 + dado2;
        resultados.push([suma]);
    }
    resultados.forEach(resultado => {
        conteo[resultado]++;
    })
    document.write("🎲 Veces");
    for (let i = 2; i < 13; i++) {
        document.write(`<p>${i} &nbsp;&nbsp;&nbsp;&nbsp; ${conteo[i - 2]}</p>`);
    }
}

//Ejercicio 4

const isPar = (numero) => {
    if (numero % 2 === 0) {
        return "Es par";
    }
    else {
        return "Es impar";
    }
}

const evaluar = () => {
    let numero = parseInt(prompt('Ingrese un numero:'));
    const imparOPar = isPar(numero);
    document.write(imparOPar);
}

//Ejercicio 5
const cadenaData = (cadena) => {
    if (cadena === 0 || cadena === null || cadena === "") {
        return "Ingrese cadena valida.";
    } else if (cadena === cadena.toUpperCase()) {
        return "La cadena solo tiene mayusculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena solo tiene minusculas.";
    } else {
        return "La cadena tiene mayusculas y minusculas.";

    }
}

const imputCadena = () => {
    const cadena = prompt('Escriba una palabra');
    const cadenaAux = cadenaData(cadena);
    document.write(`${cadenaAux}`);
}
//Ejercicio 6

const perimetroRectangulo = (base, altura) => {
    return ((base + altura) * 2);
}

const sacarPerimetroRect = () => {
    const base = parseFloat(prompt('Base del rectángulo: '));
    const altura = parseFloat(prompt('Altura del rectángulo: '))
    const perimetroAux = perimetroRectangulo(base, altura);
    document.write(perimetroAux);
}

//Ejercicio 7 
const tabla = (numero) => {
    let resultado;
    for (i = 1; i <= 10; i++) {
        resultado = numero * i;
        document.write(`<p>${numero} x ${i}= ${resultado}</p>`);
    }
}

const numTabla = () => {
    let numero = Number(prompt("Introduzca el número a multiplicar"));
    tabla(numero);
}



