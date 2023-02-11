const RacingGame = require('./controller/RacingGame.js')
class App {
    play() {
        const racingGame = new RacingGame();
        racingGame.start();
    }
}

const app = new App();
app.play();
module.exports = App