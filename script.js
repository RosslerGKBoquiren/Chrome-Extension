
// importing .env file
import 'dotenv/config'
import { initializeApp } from "firebase/app";
import { getDatabase, 
        ref, 
        push } from "firebase/database";


const firebaseConfig = {
    // database URL
    apiKey: import.meta.envFIREBASE_API_KEY,
    authDomain: import.meta.envFIREBASE_AUTH_DOMAIN,
    projectId: import.meta.envFIREBASE_PROJECT_ID,
    storageBucket: import.meta.envFIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.envFIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.envFIREBASE_APP_ID,
    databaseURL: import.meta.envDATABASE_URL
}

// console.log(firebaseConfig.databaseURL)

// initialize firebase
const app = initializeApp(firebaseConfig)
// connect to database
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")


// let myLeads = [];
let inputValue = document.getElementById('inputField');
const savedInputs = document.getElementById('saved-inputs')
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn')
// const tabBtn = document.getElementById('tab-btn')

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage;
//     render(myLeads);
// }

// tabBtn.addEventListener("click", function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     })
// })

function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href=${leads[i]}>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    savedInputs.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    // localStorage.clear();
    // myLeads = [];
    // render(myLeads);
})


saveBtn.addEventListener('click', function() {
    push(referenceInDB ,inputValue.value)
    inputValue.value = '';
    // localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // render(myLeads);
});

