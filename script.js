function Move() {
    let Btns = document.getElementsByClassName('Button');
    let newGameButton = document.getElementById('new-game');
    let MsgContainer = document.querySelector('.msg-container');
    let Msg = document.querySelector('#msg')
    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    let match = false;
    let gameEnded = false; 

    const resetGame = () => {
       
        MsgContainer.classList.add("hide");
      };

    for (let i = 0; i < 9; i++) {
        Btns[i].addEventListener('click', () => {
            if (!gameEnded) {
                if (!match) {
                    Btns[i].innerText = 'X';
                    match = true;
                } else {
                    Btns[i].innerText = 'O';
                    match = false;
                }
                Btns[i].disabled = true;

                if (checkWinner()) {
                    gameEnded = true;
                    showWinner(match ? 'X' : 'O');                   
                }
            }
        });
    }
    const showWinner = (winner) => {
        Msg.innerHTML = `Congratulation Winner is ${winner}`;
        MsgContainer.classList.remove('hide');
    }

    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1Val = Btns[pattern[0]].innerText;
            let pos2Val = Btns[pattern[1]].innerText;
            let pos3Val = Btns[pattern[2]].innerText;

            if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    return true;
                }
            }
        }
        return false;
        showWinner(pos1Val);
    };
    newGameBtn.addEventListener("click", resetGame);

    
}
window.addEventListener('DOMContentLoaded', () => {
    Move();
});
