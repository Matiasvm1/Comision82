const options = ["Piedra","Papel","Tijeras"]
var userChoice;
var botChoice;
function getBotChoice(){
    botChoice=options[Math.floor(Math.random()*3)];
    
}
function getUserChoice(){
    userChoice=prompt("Elige una opción: Piedra, papel o tijera");
}
function game(){
    getBotChoice();  //llamada a la funcion que obtiene el valor del bot
    getUserChoice();//llama a la función para obtener el usuario
    if(userChoice === botChoice){
        alert(`Empate`);
    }else if (userChoice === "Tijeras" && botChoice ==="Piedra") {
        alert("Perdiste");
    }else if(userChoice === "Tijeras" && botChoice === "Papel"){
        alert("Ganaste");
    } else if (userChoice === "Papel" && botChoice === "Piedra") {
        alert ("Ganaste");
    }else if(userChoice == "Papel" && botChoice === "Tijeras"){
        alert("Perdiste");
    }else if ( userChoice == "Piedra" && botChoice === "Papel"){
        alert("Perdiste");
    }else if(userChoice ==="Piedra" && botChoice === "Tijeras"){
        alert("Ganaste");
    }else{
        alert("Para jugar maneja las palabras Piedra Tijeras Papel");
    }

    alert(`Usuario: ${userChoice} \n Bot: ${botChoice}`);
  

    

}


