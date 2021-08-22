var interval = 0;
function myKeyDown(event) {
 clearInterval(interval);
 if (event.keyCode == 37) {
 interval = setInterval(moveLeft, 10);
 }
 if (event.keyCode == 38) {
 interval =setInterval(moveUp, 10);
 }
 if (event.keyCode == 40) {
 interval =setInterval(moveDown, 10);
 }
 if (event.keyCode == 39) {
 interval =setInterval(moveRight, 10);
 }
}
function myLoadEvent() {
 document.addEventListener('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
function moveUp() {
 var element = document.getElementById('circle');
 var positionTop = element.offsetTop;
 element.style.top = positionLeft - 1 + 'px';
}
function moveDown() {
 var element = document.getElementById('circle');
 var positionTop = element.offsetTop;
 element.style.top = positionTop + 1 + 'px';
}
function moveLeft() {
 var element = document.getElementById('circle');
 var positionLeft = element.offsetLeft;
 element.style.left = positionLeft - 1 + 'px';
}
function moveRight() {
 var element = document.getElementById('circle');
 var positionLeft = element.offsetLeft;
 element.style.left = positionLeft + 1 + 'px';
}