var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard = require('./createBoard')
var nextBoard = require('./nextBoard')

var board = createBoard(25)
var nb = nextBoard(board)

setInterval(function() {
	var ob = nb
	nb = nextBoard(ob)
	ob = nb
}, 1)
