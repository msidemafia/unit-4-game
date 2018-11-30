$(document).ready(function() {
var randomNumber = Math.floor((Math.random() * 100) + 19);

function initialize() {
    computerChoice();

}

// for (var i=0; 1<4; i++) {
//     var crystalValue = Math.floor((Math.random() * 12) + 1);
//     var crystal = $("<div>")
//     crystal.attr("id", crystal[i]);
//     $("#crystalBox").append(crystal[0]).append(crystal[1]).append(crystal[2]).append(crystal[3])
//     $("crystal[0]").prepend('<img id="theImg" src="assets/images/crystal-one.jpg" />')
// }


  });
  for (var i = 0; i < 4; i++) {
    console.log(i);
    var crystal = $('<div>', {
      id: `crystal[i+1]`,
      class: 'crystal',
      'data-value': (Math.floor(Math.random() * 12)+1) 
    });
    // var img = $('<img>', {
    //   src: 'https://via.placeholder.com/150'
    // });
    $("#crystal[1]").attr("src", "assets/images/crystal-one.jpg");
    $('#crystalBox').append('#crystal[1]');
  }
  $('#crystal-area').on('click', $('.crystal'), function() {
    console.log('clicked');






})