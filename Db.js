const firebaseConfig = {
    apiKey: "AIzaSyC3sNe8e8tQ4rmmV4aIN11cL-bOw2CxbTk",
    authDomain: "tuitionworld-2a264.firebaseapp.com",
    databaseURL: "https://tuitionworld-2a264-default-rtdb.firebaseio.com",
    projectId: "tuitionworld-2a264",
    storageBucket: "tuitionworld-2a264.appspot.com",
    messagingSenderId: "256863763081",
    appId: "1:256863763081:web:2d7e054bcc4b51c6b02458",
    measurementId: "G-SVL4WL6B57"
  };

  //initializ Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
 var contactFormDB = firebase.database().ref('contactForm');

 document.getElementById('signup-form').addEventListener("submit", submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getElementVal("fullname");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var password = getElementVal("password");
  var password2 = getElementVal("password2");

  saveMessagges(name, email, phone, password, password2)

}

const saveMessagges = (name, email, phone, password, password2) => {
          
    var newContactForm = contactFormDB.push();

   newContactForm.set({

      name: name,
      email: email,
      phone: phone,
      password: password,
      password2: password2,

});
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}