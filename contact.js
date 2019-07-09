// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbDnwJRyfx6cUtdY6jbd2b2g5eYNQ5m70",
    authDomain: "checkpoint-31b2a.firebaseapp.com",
    databaseURL: "https://checkpoint-31b2a.firebaseio.com",
    projectId: "checkpoint-31b2a",
    storageBucket: "",
    messagingSenderId: "625928345368",
    appId: "1:625928345368:web:f4cc15835072fac6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
var messagesRef = firebase.database().ref("checkpoint-31b2a");//Seting the name of your database
  function submitForm(e){
      e.preventDefault();
      //Get values
      var name = document.getElementById("name").value;
      var track = document.getElementById("track").value;     
      var email = document.getElementById("email").value;
      var number = document.getElementById("number").value;
    saveMessage(name,track,email,number);
    }
    document.getElementById("nono").addEventListener("submit",submitForm);
    //Save to firebase
    function saveMessage(name,track,email,number){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    track: track,
    email: email,
    number: number,
    })
}




