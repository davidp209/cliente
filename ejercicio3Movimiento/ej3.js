﻿window.onload = function () {
  let listacuadrado = [];
  const numerodecuadrados = 5;

  class rectangulo {
    constructor() {
      this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.x = Math.random() * 575;
      this.y = 0;
      this.lado = 25;
      this.velocidad = 3 * Math.random() + 1;
      this.terminado = false;
    }
  }

  function crearListas() {
    for (let index = 0; index < numerodecuadrados; index++) {
      let rec1 = new rectangulo();

      listacuadrado.push(rec1);
    }
    //console.table(listacuadrado);
  }

  function generaAnimación() {
    let contadordecuadrados = 0;

    ctx.clearRect(0, 0, 600, 400);

    listacuadrado.forEach((element, indice) => {
      let elementodelarray = element;
      ctx.fillStyle = elementodelarray.color;
      ctx.fillRect(
        elementodelarray.x,
        elementodelarray.y,
        elementodelarray.lado,
        elementodelarray.lado
      );
      if (elementodelarray.y >= 375) {
        elementodelarray.terminado = true;
        contadordecuadrados++;
        listacuadrado.splice(indice, 1);
      } else if (elementodelarray.y = elementodelarray.y + elementodelarray.velocidad){
        if (elementodelarray.y > 375) {
          //esto es para que los cuadrados salgan en linea todos y no uno mas alto o bajo qeu otro
          elementodelarray.y = 375;
        }
      }
    });
    if (contadordecuadrados === numerodecuadrados) {
      clearInterval(id);
      console.log("terminado");
    }
  }

  // Obtenemos una referencia al canvas
  canvas = document.getElementById("miCanvas");

  // Y a su contexto 2d
  ctx = canvas.getContext("2d");

  crearListas();

  let id = setInterval(generaAnimación, 100);

  generaAnimación();
};
