import random from "./random.js"

var player1; //True o False
var nuevoJuego;//Primer juego

const sortearPartida = document.querySelector("#ranGame");

sortearPartida.onclick = () => {
    player1 = random(nuevoJuego)
}