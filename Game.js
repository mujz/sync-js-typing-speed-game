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
    let timeElapsed = { seconds: 0 };
    setInterval(this.incrementTime, time, time, timeElapsed, callback);
  }

  incrementTime(time, timeElapsed, callback) {
    timeElapsed.seconds += time / 1000;
    callback(timeElapsed.seconds);
  }

  endGame() {
    alert('Time is up!');
    const date = new Date();
    Game.endGameCallback(date.getSeconds());
    console.log('ending the game')
  }
}
