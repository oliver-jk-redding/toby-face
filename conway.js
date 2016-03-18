var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard = require('./createBoard')
var nextBoard = require('./nextBoard')

exports.createBoard = createBoard
exports.nextBoard = nextBoard

var board = createBoard(10)
console.log(board)
console.log('-------------------------------------------------------------------------------')
var n = 0
while(n < 10) {
  var nb;
  if(n==0)
    nb = nextBoard(board)
  else
    nb = nextBoard(nb)
  console.log(nb)
  console.log('-------------------------------------------------------------------------------')
  n++
}
