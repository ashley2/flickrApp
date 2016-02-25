'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {


  // var playGameButton = document.getElementById('playGame');
  // playGameButton.addEventListener('click', playGame);

  // function playGame(event){

  // }

  var isGreenTurn = true;

  var container = document.getElementById('container');
  container.addEventListener('click', pickBox);


  function pickBox(event) {

    var boxClick = event.target;
    console.log(event.target);

    if (isGreenTurn){
      boxClick.classList.add('green');

      isGreenTurn = !isGreenTurn;
    } else {
      boxClick.classList.add('blue');
      isGreenTurn = true;

    }
    var hasClass = boxClick.classList.contains('green') || boxClick.classList.contains('blue');


    if (hasClass === false){
      return;
    }

  }



}






