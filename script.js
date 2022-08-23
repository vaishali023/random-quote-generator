const createBtn = document.getElementById("create-btn");
let quoteGen = document.querySelector(".quote");
let author = document.querySelector(".author");

function findQuotes(){
 
fetch('https://api.quotable.io/random')
.then(response => response.json())
 .then(quotes => {

   quoteGen.innerHTML = quotes.content;
  
    author.innerHTML = quotes.author;
 }  
   );
}
