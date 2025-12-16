// qua seleziono dal DOM il div del timer e ci aggiungo progressivamente secondi
let timer = 30

const seconds = document.getElementById('seconds')

setInterval(() => {
  timer = timer - 1
  seconds.textContent = timer
  if (timer === 1) {
    // quando manca un secondo....
    alert('tempo scaduto!')
  }
}, 1000)
