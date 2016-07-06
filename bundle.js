(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var countAliveNeighbours = require('./countAliveNeighbours')
var nextCellState = require('./nextCellState')
var createBoard = require('./createBoard')
var nextBoard = require('./nextBoard')

var board = createBoard(20)
var nb = nextBoard(board)

setInterval(function() {
	var ob = nb
	nb = nextBoard(ob)
	ob = nb
}, 1)

},{"./countAliveNeighbours":2,"./createBoard":3,"./nextBoard":7,"./nextCellState":8}],2:[function(require,module,exports){
var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  return getNeighbours(cellRow, cellColumn, board).length
}
module.exports = countAliveNeighbours

},{"./getNeighbours":5}],3:[function(require,module,exports){

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
  if (Math.floor(Math.random() * 10) == 0) {
    return true
  }
  return false
}

},{"./displayBoard":4}],4:[function(require,module,exports){
function displayBoard(board) {
  var r00t = document.querySelector('div')
  r00t.innerHTML = ""
  var table = document.createElement('table')
  for(var row = 0; row < board.length; row++) {
  	var newRow = document.createElement('tr')
  	for(var col = 0; col < board.length; col++) {
  		var newCell = document.createElement('td')
  		if(board[row][col] == true)
  			newCell.className = "alive"
  		newRow.appendChild(newCell)
	}
	table.appendChild(newRow)
  }
  r00t.appendChild(table)
}
module.exports = displayBoard

},{}],5:[function(require,module,exports){
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

},{"./indicesOutOfBounds":6}],6:[function(require,module,exports){
var outOfBounds = require('./outOfBounds')

function indicesOutOfBounds(rowIndex, columnIndex, array) {
  return outOfBounds(rowIndex, array) || outOfBounds(columnIndex, array)
}


module.exports = indicesOutOfBounds

},{"./outOfBounds":9}],7:[function(require,module,exports){
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

},{"./countAliveNeighbours":2,"./displayBoard":4,"./nextCellState":8}],8:[function(require,module,exports){
var overPopulated = require('./overPopulated')
var underPopulated = require('./underPopulated')
var ressurectable = require('./ressurectable')

function nextCellState(cellState, neighbourCount) {
	if (cellState){
	    if (!overPopulated(neighbourCount) &&  !underPopulated(neighbourCount)){
	    	return true
	    }
	    return false
	}
	if (!cellState && ressurectable(neighbourCount)){
	    return true
	}
	return false
}

module.exports = nextCellState

},{"./overPopulated":10,"./ressurectable":11,"./underPopulated":12}],9:[function(require,module,exports){
function outOfBounds(index, array) {
  return index < 0 || index >= array.length
}
module.exports = outOfBounds

},{}],10:[function(require,module,exports){
function overPopulated(neighbourCount) {
  return neighbourCount > 3
}
module.exports = overPopulated

},{}],11:[function(require,module,exports){
function ressurectable(neighbourCount) {

return neighbourCount == 3
}
module.exports = ressurectable

},{}],12:[function(require,module,exports){
function underPopulated(neighbourCount) {

return neighbourCount < 2
}
module.exports = underPopulated

},{}]},{},[1]);
