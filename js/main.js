// First list of people
const peopleOne = ["Janette", "Ligia", "Edris", "Dusty", "Annamarie", "Nelda", "Elvin", "Lilly", "Winfred", "Adrien", "Ludie", "Madelaine", "Chong", "Ginette", "Loan", "Otelia", "Antwan"]

// Second list of people
const peopleTwo = ["Glynis", "Ligia", "Edris", "Ora", "Dusty", "Annamarie", "Nelda", "Nolan", "Elvin", "Lilly", "Winfred", "Adrien","Madelaine", "Chong", "Loan"]

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

// pick single item from 3rd array