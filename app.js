// Initialize Firebase(2)
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
  
  var firestore = firebase.firestore();


  const submitBtn = document.querySelector('#submit');

  let userName = document.querySelector('#userName');
  let userEmail = document.querySelector('#userEmail');

  const db = firestore.collection("contactData");

  submitBtn.addEventListener('click', function(){
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;

      db.doc().set({
          name: userNameInput,
          email: userEmailInput
      }).then(function(){
          console.log('data saved');
      }).catch(function(error){
          console.log(error);
      });
  });