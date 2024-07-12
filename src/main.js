import { renderItems } from "./view.js";

import data from "./data/dataset.js";

import dataFunctions from "./dataFunctions.js";

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);

const selectores = document.querySelector("#epoca");
const selectoresOrden = document.querySelector("#nombre");
const botonborrar = document.getElementById("borrar");
const botonData = document.getElementById("datosestadisticosDisney");


function filtrarAño90() {
  const copyData =[...data];
  const filtrarAño90 = dataFunctions.filterByEpocaUno(copyData);
  const listaDePeliculas1 = renderItems(filtrarAño90);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas1);
}

function filtrarAño00() {
  const copyData =[...data];
  const filtrarAño00 = dataFunctions.filterByEpocaDos(copyData);
  const listaDePeliculas2 = renderItems(filtrarAño00);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas2);
}

function filtrarAño10() {
  const copyData =[...data];
  const filtrarAño10 = dataFunctions.filterByEpocaTres(copyData);
  const listaDePeliculas3 = renderItems(filtrarAño10);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas3);
}

function filtrarAño20() {
  const copyData =[...data];
  const filtrarAño20 = dataFunctions.filterByEpocaCuatro(copyData);
  const listaDePeliculas4 = renderItems(filtrarAño20);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas4);
}

function ordenarAZ() {
  const copyData =[...data];
  const ordenarAscendente = dataFunctions.sortByName(copyData);
  const listaNombre1 = renderItems(ordenarAscendente);
  elementos.innerHTML = "";
  elementos.appendChild(listaNombre1);
}

function ordenarZA() {
  const copyData =[...data];
  const ordenarDescendente = dataFunctions.reverseByName(copyData);
  const listaNombre2 = renderItems(ordenarDescendente);
  elementos.innerHTML = "";
  elementos.appendChild(listaNombre2);
}

function borrarFiltrosYOrden() {
  const listaOriginal = renderItems(data);
  elementos.innerHTML = "";
  elementos.appendChild(listaOriginal);
  selectores.selectedIndex=0;
  selectoresOrden.selectedIndex=0;
}
  
function datosEstadisticos() {
  const copyData = [...data];

  const datoDuracion = document.querySelector("#duracion");
  const datoNota = document.querySelector("#nota");

  datoDuracion.innerHTML = "Las peliculas, en promedio, duran: " + dataFunctions.computeStats(copyData) + " minutos.";
  datoNota.innerHTML = "En promedio, la calificación es de: " + dataFunctions.computeStatsNota(copyData) + " según IMDb.";
}

const contenido = document.querySelector('.contenido-oculto');
botonData.addEventListener("click", ()=> {
  datosEstadisticos();
  contenido.style.display = 'block';
});

selectores.addEventListener("change", (event) => {
  const valor = event.target.value;
  switch (valor) {
  case "1990":
    filtrarAño90();
    break;
  case "2000":
    filtrarAño00();
    break;
  case "2010":
    filtrarAño10();
    break;
  case "2020":
    filtrarAño20();
    break;
  default:
    break;
  }
});

selectoresOrden.addEventListener("change", (e) => {
  const valor = e.target.value;
  switch (valor) {
  case "Asc":
    ordenarAZ();
    break;
  case "Desc":
    ordenarZA();
    break;
  default:
    break;
  }
});

botonborrar.addEventListener("click", borrarFiltrosYOrden);

