const game = new Game(5000);

game.onEnd(disableTextArea);
console.log('hello')

game.every(5000, remindUserOfTime)

function disableTextArea(currentTime) {
  // TODO disables the text area
  console.log('we will disable the text area later');
  console.log(currentTime);
}

function remindUserOfTime(seconds) {
  console.log('this many ' + seconds + ' has passed');
}
