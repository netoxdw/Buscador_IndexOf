// Aqui se almacena lo que el uduario escribe (lo de input)
const formulario = document.querySelector('#formulario');
// Aqui se registra el click al boton
const boton = document.querySelector('#boton');

// Funcion donde filtra a consola lo que el usuario busca
const filtrar = () => {
    console.log(formulario.value);
}

// Evento al dar click buscar, se activa la funcion filtrar
boton.addEventListener('click', filtrar)