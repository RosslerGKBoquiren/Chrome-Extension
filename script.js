import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputValue = document.getElementById('inputField');
const savedInputs = document.getElementById('saved-inputs');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');

function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    savedInputs.innerHTML = listItems;
}

// Listen for changes in the database
onValue(referenceInDB, function(snapshot) {
    if (snapshot.exists()) {
        const snapshotValues = snapshot.val();
        const leads = Object.values(snapshotValues);
        render(leads);
    } else {
        savedInputs.innerHTML = ""; // Clear list if no data exists
    }
});

saveBtn.addEventListener('click', function() {
    if (inputValue.value) {
        push(referenceInDB, inputValue.value);
        inputValue.value = '';
    }
});

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB);
});
