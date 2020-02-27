const tableBody = document.getElementById('table-body');
const button = document.getElementById('button');

button.addEventListener('click', function(e) {  
    const form = document.querySelector('form');

    e.preventDefault();
    const type = form.type.value;
    const date = form.date.value;
    const description = form.description.value;
    const amount = form.amount.value;

    if (type === '' || date === '' || description === '' || amount === '') {
        alert("Please fill out all the information in the form!");
        return;
    }

    createTdElement(type, date, description, amount);
    form.type.value = '';
    form.date.value = '';
    form.description.value = '';
    form.amount.value = '';
});

const createTdElement = function(type, when, where, cost) {
    var tr = document.createElement('tr');
    tableBody.appendChild(tr);

    var buttonTd = document.createElement('td');
    var deleteBtn = createDeleteButton()
    buttonTd.appendChild(deleteBtn);
    tr.appendChild(buttonTd);


    var typeTd = document.createElement('td');
    typeTd.textContent = type;
    tr.appendChild(typeTd);

    var dateTd = document.createElement('td');
    dateTd.textContent = when;
    tr.appendChild(dateTd);

    var descriptionTd = document.createElement('td');
    descriptionTd.textContent = where;
    tr.appendChild(descriptionTd);

    var amountTd = document.createElement('td');
    amountTd.textContent = cost;
    tr.appendChild(amountTd);
};

function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', function(e) {
        if(e.target.textContent.includes('X')) {
            var tr = e.target.parentElement.parentElement;
            tableBody.removeChild(tr);
        }
    });
    return deleteBtn;
}