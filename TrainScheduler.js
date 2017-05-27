 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaExqh9639GNUEEsQNnupc04k3QqEcPSo",
    authDomain: "myawesomeproject-42944.firebaseapp.com",
    databaseURL: "https://myawesomeproject-42944.firebaseio.com",
    projectId: "myawesomeproject-42944",
    storageBucket: "myawesomeproject-42944.appspot.com",
    messagingSenderId: "138424297119"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addTrainBtn").on("click", function(event) {
  	event.preventDefault();

  var trnName = $("#trainName").val().trim();
  var trnDestination = $("#trainDest").val().trim();
  var trnTime = moment($("#trainTime").val().trim(), "").format("");
  var trnFrequency = $("#trainFreq").val().trim();
  
  var newTrain = {
    name: trnName,
    destination: trnDestination,
    time: trnTime,
    frequency: trnFrequency
  };

  database.ref().push(newTrain);

  console.log(trnName.name);
  console.log(trnDestination.destination);
  console.log(trnTime.time);
  console.log(trnFrequency.frequency);

  alert("Train successfully added");

  $("#trainName").val("");
  $("#trainDest").val("");
  $("#trainTime").val("");
  $("#trainFreq").val("");
});