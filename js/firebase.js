var firebaseConfig = {
  apiKey: "AIzaSyDhv6F_T7Y6LK7yMRiefec50G7UvI8e4E4",
  authDomain: "shagun-events.firebaseapp.com",
  projectId: "shagun-events",
  storageBucket: "shagun-events.appspot.com",
  messagingSenderId: "766408420562",
  appId: "1:766408420562:web:97e9dd54e1c0667f23d10b",
  measurementId: "G-F4RYQL6H8Z",
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("userdata");
let submitbutton = document.getElementById("submit");
function hidelogo() {
  var e = document.getElementById("hideme");
  "none" === e.style.display
    ? (e.style.display = "block")
    : (e.style.display = "none");
}
submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  var t = document.getElementById("username").value,
    n = document.getElementById("useremail").value,
    a = document.getElementById("userphone").value,
    s = document.getElementById("usermessage").value,
    o =
      new Date().getDate() +
      "/" +
      (parseInt(new Date().getMonth()) + 1) +
      "/" +
      new Date().getFullYear();
  t && a
    ? (db.doc().set({ name: t, email: n, phone: a, message: s, time: o }),
      document.getElementById("contact").reset(),
      alert("Your respone has been saved"))
    : alert("please enter your details before submitting");
});
