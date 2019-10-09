// var jigglypuff = $(".jigglypuff");
// var banjo = $(".banjo");
// var plant = $(".plant");
// var wolf = $(".wolf");
var wins = 0;
var losses = 0;
var targetnum = Math.floor(15 + Math.random() * 50);
$("#targetnum").text("Target Number: " + targetnum);
$("#playernumtext").text(playernum);
$("#winstext").text("wins: " + wins);
$("#lossestext").text("losses: " + losses);

console.log(targetnum);

var gemval = [
  Math.floor(1 + Math.random() * 5),
  Math.floor(2 + Math.random() * 7),
  Math.floor(3 + Math.random() * 9),
  Math.floor(4 + Math.random() * 10)
];

var playernum = 0;
console.log(playernum);

$(".peri").click(function() {
  playernum = playernum + gemval[0];
  console.log(playernum);
  $("#playernumtext").text(playernum);
});

$(".pearl").click(function() {
  playernum = playernum + gemval[1];
  console.log(playernum);
  $("#playernumtext").text(playernum);
});

$(".lapis").click(function() {
  playernum = playernum + gemval[2];
  console.log(playernum);
  $("#playernumtext").text(playernum);
});

$(".amy").click(function() {
  playernum = playernum + gemval[3];
  console.log(playernum);
  $("#playernumtext").text(playernum);
});

console.log(gemval);

$(".charbox").click(function() {
  console.log("wow");
  if (targetnum === playernum) {
    $("#gameovertext").text("YOU WON YOU ARE A WINNER IM SO PROUD");
    wins = wins + 1;
    $("#winstext").text("wins: " + wins);
    gemval = [
      Math.floor(3 + Math.random() * 5),
      Math.floor(3 + Math.random() * 7),
      Math.floor(3 + Math.random() * 8),
      Math.floor(3 + Math.random() * 10)
    ];
    playernum = 0;
    $("#playernumtext").text(playernum);
    targetnum = Math.floor(15 + Math.random() * 50);
    $("#targetnum").text("Target Number: " + targetnum);
  } else if (playernum > targetnum) {
    $("#gameovertext").text("YOU LOST! But don't give up! Try again!");
    losses = losses + 1;
    $("#lossestext").text("losses: " + losses);
    gemval = [
      Math.floor(1 + Math.random() * 10),
      Math.floor(2 + Math.random() * 10),
      Math.floor(3 + Math.random() * 10),
      Math.floor(4 + Math.random() * 10)
    ];
    playernum = 0;
    $("#playernumtext").text(playernum);
    targetnum = Math.floor(15 + Math.random() * 50);
    $("#targetnum").text("Target Number: " + targetnum);

    console.log("oooops");
  }
});
// $(".charbox").click(function() {
//   $(this).selected = true;
//   console.log(this);
// });

// $(".charbox").click(function ()
