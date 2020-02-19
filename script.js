const form = document.querySelector('form');
const button = document.getElementById('button');
button.addEventListener('click', function(e) {
    e.preventDefault();
    var typeInput = form.type.value;
    var whenInput = form.when.value;
    var whereInput = form.where.value;
    var costInput = form.cost.value;

    createTdElement(typeInput,whenInput,whereInput,costInput);
    form.type.value = '';
    form.when.value = '';
    form.where.value = '';
    form.cost.value = '';
});

const tableBody = document.getElementById('table-body');

const createTdElement = function(type,when,where,cost) {
    var tR = document.createElement('tr');
    tableBody.appendChild(tR);

    var buttonTd = document.createElement('td');
    var deleteBtn = createDeleteButton()
    buttonTd.appendChild(deleteBtn);
    tR.appendChild(buttonTd);


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