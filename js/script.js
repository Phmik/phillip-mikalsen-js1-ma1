

// QUESTION 1

const cat = {
    type: "animal",
    name: "Bob",
    complain: function(){
        console.log(this.name + " " + "Meows!")
    }
}
cat.complain();

// QUESTION 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// QUESTION 3

heading.style.fontSize = "2em";

// QUESTION 4

heading.innerHTML = '<div class="subheading"></div>';

// QUESTION 5

const paragraphSeeker = document.querySelectorAll("p");
for(let i = 0; i < paragraphSeeker.length; i++) {
    paragraphSeeker[i].style.color = "red";
}

// QUESTION 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = '<p>New paragraph</p>';
resultsContainer.style.backgroundColor = "yellow";

// QUESTION 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
]; 

function list(cats) {
    for(let i = 0; i < cats.length; i++){
        console.log(cats[i].name)
    }
}

list(cats);

// QUESTION 8

const catContainer = document.querySelector(".cat-container")


function createCats(cats) {
    let catsHTML = "";
    
    for(let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";
        if(cats[i].age){
            catAge = cats[i].age;
        }

        catsHTML = catsHTML + 
        `<div><h5>${cats[i].name} </h5>
        <p>${catAge}</p></div>`
    }
    catContainer.innerHTML = catsHTML;
}
    createCats(cats);