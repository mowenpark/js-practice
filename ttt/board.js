function Board () {
  var grid = [];
  for (var r = 1; r <= 3; r++) {
    var row = [];
    for (var sq = 1; sq <= 3; sq++) {
      row.push([]);
    }
    grid.push(row);
  }
  this.grid = grid;
}

Board.prototype.empty = function (pos) {
  var row = pos[0];
  var col = pos[1];
  return this.grid[row][col].length === 0;
};

Board.prototype.winner = function () {
  if (this.won()) {}
};

Board.prototype.won = function () {

};

Board.prototype.placeMark = function (pos, mark) {

};

var board = new Board();
board.grid[0][0] = 1;
console.log(board.grid);
console.log(board.empty([0,1]));
