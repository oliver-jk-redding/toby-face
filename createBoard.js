function createBoard(size) {
 var board = []
  for(var row = 0; row < size ; row++){
       board.push([])
    for (var col =0; col < size; col++){
      board[row].push(0)
    }
  }
  return board
}
module.exports = createBoard

