
const submitName = document.querySelector('.btn-div');
const comment = document.querySelector('.comment');
const thirdSection = document.querySelector('.third-section');
const welcomeText = document.querySelector('.welcome-text');
const loginSection = document.querySelector('.second-section');
const form = document.querySelector('.form');
const check = document.querySelector('.check-button');
const container = document.querySelector('.container');
const viewSecret = document.querySelector('.view-secret-num');
const secretBox = document.querySelector('.secret-box');
const secretButton = document.querySelector('.secret-button');
const logText = document.querySelector('.logger');
const loggerBox = document.querySelector('.log-number-prompt');
const guessNumberNoValue = document.querySelector('.guess-number');
const startNewSet = document.querySelector('.start-new');
const startNewGame = document.querySelector('.start-new-game');
const startGameBox = document.querySelector('.start-game');
const startGameText = document.querySelector('.click-to-start');
const timerText = document.querySelector('.timer-text');


const enable = function () {
  document.querySelector('.check-button').disabled = false;
  check.style.backgroundColor = "rgb(2, 2, 59)";
};

const disable = function () {
  document.querySelector('.check-button').disabled = true;
  check.style.backgroundColor = 'rgb(177, 170, 170)';
};




let enterName = document.querySelector('.firstN').value;
////////////////////////////////////////
////////CREATING THE ENTER NAME SECTION
submitName.addEventListener('click', function (e) {
  e.preventDefault();
  enterName = document.querySelector('.firstN').value;

  welcomeText.textContent = `You are welcome ${enterName}, Ready to Play?`;
  if (enterName == '') {
    welcomeText.textContent = 'Enter letters to continue';
    console.log('this is not a letter');

  } else if (typeof enterName !== 'number') {
    //thirdSection.style.opacity = '2';
    form.style.opacity = '0';
    welcomeText.style.color = 'rgb(43, 167, 5)';
    startGameBox.style.opacity = '1';
    startGameText.style.opacity = '1';

  } else if (typeof enterName === 'number') {
    welcomeText.textContent = 'Enter name to continue';
    console.log('this is not a number');

  }




  // (welcomeText.textContent = `You are welcome ${enterName}, Ready to Play?`)

});


startGameBox.addEventListener('click', function (e) {
  //e.preventDefault();

  welcomeText.textContent = ` ${enterName} You can win before 90 seconds, keep playing`;
  if (welcomeText.textContent = ` ${enterName} You can win before 90 seconds, keep playing`) {
    thirdSection.style.opacity = '2';
    form.style.opacity = '0';
    welcomeText.style.color = 'rgb(43, 167, 5)';
    startGameBox.style.opacity = '0';
    startGameText.style.opacity = '0';
    startNewSet.style.opacity = '0';

  }

  startLogOutTimer();

});

/////////////////////////////////////////
/////CREATING THE CHECK GUESS NUMBER AND SECRET NUMBER SECTION
let secretNumber = Math.trunc(Math.random() * 20) + 1;

log = 1;
//log += 0; log++;


check.addEventListener('click', function () {
  //const comment = document.querySelector('.comment-box');
  let guessNumber = Number(document.querySelector('.guess-number').value);
  const close1 = guessNumber + 1;
  const away1 = guessNumber - 1;
  // e.preventDefault();

  if (!guessNumber) {  // means if not true OR  When there is no input
    comment.textContent = 'No guess!'
  } else if (close1 == secretNumber) {
    comment.textContent = 'You are almost there😎'
  } else if (away1 == secretNumber) {
    comment.textContent = 'Just a step away😋'
  } else if (guessNumber > secretNumber) {
    comment.textContent = 'Very High'
  } else if (guessNumber < secretNumber) {
    comment.textContent = 'Very Low'
  } else if (guessNumber === secretNumber) {

    secretBox.style.backgroundColor = 'lime';
    secretBox.style.width = '20rem';
    viewSecret.style.opacity = '1';
    viewSecret.style.color = 'black';
    viewSecret.style.fontSize = 'xx-large';
    viewSecret.textContent = secretNumber;
    comment.textContent = 'You are correct👍🏽';
    logText.textContent = `WIN: ${log++}x`;
    //check.style.opacity = '0';
    startNewSet.style.opacity = '1';
    disable();


  }

  comment.style.opacity = '1';
  console.log(secretNumber);
});



//////////////////NEW SET

startNewSet.addEventListener('click', function () {
  document.querySelector('.guess-number').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  viewSecret.textContent = '';
  secretBox.style.backgroundColor = 'black';
  comment.textContent = 'Start New guess';
  check.style.opacity = '1';
  startNewSet.style.opacity = '0';
  enable();


});

startNewGame.addEventListener('click', function () {

  window.location.reload();
  ////OR
  /////CHECK HTML BUTTON FOR ONCLICK EVENT ADDED

});




/////////////////////////////////////
//SETTING THE TIMER
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    timerText.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0 && log < 6) {
      clearInterval(timer);
      welcomeText.textContent = 'You Lost the game!😒';
      welcomeText.style.color = 'red';
      check.style.opacity = '0';
      startNewSet.style.opacity = '0';
      startNewGame.style.opacity = '1';

    } else if (time > 0 && log === 6) {
      welcomeText.textContent = 'Congratulations you won!🏆';
      check.style.opacity = '0';
      startNewSet.style.opacity = '0';
      startNewGame.style.opacity = '1';
      guessNumberNoValue.style.backgroundColor = 'lime';
      // container.style.backgroundColor = 'green';
      clearInterval(timer);
    } else if (time === 0) {
      clearInterval(timer);
      check.style.opacity = '0';
      welcomeText.textContent = 'Time is up!';
      welcomeText.style.color = 'red';
      startNewSet.style.opacity = '0';
      startNewGame.style.opacity = '1';
    }


    //   welcomeText.textContent = ` GAME OVER!  ${enterName}`;
    //   welcomeText.style.color = 'red';
    // }

    // Decrease 1s
    time--;
  };
  // Set time to 5 minutes
  let time = 90;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;



};









