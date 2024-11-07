// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4m65Py_DzbfxmmtzRCHKDyys_7tjIt-E",
  authDomain: "blubauthe.firebaseapp.com",
  projectId: "blubauthe",
  storageBucket: "blubauthe.appspot.com",
  messagingSenderId: "891070664638",
  appId: "1:891070664638:web:73676f0fa72e6bf519b3ef",
  measurementId: "G-XRWSC3F0N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//get ref to database services

const db=getDatabase(app);



document.getElementById("out").addEventListener("click", function () {
    // Ask for user confirmation before signing out
    const confirmation = confirm("Are you sure you want to sign out?");
    
    if (confirmation) {
        // User confirmed, proceed with sign-out
        signOut(auth).then(() => {
            alert("You have signed out.");
            // Redirect to a sign-in page
            window.location.href = "index.html";
        }).catch((error) => {
            // Handle sign-out errors
            console.error("Error signing out:", error);
            alert("An error occurred during sign-out.");
        });
    } else {
        // User canceled, do nothing
        alert("Sign out canceled.");
    }
});





