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

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/