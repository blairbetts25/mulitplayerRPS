$(document).ready(function () {
    var newPlayer;
    var stringplayer1 = "";
    var stringplayer2 = "";
    var players = [];
    var player1 = $("#player1");
    var player2 = $("#player2");
    var config = {
        apiKey: "AIzaSyAosCnmhwLAQ9LW6Pfl5s8kmlVpUFmsNfw",
        authDomain: "rpsmulit.firebaseapp.com",
        databaseURL: "https://rpsmulit.firebaseio.com",
        projectId: "rpsmulit",
        storageBucket: "rpsmulit.appspot.com",
        messagingSenderId: "327559158495"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#addplayer").on("click", function addNewPlayer() {

        if (players.length === 0) {
            newPlayer = $("#newPlayer").val().trim();
            newPlayer = newPlayer.toUpperCase()
            players.push(newPlayer);
            $("#player1Wins").html(newPlayer + "'s Wins")
            $("#player1").append(newPlayer);
            stringplayer1 = players[0];
        }
        else if (players.length === 1) {
            newPlayer = $("#newPlayer").val().trim();
            newPlayer = newPlayer.toUpperCase()
            players.push(newPlayer);
            $("#player2Wins").html(newPlayer + "'s Wins")
            $("#player2").append(newPlayer);
            stringplayer2 = players[1];

        } else {
            newPlayer = $("#newPlayer").val().trim();
            alert("sorry " + newPlayer + " no more players can be added right now you are more than welcome to watch")
        }
        console.log(newPlayer);
        console.log(players);
        $("#newPlayer").val("");


        database.ref().child('/players/').set({
            player1: stringplayer1,
            player2: stringplayer2
        })
    })


   
})