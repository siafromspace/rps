const rulesBtn = document.querySelector('.rules')
const rulesModal = document.querySelector('.rules-modal')
const closeRules = document.querySelectorAll('.close')
const overlay = document.querySelector('.overlay')
const gameBoard = document.querySelector('.game-board')
const gameBtn = Array.from(document.querySelectorAll('.gameBtn'))
const result = document.querySelector('.result')

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

function playGame() {
    gameBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            playerChoice = btn.dataset['text']
            gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result"></div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper">
                <div>
                </div>
              </div>
            </div>
          </div>`
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
                <div class="player-choice">
                  <h2>You picked</h2>
                  <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                    <div class="choiceBtn">
                      <img src="images/icon-${playerChoice}.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="result"></div>
                <div class="house-choice">
                  <h2>The house picked</h2>
                  <div class="houseWrapper ${houseChoice}">
                    <div class="houseBtn">
                      <img src="images/icon-${houseChoice}.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>`
            }, 1000)
            printResult()
        })
    })

}
playGame()

function printResult() {
    if (playerChoice === "rock") {
        if (houseChoice === "scissors") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You win</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        } else if (houseChoice === "paper") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You lose</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        }
    }
    else if (playerChoice === "paper") {
        if (houseChoice === "rock") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You win</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        } else if (houseChoice === "scissors") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You lose</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        }
    }
    else if (playerChoice === "scissors") {
        if (houseChoice === "rock") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You lose</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        } else if (houseChoice === "paper") {
            setTimeout(() => {
                gameBoard.innerHTML = `<div class="choices">
            <div class="player-choice">
              <h2>You picked</h2>
              <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
                <div class="choiceBtn">
                  <img src="images/icon-${playerChoice}.svg" alt="">
                </div>
              </div>
            </div>
            <div class="result">
              <h1>You win</h1>
              <button>Play again</button>
            </div>
            <div class="house-choice">
              <h2>The house picked</h2>
              <div class="houseWrapper ${houseChoice}">
                <div class="houseBtn">
                  <img src="images/icon-${houseChoice}.svg" alt="">
                </div>
              </div>
            </div>
          </div>`
            }, 2000)
        }
    }
    else if (playerChoice === houseChoice) {
        setTimeout(() => {
            gameBoard.innerHTML = `<div class="choices">
        <div class="player-choice">
          <h2>You picked</h2>
          <div class="choiceWrapper ${playerChoice}" data-choice="${playerChoice}">
            <div class="choiceBtn">
              <img src="images/icon-${playerChoice}.svg" alt="">
            </div>
          </div>
        </div>
        <div class="result">
          <h1>Draw</h1>
          <button>Play again</button>
        </div>
        <div class="house-choice">
          <h2>The house picked</h2>
          <div class="houseWrapper ${houseChoice}">
            <div class="houseBtn">
              <img src="images/icon-${houseChoice}.svg" alt="">
            </div>
          </div>
        </div>
      </div>`
        }, 2000)
    }
}



