// Lista de productos
const productos = [
    {nombre: 'Platanos', valor: '500'},
    {nombre: 'Pera', valor: '500'},
    {nombre: 'Sandia', valor: '500'},
    {nombre: 'Melon', valor: '500'},
] 



// Aqui se almacena lo que el uduario escribe (lo de input)
const formulario = document.querySelector('#formulario');
// Aqui se registra el click al boton
const boton = document.querySelector('#boton');
// Constante de resultado
const resultado = document.querySelector('#resultado')

// Funcion donde filtra a consola lo que el usuario busca
const filtrar = () => {
    // console.log(formulario.value);

    resultado.innerHTML = '';
    // Lo que el usuario escribe pasar a minusculas tolowerCase
    const texto = formulario.value.toLowerCase()
    // recorrer todo el array productos
    for(let i of productos){
        let nombre = i.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${i.nombre} -Valor: ${i.valor}</li> 
            `
            
        }
    }
    
    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Producto no encontrado</li> 
        `
    }
}

// Evento al dar click buscar, se activa la funcion filtrar
boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)