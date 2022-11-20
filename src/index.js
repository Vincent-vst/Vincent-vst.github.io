let i = 0
let txt = 'Choisir une categorie'
let speed = 50
function typewriter() {

    if (i < txt.length) {
        document.getElementById('typewriter').innerHTML += txt.charAt(i)
        i++
        setTimeout(typewriter, speed)
    }
}
typewriter()

