# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| textContent desde app.js | El título cambió a Hola TECSUP. | Sí |
| style.color | El título cambió a color azul. | Sí |
| classList.add | El párrafo apareció con fondo amarillo. | Sí |
| createElement y appendChild | Se agregó JavaScript a la lista. | Sí |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara | Cuánto suma por acción |
|---|---|---|
| click | Un clic sobre el botón. | 1 |
| dblclick | Doble clic sobre el botón. | 1 |
| mouseover | Pasar el cursor sobre el botón. | 1 |

El evento.type mostró el nombre del evento que ocurrió.
El evento.target mostró el elemento HTML que recibió el evento.

## Ejercicio 4: Eventos input y submit

| Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo se actualizó mientras escribía. | No |
| Enviar sin preventDefault | La página se recargó y el campo correo quedó vacío. | Sí |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje de error en rojo. | No |
| Enviar con preventDefault, correo con @ | Apareció el mensaje Enviado con el correo. | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|---|---|---:|---:|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |

La clase permite crear varios productos usando la misma estructura, sin repetir código.
Además, sus métodos permiten calcular descuentos y mostrar la descripción de cada producto.