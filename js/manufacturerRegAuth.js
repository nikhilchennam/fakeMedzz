//Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAeXPoSdtEBemyNAT-6vHS2K13dI9SD_r0",
  authDomain: "manufacturer-regform.firebaseapp.com",
  projectId: "manufacturer-regform",
  storageBucket: "manufacturer-regform.appspot.com",
  messagingSenderId: "903642771860",
  appId: "1:903642771860:web:c06c19f15bea652a30df81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Message Collection 
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit 
document.getElementById('manufacturerform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

//Get Values
var fname = getInputVal('fname');
var lname = getInputVal('lname');
var emailid = getInputVal('emailid');
var cname = getInputVal('cname');
var caddress = getInputVal('caddress');
var postalcode = getInputVal('postalcode');
var medno = getInputVal('medno');
var phno = getInputVal('phno');
var govlic = getInputVal('govlic');    

//Save Message 
saveMessage(fname, lname,emailid, cname, caddress, postalcode, medno, phno, govlic); 

//Alert Message
window.alert('Your messages has been sent!');
window.location.href="ManufacturerMail.html";

// Clear form
document.getElementById('manufacturerform').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, emailid, cname, caddress, postalcode, medno, phno, govlic){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname ,
      lname: lname,
      emailid: emailid,
      cname: cname, 
      caddress: caddress,
      postalcode: postalcode,
      medno: medno,
      phno: phno,
      govlic: govlic
    });
  }




















