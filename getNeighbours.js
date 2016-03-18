var indicesOutOfBounds = require('./indicesOutOfBounds')

function getNeighbours(cellRow, cellColumn, board) {
  var neighbours = []
  for(var x = cellRow-1; x <= cellRow+1; x++) {
    for(var y = cellColumn-1; y <= cellColumn+1; y++) {
      if(!indicesOutOfBounds(x, y, board[0]) && board[x][y] != ' ') {
        if(x != cellRow || y != cellColumn) {
          neighbours.push(board[x][y])
        }
      }
    }
  }
  return neighbours
}

module.exports = getNeighbours
