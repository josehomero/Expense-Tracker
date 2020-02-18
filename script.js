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

const tableBody = document.getElementById('table-body');

const table = document.getElementById('my-table');

const createTdElement = function(type,when,where,cost) {
    var tR = document.createElement('tr');
    tableBody.appendChild(tR);

    var deleteBtn = createDeleteButton()
    tR.appendChild(deleteBtn);


    var typeTd = document.createElement('td');
    typeTd.textContent = type;
    tR.appendChild(typeTd);

    var whenTd = document.createElement('td');
    whenTd.textContent = when;
    tR.appendChild(whenTd);

    var whereTd = document.createElement('td');
    whereTd.textContent = where;
    tR.appendChild(whereTd);

    var costTd = document.createElement('td');
    costTd.textContent = cost;
    tR.appendChild(costTd);
};

function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', function(e) {
        if(e.target.textContent.includes('X')) {
            var removeTr = e.target.parentElement;
            tableBody.removeChild(removeTr);
        }
    });
    return deleteBtn;
}