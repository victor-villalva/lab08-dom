// Clase Mantenimiento
class Mantenimiento {
  constructor(placa, kilometraje, tipo) {
    this.placa = placa;
    this.kilometraje = kilometraje;
    this.tipo = tipo;
  }

  descripcion() {
    return this.placa + " - " + this.kilometraje + " km - " + this.tipo;
  }
}

// Arreglo para guardar los mantenimientos
const mantenimientos = [];

// Seleccionar elementos del HTML
const formulario = document.querySelector("#formulario");
const placa = document.querySelector("#placa");
const kilometraje = document.querySelector("#kilometraje");
const tipo = document.querySelector("#tipo");
const lista = document.querySelector("#lista");

// Evento para registrar un mantenimiento
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const mantenimiento = new Mantenimiento(
    placa.value.toUpperCase(),
    Number(kilometraje.value),
    tipo.value
  );

  mantenimientos.push(mantenimiento);

  mostrarMantenimientos();

  formulario.reset();
});

// Mostrar los mantenimientos en la página
function mostrarMantenimientos() {
  lista.innerHTML = "";

  mantenimientos.forEach((mantenimiento, indice) => {
    const li = document.createElement("li");
    li.textContent = mantenimiento.descripcion();

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";

    botonBorrar.addEventListener("click", () => {
      mantenimientos.splice(indice, 1);
      mostrarMantenimientos();
    });

    li.appendChild(botonBorrar);
    lista.appendChild(li);
  });
}