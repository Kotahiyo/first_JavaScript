let initialNum = 0;
const countFigure = document.getElementsByClassName('count-figure');
countFigure[0].innerText = initialNum;

const clickOutPlus = function () {
  initialNum += 1;
  countFigure[0].innerText = initialNum;
};

const clickOutminus = function () {
  initialNum -= 1;
  countFigure[0].innerText = initialNum;
};

const countUp = document.getElementsByClassName('count-up');
const countDown = document.getElementsByClassName('count-down');

countUp[0].addEventListener('click', clickOutPlus);
countDown[0].addEventListener('click', clickOutminus);
