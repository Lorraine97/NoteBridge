angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAjJoHGDw8RKEiQQiqrtEXz_zPlIhII8qU",
    authDomain: "notebridge-41a33.firebaseapp.com",
    databaseURL: "https://notebridge-41a33.firebaseio.com",
    storageBucket: "notebridge-41a33.appspot.com",
    messagingSenderId: "243668218646"
  };
  firebase.initializeApp(config);

})