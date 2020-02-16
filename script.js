const form = document.querySelector('form');

//The buuton from the html is called
const button = document.getElementById('button');
//button is applied to eventListener
button.addEventListener('click', function(e) {
    e.preventDefault();
    //variables are made to target the different inputs in the html bt their names
    var typeInput = form.type.value;
    var whenInput = form.when.value;
    var whereInput = form.where.value;
    var costInput = form.cost.value;
    //createTrElement is applied to the different variables
    createTdElement(typeInput,whenInput,whereInput,costInput);
    //a string value is given to the variables to allow the inserted data to pass
    form.type.value = '';
    form.when.value = '';
    form.where.value = '';
    form.cost.value = '';
});


var trItems = document.getElementById('table-row-items');
const tableBody = document.getElementById('table-body');

const table = document.getElementById('my-table');

const createTdElement = function(text) {
    var tR = document.createElement('tr');
    tableBody.appendChild(tR);

    var typeTd = document.createElement('td');
    typeTd.textContent = text;
    tR.appendChild(typeTd);

    var whenTd = document.createElement('td');
    whenTd.textContent = text;
    tR.appendChild(whenTd);

    var whereTd = document.createElement('td');
    whereTd.textContent = text;
    tR.appendChild(whereTd);

    var costTd = document.createElement('td');
    costTd.textContent = text;
    tR.appendChild(costTd);

};

