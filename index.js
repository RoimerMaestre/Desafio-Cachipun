//se inicia el juego mediante un (alert) indicando la bienvenida al juego
//se crea una variable para guardar la informacion solicitada a la persona mediante un promt que tendra un parseint para dar un numero entero
//luego mediante un alert le saldra a la persona una afirmacion con las cantidad de veces que desea jugar
//

alert("Bienvenido al juego, (ojala no explote)");
let jugadas = parseInt(prompt("¿Cuantas rondas deseas jugar?"));
alert("ok jueguemos " + jugadas + " veces");


//BUCLE FOR QUE HARA EL CONTEO DE LAS JUGADAS

for (let i = 0; i < jugadas; i++) {
  //Número al azar de la computadora
  let numeroAleatorio = Math.floor(Math.random() * 3);
  // console.log(numeroAleatorio);

  let maquinaOpcion;

  if (numeroAleatorio === 0) {
    maquinaOpcion = "tijera";
  } else if (numeroAleatorio === 1) {
    maquinaOpcion = "piedra";
  } else if (numeroAleatorio === 2) {
    maquinaOpcion = "papel";
  } else {
    maquinaOpcion = "Opción inválida";
  }
  console.log(maquinaOpcion);
  //dejare este console porque asi ibamos viendo como funcionaba la consola, se que no es buena pracita

  let opcionesJugador = prompt("elige tu opcion: piedra, papel o  tijera");
  //dejare este console porque asi ibamos viendo como funcionaba la consola, se que no es buena pracita
  console.log(opcionesJugador);

  if (opcionesJugador === maquinaOpcion) {
    alert("EMPATE");
  } else if (
    (opcionesJugador === "piedra" && maquinaOpcion === "tijera") ||
    (opcionesJugador === "papel" && maquinaOpcion === "piedra") ||
    (opcionesJugador === "tijera" && maquinaOpcion === "papel")
  ) {
    ganaste++;
    //dejare este console porque asi ibamos viendo como funcionaba la consola, se que no es buena pracita
    console.log(ganaste);
    alert("ganaste");
  } else {
    perdiste++;
    //dejare este console porque asi ibamos viendo como funcionaba la consola, se que no es buena pracita
    console.log(perdiste);
    alert("perdiste"); // Parece que aquí quisiste decir perdiste
  }

  
}
let ganaste = 0;
let perdiste = 0;
if (ganaste < perdiste) {
  alert("ERES UN PERDEDOR DE PRIMERA");
} else if (ganaste === perdiste) {
  alert("ESTO HA SIDO UN EMPATE");
} else {
  alert("HAS GANADO EL JUEGO");
}