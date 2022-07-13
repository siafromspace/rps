const rulesBtn = document.querySelector('.rules')
const rulesModal = document.querySelector('.rules-modal')
const closeRules = document.querySelectorAll('.close')
const overlay = document.querySelector('.overlay')
const gameBoard = document.querySelector('.game-board')
const choices = document.querySelector('.choices')
const choiceWrapper = document.querySelector('.choiceWrapper')
const houseWrapper = document.querySelector('.houseWrapper')
const choiceImg = document.getElementById('choiceImg')
const gameBtn = Array.from(document.querySelectorAll('.gameBtn'))
const result = document.querySelector('.result')
const gameResult = document.querySelector('.gameResult')
const replay = document.querySelector('.replay')
const score = document.querySelector('.score')

const houseChoices = ['rock', 'paper', 'scissors']

//view rules modal
rulesBtn.addEventListener('click', () => {
  rulesModal.style.visibility = "visible"
  overlay.style.visibility = "visible"
})

//remove rules modal 
closeRules.forEach(icon => {
  icon.addEventListener('click', () => {
    rulesModal.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
  })
})


const houseIndex = Math.floor(Math.random() * houseChoices.length)
const houseChoice = houseChoices[houseIndex]
let playerScore = 0
score.innerText = playerScore

playerHand()

function playGame() {
  setTimeout(houseHand, 1000)
  setTimeout(printResult, 2000)
  setTimeout(scoreBoard, 2000)
  playAgain()
}

function playerHand() {
  playerScore = localStorage.getItem('score')
  score.innerText = playerScore
  gameBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      playerChoice = btn.dataset['text']
      gameBoard.classList.add('hide')
      choices.classList.remove('hide')
      choiceImg.setAttribute('src', `images/icon-${playerChoice}.svg`)
      choiceWrapper.classList.add(`${playerChoice}`)
      playGame()
    })
  })
}


function houseHand() {
  houseWrapper.innerHTML = `<div class="houseBtn">
    <img src="images/icon-${houseChoice}.svg" alt="" id="houseImg">
  </div>`
  houseWrapper.classList.add(`${houseChoice}`)
}


function printResult() {
  result.classList.remove('hide')
  if (playerChoice === houseChoice) {
    gameResult.textContent = "Draw"
  }
  else if (playerChoice === "paper") {
    if (houseChoice === "rock") {
      gameResult.textContent = "You win"
      replay.classList.add(`btn-${playerChoice}`)
      choiceWrapper.classList.add('is-winner')
    } else if (houseChoice === "scissors") {
      gameResult.textContent = "You lose"
      replay.classList.add(`btn-${houseChoice}`)
      houseWrapper.classList.add('is-winner')
    }
  }
  else if (playerChoice === "scissors") {
    if (houseChoice === "rock") {
      gameResult.textContent = "You lose"
      replay.classList.add(`btn-${houseChoice}`)
      houseWrapper.classList.add('is-winner')
    } else if (houseChoice === "paper") {
      gameResult.textContent = "You win"
      replay.classList.add(`btn-${playerChoice}`)
      choiceWrapper.classList.add('is-winner')
    }
  }
  else if (playerChoice === "rock") {
    if (houseChoice === "scissors") {
      gameResult.textContent = "You win"
      replay.classList.add(`btn-${playerChoice}`)
      choiceWrapper.classList.add('is-winner')
    } else if (houseChoice === "paper") {
      gameResult.textContent = "You lose"
      replay.classList.add(`btn-${houseChoice}`)
      houseWrapper.classList.add('is-winner')
    }
  }
}

function scoreBoard() {
  if (choiceWrapper.classList.contains('is-winner')) {
    playerScore++
    score.textContent = playerScore
  } else if (houseWrapper.classList.contains('is-winner')) {
    playerScore--
    score.textContent = playerScore
  }
  localStorage.setItem('score', playerScore)
  return playerScore
}

function playAgain() {
  replay.addEventListener('click', () => {
    window.location = '/'
  })
}





