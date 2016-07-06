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
