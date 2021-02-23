const countFigure = document.getElementsByClassName('count-figure');
countFigure[0].innerText = 0;

const clickOutPlus = function () {
  console.log('プラスボタン');
};

const clickOutminus = function () {
  console.log('マイナスボタン');
};

const countUp = document.getElementsByClassName('count-up');
const countDown = document.getElementsByClassName('count-down');

countUp[0].addEventListener('click', clickOutPlus);
countDown[0].addEventListener('click', clickOutminus);
