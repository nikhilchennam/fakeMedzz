//Initiate Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDgmmh6S91QgesH5f8cgoilT3Re2Yu8-PQ",
    authDomain: "supplier-regform-1.firebaseapp.com",
    projectId: "supplier-regform-1",
    storageBucket: "supplier-regform-1.appspot.com",
    messagingSenderId: "64267486720",
    appId: "1:64267486720:web:5ffb225e70e5410e59fae5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Message Collection 
var messagesRef = firebase.database().ref('messages');

//Listen for form Submit 
document.getElementById('supplierform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var emailid = getInputVal('emailid');
    var mname = getInputVal('mname');
    var address = getInputVal('address');
    var postalcode = getInputVal('postalcode');
    var medno = getInputVal('medno');
    var phno = getInputVal('phno');
    var govlic = getInputVal('govlic');

    //Save Message 
    saveMessage(fname, lname, emailid, mname, address, postalcode, medno, phno, govlic);

    //Alert Message
    window.alert('Your messages has been sent!');
    window.location.href = "index.html";

    // Clear form
    document.getElementById('supplierform').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, emailid, name, address, postalcode, medno, phno, govlic) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        emailid: emailid,
        name: name,
        address: address,
        postalcode: postalcode,
        medno: medno,
        phno: phno,
        govlic: govlic
    });
}