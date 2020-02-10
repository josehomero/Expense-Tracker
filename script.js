
var trItems = document.getElementById('tabel-row-items');
const button = document.getElementById('button');
const form = document.querySelector('form');



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


const createTrElement = function (text) {
    var expenseTd = document.createElement('td');
    expenseTd.textContent = text;
    trItems.appendChild(expenseTd);
};