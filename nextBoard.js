var nextCellState = require('./nextCellState')
var countAliveNeighbours = require('./countAliveNeighbours')
var displayBoard = require('./displayBoard')

function nextBoard(currentBoard) {
  var newBoard = []
  for (var i = 0; i< currentBoard.length; i++){
    newBoard.push([])
    for (var j= 0; j < currentBoard.length; j++){
     if (nextCellState (currentBoard[i][j], countAliveNeighbours(i, j, currentBoard)))
        newBoard[i][j] = true
     else
        newBoard[i][j] = false
    }
  }
  displayBoard(newBoard)
  return newBoard
}

module.exports = nextBoard
