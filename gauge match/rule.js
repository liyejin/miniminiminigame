/** @type {HTMLCanvasElemanet} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const buttonImage = new Image();
buttonImage.src = 'img/Gamerule.png';
buttonImage.onload = function () {
  ctx.drawImage(buttonImage, 0, 0, 1150, 820);
}

canvas.addEventListener('click', function (event) {
  const startX = event.offsetX;
  const startY = event.offsetY;


  if (startX >= 0 && startX <= 1150 && startY >= 0 && startY <= 820) {
    location.href = 'maingame.html'; //
  }
});