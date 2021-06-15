//Initialize firebase 
var firebaseConfig = {
    apiKey: "AIzaSyDVG-YpPPNlsZVo_kAogIRlCRTRLHeviW0",
    authDomain: "contact-us-8917b.firebaseapp.com",
    databaseURL: "https://contact-us-8917b-default-rtdb.firebaseio.com",
    projectId: "contact-us-8917b",
    storageBucket: "contact-us-8917b.appspot.com",
    messagingSenderId: "530318850288",
    appId: "1:530318850288:web:4f1b0dd9264b14cd61aa35"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference Message Collection 
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

//Get Values
var name = getInputVal('name');
var email = getInputVal('email');
var contactno = getInputVal('contactno');
var message = getInputVal('message');    

//Save Message 
saveMessage(name, email, contactno, message); 

//Alert Message
window.alert('Your messages has been sent!');

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, contactno, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      contactno: contactno,
      message: message
    });
  }

