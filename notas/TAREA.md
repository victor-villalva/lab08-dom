
# Tarea: Mi componente interactivo

## Componente elegido

Registro de mantenimiento de vehículos.

El componente permite registrar mantenimientos de vehículos indicando su placa, kilometraje y tipo de mantenimiento. También permite eliminar los registros ingresados.

## Código principal

```js
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

const formulario = document.querySelector("#formulario");
const placa = document.querySelector("#placa");
const kilometraje = document.querySelector("#kilometraje");
const tipo = document.querySelector("#tipo");
const lista = document.querySelector("#lista");

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
```

## Pruebas realizadas

| Acción | Resultado esperado | Cumple (Sí/No) |
|---|---|---|
| Registrar ABC123, 85000 km, Preventivo | Aparece el mantenimiento en la lista. | Sí |
| Borrar un mantenimiento | El registro desaparece de la lista. | Sí |
| Registrar BCD456, 120000 km, Correctivo | Aparece el segundo mantenimiento. | Sí |

## Por qué diseñé así mi clase

Elegí placa, kilometraje y tipo porque son datos importantes para identificar un mantenimiento de vehículo.

El método descripcion permite mostrar la información de cada vehículo de manera ordenada.
