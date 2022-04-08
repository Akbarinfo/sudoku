const elListBox = document.querySelector('#listbox')
let count = 1
let board = [ '', '', '', '',  '', '', '', '', '', '']

function createElements(...arr) {
  return arr.map(el => {
    return document.createElement(el)
  })
}

// elListBox.onmouseover = (e) => {
//   if(!isNaN(e.path[0].id)) {
//     e.path[0].children[0].className = 'bx bx-x'
//   }
// }
// elListBox.onmouseout = (e) => {
//   if(!isNaN(e.path[0].id)) {
//     // e.path[0].children[0].className = 'bx bx-x none'
//   }
// }

array.forEach((item, index) => {
    let [li, iconx, icono] = createElements('li', 'i', 'i')
    li.className = 'sudo__item'
    li.setAttribute('id', item.id)
    li.onclick = () => {
        if( !board[li.id] && (count % 2) ) {
          board[li.id] = 'X'
          iconx.className = 'bx bx-x'
          li.style.backgroundColor = 'red'

        } else if( !board[li.id] && !(count % 2) ) {
          board[li.id] = 'O'
          icono.className = 'bx bx-circle'
          li.style.backgroundColor = 'orange'
        // }
      }
      if(isGameOver() == 1) {
        let winner = count % 2 ? 'X' : 'O'
        alert (`${winner} wins`)
      }  if( isGameOver() == -1) {
        alert('draw')
      } else {
        ++count
      }
    }
    iconx.className = 'bx bx-x none'
    icono.className = 'bx bx-circle none'
    li.appendChild(iconx)
    li.appendChild(icono)

    elListBox.appendChild(li)

})

function isGameOver() {
  if( board[1] == board[2] && board[2] == board[3] && board[1] && board[2] && board[3] ||
    board[4] == board[5] && board[5] == board[6] && board[4] && board[5] && board[6]  ||
    board[7] == board[8] && board[9] == board[8] && board[7] && board[8] && board[9] ||
    board[1] == board[4] && board[4] == board[7] && board[1] && board[4] && board[7] ||
    board[2] == board[5] && board[5] == board[8] && board[5] && board[2] && board[8] ||
    board[3] == board[6] && board[6] == board[9] && board[6] && board[9] && board[3]  ||
    board[1] == board[5] && board[5] == board[9] && board[1] && board[5] && board[9] ||
    board[3] == board[5] && board[5] == board[7] && board[5] && board[7] && board[3] ) {
      return 1
    } else if(board[1] && board[2] && board[4] && board[3] && board[5] && board[6] && board[7] && board[8] && board[9]) {
        return -1
      } else {
        return 0
      }
}