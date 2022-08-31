const firebaseConfig = {

  apiKey: "AIzaSyDcgy5PdIyQDxv_IKpqqHaiDLHm58ttE58",

  authDomain: "html-98a3d.firebaseapp.com",

  databaseURL: "https://talabaty2-b9219-default-rtdb.firebaseio.com",

  projectId: "html-98a3d",

  storageBucket: "html-98a3d.appspot.com",

  messagingSenderId: "257281441182",

  appId: "1:257281441182:web:943ef0f51325ab462cea8f",

  measurementId: "G-MCEFD6W52F"

};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
