
let myLeads = [];
let inputValue = document.getElementById('inputField');
const savedInputs = document.getElementById('saved-inputs')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderList();
}

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function() {
    myLeads.push(inputValue.value);
    inputValue.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList();
});

function renderList() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href=${myLeads[i]}>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    savedInputs.innerHTML = listItems;
}