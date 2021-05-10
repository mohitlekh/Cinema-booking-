// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfkSa3ba17ibCcH4Zwn44u997DxFEIumM",
    authDomain: "cinema-booking-9c7da.firebaseapp.com",
    databaseURL: "https://cinema-booking-9c7da-default-rtdb.firebaseio.com",
    projectId: "cinema-booking-9c7da",
    storageBucket: "cinema-booking-9c7da.appspot.com",
    messagingSenderId: "21994976667",
    appId: "1:21994976667:web:b2579267fd7089e8e29d3e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // referance messagescollection
 
var messageRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactuser').addEventListener('submit', submitForm);
// submit form 
function submitForm(e){
    e.preventDefault();
    
    //get values
    var name = document.getElementById('nameuser').value;
    var email = document.getElementById('emailuser').value; 
    console.log(name);
    console.log(email);
    saveMessage(name, email);


}

//save the message to firebase 
function saveMessage(name, email){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email
    });
}


