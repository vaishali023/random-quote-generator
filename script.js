const createBtn = document.getElementById("create-btn");
const quoteGen = document.getElementById("quote");

let response = fetch("https://type.fit/api/quotes");

function findQuotes(){
    // e.preventDefault();
// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     quoteGen.innerHTML = ``;
//   });
}


//Event Listener
createBtn.addEventListener('submit', findQuotes);