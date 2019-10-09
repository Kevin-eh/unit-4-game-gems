// var jigglypuff = $(".jigglypuff");
// var banjo = $(".banjo");
// var plant = $(".plant");
// var wolf = $(".wolf");

var jigglypuff = {
  name: "Jigglypuff",
  hp: 100,
  strength: 5,
  counterattack: 5,
  alive: true,
  selected: false,
  jquerytag = $(".jigglypuff")
};
var banjo = {
  name: "Banjo",
  hp: 120,
  strength: 15,
  counterattack: 15,
  alive: true,
  selected: false,
    jquerytag = $(".banjo")

};
var plant = {
  name: "Plant",
  hp: 110,
  strength: 10,
  counterattack: 10,
  alive: true,
  selected: false
};
var wolf = {
  name: "Wolf",
  hp: 90,
  strength: 20,
  counterattack: 20,
  alive: true,
  selected: false
};

$("#jhp").text("hp: " + jigglypuff.hp);
$("#bhp").text("hp: " + banjo.hp);
$("#php").text("hp: " + plant.hp);
$("#whp").text("hp: " + wolf.hp);

$(".charbox").click(function() {
  $(this).selected = true;
  console.log(this);
  console.log(jigglypuff.selected, banjo.selected, jigglypuff.strength);
});

// $(".charbox").click(function ()
