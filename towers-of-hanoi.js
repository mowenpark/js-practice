var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[1,2,3],[],[]];
}

HanoiGame.prototype.run = function(completionCallback) {
    this.promptMove(function (fromTowerIdx, toTowerIdx) {
      if (this.isValidMove(fromTowerIdx, toTowerIdx)) {
        this.move(fromTowerIdx, toTowerIdx);
        this.run(completionCallback);
      } else {
        console.log("Invalid move, please try again.");
        this.run(completionCallback);
      }
    }.bind(this));
  if (this.winCondition()) {
    completionCallback();
  }
};

HanoiGame.prototype.completionCallback = function() {
  console.log("You won! You win at life.");
  reader.close();
};

HanoiGame.prototype.promptMove = function(callback) {
  console.log(this.stacks);
  reader.question("From which stack do you want to move? \n", function (response) {
    reader.question("Which stack do you want to move to? \n", function (response2) {
      var fromTowerIdx = parseInt(response - 1),
      toTowerIdx = parseInt(response2 - 1);
      // return fromTowerIdx
      callback(fromTowerIdx, toTowerIdx);
    });
  });
};


HanoiGame.prototype.isValidMove = function(fromTowerIdx, toTowerIdx) {
  if (this.stacks[fromTowerIdx][0] === undefined) {return false;}
  else if (this.stacks[toTowerIdx][0] === undefined) {return true;}
  else if (this.stacks[fromTowerIdx][0] < this.stacks[toTowerIdx][0]) {return true;}
  else {return false;}
};

HanoiGame.prototype.move = function(fromTowerIdx, toTowerIdx) {
  this.stacks[toTowerIdx].unshift(this.stacks[fromTowerIdx].shift());
};

HanoiGame.prototype.winCondition = function () {
  if (this.stacks[2].length === 3 && this.stacks[0].length === 0) {
    return true;
  } else {
    return false;
  }
};

var game = new HanoiGame();
game.run(game.completionCallback);
