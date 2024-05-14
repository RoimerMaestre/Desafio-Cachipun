//se inicia el juego mediante un (alert) indicando la bienvenida al juego
//se crea una variable para guardar la informacion solicitada a la persona mediante un promt que tendra un parseint para dar un numero entero
//luego mediante un alert le saldra a la persona una afirmacion con las cantidad de veces que desea jugar
//Se crearan dos variables las cuales llevaran el contador de ganadas y perdidas.
//luego se genera un bucle for el cual se repetira las cantidades de veces que el usuario coloco jugar, esto se hara mediante la condicion escrita al i que esta dentro del bucle, en este caso mientras i < jugadas.
//luego se crea una variable dentro  con un math floor(math.random)*3 para escoger un numero entre el 0 y el 2
//lego se crea otra variable que se encargara de guardar si la maquina escogio piedra, papel o tijera, se tomara el numero al azar escogido por la maquina y mediante un condicional le expresaremos que si = toma 0 sera igual a tijera, si toma 1 sera igual a piedra y si toma 2 sera igual papel, de esta manera nos aseguramos que la maquina tenga una opcion
//luego mediante un prompt le pedimos al usuario que ingrese su opcion, piedra papel o tijera
//luego mediante un if se comparan las opciones, dentro del if se colocaran solo las opciones ganadoras usando || para separarlas, luego con un else if si son extrictamente iguales sera un empate y al final mediante un else se coloca que de lo contrario perdera. se colocara de igual forma dentro de los condicionales que la variable ganaste o perdiste sumen contadores
//luego al final mediante un if se comparan los dos contadores, ganaste o perdiste, en este caso quien tenga mas punto gana y saltara un alert informando si fuiste o no el ganador.

alert("BIENVENIDO AL JUEGO, (OJALA NO EXPLOTE ESTA VAINA)");
let numeroRondas = parseInt(prompt("¿CUANTAS RONDAS DESEAS JUAGAR?"));
alert("Ok, JUGUEMOS " + numeroRondas + " VECES");
let ganadas = 0;
let perdidas = 0;

// BUCLE FOR QUE HARÁ EL CONTEO DE LAS JUGADAS
for (let i = 0; i < numeroRondas; i++) {
  // Número al azar de la computadora
  let opcionMaquina = Math.floor(Math.random() * 3);
  let opcionMaquinaTexto;

  if (opcionMaquina === 0) {
    opcionMaquinaTexto = "tijera";
  } else if (opcionMaquina === 1) {
    opcionMaquinaTexto = "piedra";
  } else if (opcionMaquina === 2) {
    opcionMaquinaTexto = "papel";
  } else {
    opcionMaquinaTexto = "Opción inválida";
  }

  let opcionJugador = prompt("ELIGE UNA OPCION, piedra, papel o tijera");

  if (opcionJugador === opcionMaquinaTexto) {
    alert("EMPATE");
  } else if (
    (opcionJugador === "piedra" && opcionMaquinaTexto === "tijera") ||
    (opcionJugador === "papel" && opcionMaquinaTexto === "piedra") ||
    (opcionJugador === "tijera" && opcionMaquinaTexto === "papel")
  ) {
    ganadas++;
    alert("¡GANASTE!");
  } else {
    perdidas++;
    alert("PERDISTE");
  }
}

if (ganadas < perdidas) {
  alert("¡HAS PERDIDO!");
} else if (ganadas === perdidas) {
  alert("¡HA SIDO UN EMPATE!");
} else {
  alert("¡HAS GANADO EL JUEGO!");
}
