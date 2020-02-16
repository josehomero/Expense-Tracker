const form = document.querySelector('form');

const button = document.getElementById('button');
button.addEventListener('click', function(e) {
    e.preventDefault();
    var typeInput = form.type.value;
    var whenInput = form.when.value;
    var whereInput = form.where.value;
    var costInput = form.cost.value;

    createTrElement(typeInput,whenInput,whereInput,costInput);

    form.type.value = '';
    form.when.value = '';
    form.where.value = '';
    form.cost.value = '';
});

//button.addEventListener('click', function(e) {
  //  var expenseTr = document.createElement('tr');
    //tableBody.appendChild(expenseTr);
//})


var trItems = document.getElementById('table-row-items');
const tableBody = document.getElementById('table-body');

const table = document.getElementById('my-table');
//var row = table.insertRow(-1);
//console.log(row);
//row.insertCell(0).textContent = "new data";

console.log(tableBody);

const createTrElement = function(type,when,where,cost) {
    console.log("Type: ", type);
    console.log("When: ", when);
    console.log("Where: ", where);
    console.log("Cost: ", cost);
};
