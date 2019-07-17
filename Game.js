class Game {
  constructor(durationInMS) {
    // in durationInMS end the game
    setTimeout(this.endGame, durationInMS);
    console.log('starting the game');
  }

  onEnd(callback) {
    console.log(callback)
    Game.endGameCallback = callback;
  }

  every(time, callback) {
    setInterval(callback, time);
  }

  endGame() {
    alert('Time is up!');
    const date = new Date();
    Game.endGameCallback(date.getSeconds());
    console.log('ending the game')
  }
}
