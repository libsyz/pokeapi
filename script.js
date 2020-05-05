console.log("I am connected!");


// Select the text that I have on the input - done
// Select the button - done

const inputPoke = document.querySelector(".form-control");
const searchButton = document.querySelector(".btn");
const abilities = document.querySelector(".abilities");
// Add an event listener to the button
// In the moment I click

searchButton.addEventListener('click', () => {
  // Do Magic!
  let pokemon = inputPoke.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(res => res.json()
    .then(data => {
      let strawberry = "yummy"
      abilities.innerHTML = '';
      data.abilities.forEach(ability => {
        abilities.innerHTML += `<li> ${ability.ability.name} </li>`
      })
      // Do more magic!
      // I need to find an element where I can insert the abilities

      }
    ))
  })
  // When I get the information back
  // Show the abilities into the website
