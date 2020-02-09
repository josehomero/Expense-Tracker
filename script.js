
var trItems = document.getElementById('tabel-row-items');
const button = document.getElementById('button');
const form = document.querySelector('form');
let whenInput = form.elements.when;


button.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(form.whenInput.value);
    //I was trying to grab the form and when input on the line above this one
});


const createTrElement = function (text) {
    var expenseTd = document.createElement('td');
    expenseTd.textContent = text;
    trItems.appendChild(expenseTd);
};