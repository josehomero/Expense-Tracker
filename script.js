const form = document.querySelector('form');

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


var trItems = document.getElementById('table-row-items');
const createTrElement = function (text) {

    const tableBody = document.getElementById('table-body');
    var row = tableBody.insertRow(0);
    
    insertItems = row.expenseTd(0);
    var expenseTd = document.createElement('td');
    expenseTd.textContent = text;
    trItems.appendChild(expenseTd);
};

console.log(trItems);
