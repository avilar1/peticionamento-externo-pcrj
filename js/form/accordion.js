//let click = false
const accordion = document.querySelector("[data-accordion]")
const checkbox = document.querySelector("#check-terceiros")

const nomeCompletoInteressado = document.querySelector('#nomeCompletoInteressado')
const cpfInteressado = document.querySelector('#cpfInteressado')

accordion.disabled = true;

// nomeCompletoInteressado.required = false;
// cpfInteressado.required = false;


checkbox.addEventListener('change', function() {
  if (this.checked) {
    accordion.disabled = false;

    nomeCompletoInteressado.required = true;
    cpfInteressado.required = true;

  } else {
    accordion.disabled = true;
    nomeCompletoInteressado.required = false;
    cpfInteressado.required = false;
  }
})







// accordion.addEventListener('click', (e) => {
//     checkbutton() 

// })

// function checkbutton() {

//       click = !click
//       click?(checkbox.checked = click):checkbox.checked = click
//       console.log(click)
//   }