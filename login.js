





// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
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
const analytics = getAnalytics(app);
const auth=getAuth(app);


// Grabbing all the input values using const



document.getElementById('submit').addEventListener("click", function(e) {
   e.preventDefault(); // Prevent default form submission behavior

   const email = document.getElementById('email').value;

   const password = document.getElementById('password').value;
   // Regular expression to validate email format
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // Validate the email format
   if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
} else {
  //main part
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Welcome to ClubBraids BY Theodore website!")
    window.location.href="./Products.html"
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
   
}
  

});


document.getElementById('forgot-password').addEventListener("click", function(e) {
  e.preventDefault();



  const email = document.getElementById('email').value;

  if (email) {
    // Initialize Firebase Authentication
    const auth = getAuth();

    // Send the password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Notify the user that the reset email has been sent
        alert("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  } else {
    // If no email is entered
    alert("Email address is required to reset the password.");
  }



});