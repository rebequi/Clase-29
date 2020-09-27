const cards = document.querySelectorAll(".card")
const buttons = document.querySelectorAll(".filtro-boton")
const filtroSexo = document.querySelectorAll("input[type ='radio']")
const filtroBusqueda = document.querySelector('#name')
const filtroColores = document.querySelectorAll(".filtro-colores")

console.log (filtroSexo)
console.log (filtroColores)



const hayAlgunCheckBoxChequeado = () => {
  for (checkbox of filtroColores) {
    console.log (checkbox)
    if (checkbox.checked) {
      return true
    }


  }
}



const hayAlgunRadioChequeado = () => {
  for (radio of filtroSexo) {
    console.log(radio)
    if (radio.checked) {

      return true
    }
  }
}
















//========================



// Este codigo es ejemplo para poder realizar tarea por tarea, o sea, separar funciones pequeñas para poder 
//hacer el recorrido de los checkbox


// const hayAlgunCheckBoxChequeado = () => {
//     for (checkbox of filtroColor) {
//       if (checkbox.checked) {
//         return true
//       }
//     }
//     return false
//   }

// Ver si el nombre escrito en el input coincide con el data nombre de la tarjeta

// const nombreEscritoPorElUsuario = () => {
// for (nombreDelGatito of filtroBusqueda) {
//     if (card.dataset.nombre===nombreDelGatito.includes(pippin) ) {
//         return true
//     }
// }
// }

// console.log (nombreEscritoPorElUsuario())























// =================================================================

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







