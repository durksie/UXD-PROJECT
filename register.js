 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 const auth=getAuth(app);


//database
//get ref to database services

const db=getDatabase(app);

 // Grabbing all the input values using const



 document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default form submission behavior
    //Database
    
     // Grab form values
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const cellphone = document.getElementById("cellphone").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("password").value;

  // Save user data to Realtime Database
  set(ref(db, 'users/' + fullname), {
    fullname: fullname,
    email: email,
    cellphone: cellphone,
    address: address
  }).then(() => {
    // Data saved successfully
    console.log("User data saved to database.");
  }).catch((error) => {
    console.error("Error saving data: ", error);
  });
    //authentication
 
    const submit =document.getElementById('submit');

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account")
    window.location.href="./Login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });


 });