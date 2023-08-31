//Ejercicio 1
alert('Un mensaje');
//Ejercicio2
document.write('Hello World');
//Ejercicio 3
alert(3+5);
//Ejercicio 4
var nombre =prompt('Indique su nombre:');
alert("Hola " +nombre );
//Ejercicio 5
var num1 = parseInt(prompt('Indique el primer numero:'));
var num2 = parseInt(prompt('Indique el segundo numero:'));
alert(num1+num2);
//Ejercicio 6
var num3 = parseInt(prompt('Indique el primer numero:'));
var num4 = parseInt(prompt('Indique el segundo numero:'));
alert(Math.max(num3,num4));
//Ejercicio 7
var num5 = parseInt(prompt('Indique el primer numero:'));
var num6 = parseInt(prompt('Indique el segundo numero:'));
var num7 = parseInt(prompt('Indique el tercer numero:'));
alert(Math.max(num5,num6,num7));
//Ejercicio 8
var num8 = parseInt(prompt('Ingrese un numero: '));
if(num8%2===0){
    alert(num8 + ' es divisible por 2.');
}else{
    alert (num8+' no es divisible por dos.') ;
}
//Ejercicio 9
const vocales = ['a','e','i','o','u'];
const frase = prompt('Escriba una frase:');
let fraseAux =' ';
function esVocal(caracter){
    return vocales.includes(caracter);
}
for(let i=0;i<frase.length;i++){
    const caracter = frase[i];
    if(esVocal(caracter)){
        fraseAux += caracter;
    }
}
alert(fraseAux);

Ejercicio10
var numero9 = parseInt(prompt('Ingrese un numero:'));
if(numero9 % 2 === 0){
    alert ('El número '+numero9+' es divisible por dos.');
}else if(numero9 % 3 ===0){
    alert ('El número '+numero9+' es divisible por tres.');
}else if (numero9 % 5 === 0){
    alert ('El número '+numero9+' es divisible por cinco.');
}else if (numero9 % 7 === 0) {
    alert('El numero ' + numero9 + ' es divisible por 7');
}else{
    alert('El numero '+ numero9+ ' no es divisible por: 2,3,5,7');
}
//Ejercicio 11
function esDivisible(numero, divisor) {
    return numero % divisor === 0;
  }
  
  function mostrarDivisibilidad(numero) {
    let mensaje = `El ${numero} es divisible por `;
  
    if (esDivisible(numero, 2)) {
      mensaje += "2";
    }
  
    if (esDivisible(numero, 3)) {
      mensaje += (mensaje.endsWith("2") ? " y " : "") + "3";
    }
  
    if (esDivisible(numero, 5)) {
      mensaje += (mensaje.endsWith("2") || mensaje.endsWith("3") ? " y " : "") + "5";
    }
  
    if (esDivisible(numero, 7)) {
      mensaje += (mensaje.endsWith("2") || mensaje.endsWith("3") || mensaje.endsWith("5") ? " y " : "") + "7";
    }
  
    mensaje += ".";
    alert(mensaje);
  }
  
 
  const numero = parseInt(prompt("Ingrese un número:"));
  

  mostrarDivisibilidad(numero);