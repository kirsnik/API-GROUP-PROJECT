// Initialize Firebase
var config = {
  apiKey: "AIzaSyBluw0_IVPONNeI-eGflP0rHbPyafLk7_M",
  authDomain: "classproject-c158a.firebaseapp.com",
  databaseURL: "https://classproject-c158a.firebaseio.com",
  projectId: "classproject-c158a",
  storageBucket: "classproject-c158a.appspot.com",
  messagingSenderId: "525268441532"
};
firebase.initializeApp(config);

// Created variable to reference the database
var database = firebase.database();

// Capture submit click to add user info
$("#signup-button").on("click", function () {
  // Prevents page refresh
  event.preventDefault();

  // Create object with properties set to input field values
  var userInfo = {
    username: $("#username-input").val().trim(),
    email: $("#email-input").val().trim(),
    password: $("#password-input").val().trim(),
    confirmPassword: $("#confirmPassword-input").val().trim(),
  }
  console.log(userInfo);

  // Pushes userInfo to database
    database.ref().push(userInfo)
});

