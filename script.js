/*const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
*/

// Validação formulário//

const form = document.getElementsByName('formcont')

const campos = document.querySelectorAll('required')
const p = document.getElementsByClassName('visible')
const emailregex = ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

function nameValidate(){
      if(campos{0}.value.length < 4)
      {
          console.log('Nome deve ter pelo menos 3 caracteres')
      }
      else
      {
          console.log('Nome validado') 
      }




    }


/*
username.classList.add('correct')

errormessages[1].classList.add('visible')
*/

// Mostrar pop obrigatório//


// Ocultar pop obrigatório //



// Validar input //


