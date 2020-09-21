const cards = document.querySelectorAll (".card") 
// seleccione todas las cartas
const buttons = document.querySelectorAll (".filtro-boton")
console.log (buttons)

const sexo = document.querySelectorAll ("input[type ='radio']")
const filtroBusqueda = document.querySelector ('#name')

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


