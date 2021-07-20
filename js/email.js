function sendMail() {
  var name = document.getElementById("username").value;
  var email = document.getElementById("useremail").value;
  var phone = document.getElementById("userphone").value;
  var message = document.getElementById("usermessage").value;

  var Body2 =
    "Name: " +
    name +
    "<br>Email: " +
    email +
    "<br>Phone: " +
    phone +
    "<br>Message: " +
    message;
  //   client.UseDefaultCredentials = false;
  //   SmtpClient.Credentials;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "kirito4643@gmail.com",
    Password: "75754100",
    To: "saishgadekar350@gmail.com",
    From: "kirito4643@gmail.com",
    Subject: "New client message",
    Body: Body2,
  }).then((message) => alert(message));
}
