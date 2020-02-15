const form = document.querySelector('form');

//this information from line 5 to 23 is to make inputs and they
//are working as expexted
const button = document.getElementById('button');
button.addEventListener('click', function(e) {
    e.preventDefault();
    var typeInput = form.type;
    createTrElement(typeInput.value);
    typeInput.value = '';
    
    var whenInput = form.when;
    createTrElement(whenInput.value);
    whenInput.value = '';

    var whereInput = form.where;
    createTrElement(whereInput.value);
    whereInput.value = '';

    var costInput = form.cost;
    createTrElement(costInput.value);
    costInput.value = '';
});

// trItems are the tr element in the html file
var trItems = document.getElementById('table-row-items');
const tableBody = document.getElementById('table-body');

const table = document.getElementById('my-table');
var row = table.insertRow(-1);
console.log(row);
row.insertCell(0).textContent = "new data";
//function to append inputs

const createTrElement = function (text) {
    var expenseTd = document.createElement('td');
    expenseTd.textContent = text;
    //This is where I need help, the td elements are being 
    //appended on the same row
    trItems.appendChild(expenseTd);
};
