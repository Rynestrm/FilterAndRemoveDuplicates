// First list of people
const peopleOne = ["Janette", "Ligia", "Edris", "Dusty", "Annamarie", "Nelda", "Elvin", "Lilly", "Winfred", "Adrien", "Ludie", "Madelaine", "Chong", "Ginette", "Loan", "Otelia", "Antwan"]

// Second list of people
const peopleTwo = ["Glynis", "Ligia", "Edris", "Ora", "Dusty", "Annamarie", "Nelda", "Nolan", "Elvin", "Lilly", "Winfred", "Adrien","Madelaine", "Chong", "Loan"]

const winnerAlert = document.querySelector("#winner");
const winnerBtn = document.querySelector("#winnerBtn");

// Selects each div to display lists
const listOne = document.querySelector(".list1");
const listTwo = document.querySelector(".list2");
const listThree = document.querySelector(".list3");

// loops over each array and outputs all items
peopleOne.forEach (function(person){
    listOne.innerHTML += '<li>' + person + '</li>'
});

peopleTwo.forEach (function(person){
    listTwo.innerHTML += '<li>' + person + '</li>'
});

const peopleBoth = [...peopleOne, ...peopleTwo];

function removeDuplicates(){
    const peopleThree = peopleBoth.filter((value, index) => peopleBoth.indexOf(value) !== index);
    peopleThree.forEach (function(person){
        listThree.innerHTML += '<li>' + person + '</li>'
    });
    return contestants = peopleThree;
}
removeDuplicates();

// pick single item from 3rd array
let winner = contestants[Math.floor(Math.random()*contestants.length)];

function chicken(){
    winnerAlert.classList.remove("d-none");
    winnerAlert.innerHTML = `
    Congrats ${winner}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    `;
}

winnerBtn.addEventListener("click", chicken);