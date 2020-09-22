const cards = document.querySelectorAll (".card") 
// seleccione todas las cartas
const buttons = document.querySelectorAll (".filtro-boton")
const sexo = document.querySelectorAll ("input[type ='radio']")
const filtroBusqueda = document.querySelector ('#name')
const botonCheckbox = document.querySelectorAll ('.filtro-checkbox')

console.log (botonCheckbox)

// fin de los selectores

filtroBusqueda.onkeydown = () => {
    console.log ("hola")
    for (let card of cards) {
        const busquedaNormalizada = filtroBusqueda.value.toLowerCase()
        if (card.dataset.nombre.includes (busquedaNormalizada)) {
            card.classList.remove('borrar')
        }
            else {
                card.classList.add('borrar')
            }
        }

    } 

// convertir todos los botones de colores a checkbox

// 1. cada vez que el usuario selecicona checkbox, se filtra por ese colores
// no tienen que funcionar todos los checkbox a la vez
// 2, solo cuando esto este listo hacer que todos los checkbox funcionen a la vez



for (let boton of botonCheckbox) {
    botonCheckbox.onclick = () => {
        if (botonCheckbox.checked) {
            for (let card of cards) {
                if (botonCheckbox.value === card.dataset.colores) {
                    card.classList.remove('borrar')
                }
                else if (botonCheckbox.value ==='todos') {
                    card.classList.remove('borrar')
                }
                else {
                    card.classList.add ('borrar')
                }
            }
        }
    }
}





