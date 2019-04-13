
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6OJBMzfi0GSH6VGceXGKl_DIg832G_OI",
    authDomain: "train-time-73208.firebaseapp.com",
    databaseURL: "https://train-time-73208.firebaseio.com",
    projectId: "train-time-73208",
    storageBucket: "train-time-73208.appspot.com",
    messagingSenderId: "678235957775"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var tName = "";
  var tDestination = "";
  var tTime = "";
  var tFreq = "";
  var timeLeft = "";


$("#add-train").on("click", function(event){
    event.preventDefault();
    tName = $("#name-input").val().trim();
    tDestination = $("#destination-input").val().trim();
    tTime = $("#time-input").val();
    tFreq = $("#frequency-input").val().trim();
    console.log(tName, tDestination, tTime, tFreq);
    var newTrain = {
        name: tName,
        destination: tDestination,
        time: tTime,
        frequency: tFreq, 
    }
    database.ref().push(newTrain);
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

})
database.ref().on("child_added", function(snap){
    console.log(snap.val());
    
})