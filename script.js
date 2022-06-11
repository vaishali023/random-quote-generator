const createBtn = document.getElementById("create-btn");
const quoteGen = document.getElementById("quote");

function findQuotes(){
    // e.preventDefault();
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // quoteGen.innerHTML = 
  });
}


//Event Listener
createBtn.addEventListener('submit', findQuotes);