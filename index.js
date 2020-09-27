const cards = document.querySelectorAll(".card")
const buttons = document.querySelectorAll(".filtro-boton")
const filtroSexo = document.querySelectorAll("input[type ='radio']")
const filtroBusqueda = document.querySelector('#filtro-nombre')
const filtroColores = document.querySelectorAll(".filtro-colores")

console.log (filtroSexo)
console.log (filtroColores)
console.log (filtroBusqueda)




//                      PASO 1. 

// Aqui vamos a realizar la funcion pasa filtros, si cumple con el filtro me retonra true
// 1. Debemos revisar si hay algo escrito en el input
// Si hay algo escrito en el input TIENE que coincidir con la tarjeta para que devuelva true
// Si esto no coincide debe retornar false

const pasaFiltros = (card) => {

  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)){
      return true
    }
    else {
      return false
    }
  }
  else {
    return
  }

}


//                                PASO 2 
// funciones para mostrar/ocultar tarjetS

const ocultarTarjeta = (card) => {
  return card.classList.add("borrar")
}

const mostrarTarjeta = (card) => {
  return card.classList.remove("borrar")
}



//                                PASO 3 
// funciones paracl filtrar las tarjetas, ya sea agregando las funciones anteriores si es 
// para borrar o agregar la clase "borrar"


const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta (card)
    }
    else {
      ocultarTarjeta(card)
    }
  }
}


//                      PASO 4. Aqui comparamos que lo escrito por el usuario sea lo que contiene la tarjeta

const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}



//                      PASO 5  Aqui estoy REVISANDO si hay algun checkbox chequeado, si es asi me retorna true



const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColores) {
    console.log (checkbox)
    if (checkbox.checked) {
      return true
    }


  }
  return false
}
console.log (hayAlgunCheckBoxChequeado())


//                      PASO 6. Aqui estoy REVISANDO si hay algun RADIO chequeado, si es asi me retorna true

const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {
    console.log(radio)
    if (radio.checked) {

      return true
    }
  }
  return false
}

console.log (hayAlgunRadioChequeado())


//                      PASO 7.Ver si el nombre escrito en el input coincide con el data nombre de la tarjeta, si es asi ME RETORNA TRUE

const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true
  }
}

filtroBusqueda.oninput = () => {

  filtrarTarjetas()
}




























// ================================================================= este era el codigo anterior D:

// Aqui estoy hacciendo funcion para busqueda del nombre de los gatitos por su nombre en el input

// filtroBusqueda.onkeydown = () => {
//     console.log ("hola")
//     for (let card of cards) {
//         const busquedaNormalizada = filtroBusqueda.value.toLowerCase()
//         if (card.dataset.nombre.includes (busquedaNormalizada)) {
//             card.classList.remove('borrar')
//         }
//             else {
//                 card.classList.add('borrar')
//             }
//         }

    // } 

// convertir todos los botones de colores a checkbox

// 1. cada vez que el usuario selecicona checkbox, se filtra por ese colores
// no tienen que funcionar todos los checkbox a la vez // listo
// 2, solo cuando esto este listo hacer que todos los checkbox funcionen a la vez

// Aqui estoy hacciendo filtrando los gatitos por su color por medio de los check box

// for (let boton of botonCheckbox) {
//     boton.onclick = () => {
//         if (boton.checked) {
//             for (let card of cards) {
//                 if (boton.value === card.dataset.colores) {
//                     card.classList.remove('borrar')
//                 }
//                 else if (boton.value ==='todos') {
//                     card.classList.remove('borrar')
//                 }

//                 else if (boton.value === card.dataset.colores.checked){
//                     console.log ("deben desaparecer los gatitos que no estan s")
//                 }


//                 else {
//                     card.classList.add ('borrar')
//                 }
//             }
//             for (let card of cards) {

//             }


//         }
//     }
// }







