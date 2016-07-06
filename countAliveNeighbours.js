var getNeighbours = require('./getNeighbours')
function countAliveNeighbours(cellRow, cellColumn, board) {
  return getNeighbours(cellRow, cellColumn, board).length
}
module.exports = countAliveNeighbours
