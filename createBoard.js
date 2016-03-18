function createBoard(size) {
 var board = []
  for(var row = 0; row < size ; row++){
       board.push([])
    for (var col =0; col < size; col++){
      board[row].push(false)
    }
  }
  return board
}
module.exports = createBoard

function random(){
  if (Math.floor(Math.random() * 4) == 0) {
    return true
  }
  return false
}
