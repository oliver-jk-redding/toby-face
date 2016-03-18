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
