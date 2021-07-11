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

//reference messages collection
var messagesRef = firebase.database().ref("messages");

//event listener for form
document.getElementById("contact").addEventListener("submit", submitform);

//submitting
function submitform(e) {
  e.preventDefault();
  var name = document.getElementById("username").value;
  var email = document.getElementById("useremail");
  var phone = document.getElementById("userphone").value;
  var message = document.getElementById("usermessage").value;
  console.log(name);
  alert(name);
  alert(email);
  alert(phone);
  console.log(email);
  console.log(phone);
  console.log(message);
  //save msg
  saveMessage(name, email, phone, message);
  alert("Your respone has been saved");
}

// fnc to save msg
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
