var config = {
    apiKey: "AIzaSyCClo6wVrW-WBYTPknlDj8WHzGVU4eDApY",
    authDomain: "rmafirebaseproject-fabb9.firebaseapp.com",
    databaseURL: "https://rmafirebaseproject-fabb9.firebaseio.com",
    projectId: "rmafirebaseproject-fabb9",
    storageBucket: "rmafirebaseproject-fabb9.appspot.com",
    messagingSenderId: "643535691716",
    appId: "1:643535691716:web:58b31489aabe1096634e91",
    measurementId: "G-PNYNM67H9Q"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.analytics();

    firebase.auth.Auth.Persistence.LOCAL;

    $("#btn-login").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,
        }).then(function(data){
            $("#container").html(data);
            $("txtclick").attr("style", "background-color:black");
        });
    }
