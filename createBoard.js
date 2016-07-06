
var displayBoard = require('./displayBoard')

function createBoard(size) {
  var board = []
  for(var row = 0; row < size ; row++){
       board.push([])
    for (var col =0; col < size; col++){
      board[row].push(random())
    }
  }
  displayBoard(board)
  return board
}
module.exports = createBoard

function random(){
  if (Math.floor(Math.random() * 5) == 0) {
    return true
  }
  return false
}
