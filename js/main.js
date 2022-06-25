const elItem = document.querySelector(".product-item");
const elText = document.querySelector(".product-text");


elItem.addEventListener("click", function(evt){
  evt.preventDefault()
  for ( let creates of pokemons){
    elText.textContent = "No info"
  }

})