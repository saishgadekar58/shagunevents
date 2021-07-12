var firebaseConfig = {
  apiKey: "AIzaSyDhv6F_T7Y6LK7yMRiefec50G7UvI8e4E4",
  authDomain: "shagun-events.firebaseapp.com",
  projectId: "shagun-events",
  storageBucket: "shagun-events.appspot.com",
  messagingSenderId: "766408420562",
  appId: "1:766408420562:web:97e9dd54e1c0667f23d10b",
  measurementId: "G-F4RYQL6H8Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//firestore
var firestore = firebase.firestore();
const db = firestore.collection("userdata");
//event listener for form
let submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  var name = document.getElementById("username").value;
  var email = document.getElementById("useremail").value;
  var phone = document.getElementById("userphone").value;
  var message = document.getElementById("usermessage").value;
  db.doc().set({
    name,
    email,
    phone,
    message,
  });

  document.getElementById("contact").reset();

  alert("Your respone has been saved");
});
