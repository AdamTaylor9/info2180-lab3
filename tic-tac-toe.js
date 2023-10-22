function winCon(gamestate){
    const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];

    for (const condition of win) {
        const [a, b, c] = condition;
        if (gamestate[a] && gamestate[a] == gamestate[b] && gamestate[b] == gamestate[c] && gamestate[c]) {
          return [true, gamestate[a]];
        }
      }

    return [false];

}

document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div"); 
    const status=document.getElementById("status");     

    squares.forEach(function (div) {
        div.classList.add("square");
    });

    //adding x's and o's
    var input = "X";
    var gamestate = ["","","","","","","","",""];
    var winstat = [false];

    squares.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (cell.textContent != "X" && cell.textContent !="O" && winstat[0]==false){
                cell.classList.add(input);
                cell.textContent = input;
                gamestate[index]=input;
                if (input== "X")
                    input = "O";
                else
                    input = "X";
                // console.log(gamestate);
                winstat = winCon(gamestate);
                if (winstat[0]){
                    gamestate = ["","","","","","","","",""];
                    status.classList.add("you-won");
                    var winMessage;
                    if (winstat[1]=="X")
                        winMessage = 'Congratulations! X is the Winner!';
                    else
                        winMessage = 'Congratulations! O is the Winner!';
                    status.textContent = winMessage;
                    
                }
            }
        });
      });

    //adding hover
    board.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("square")) {
            const square = event.target;
            square.classList.add("hover");
        }
    });

    board.addEventListener("mouseout", function(event) {
        if (event.target.classList.contains("square")) {
            const square = event.target;
            square.classList.remove("hover");
        }
    });

    //restarts game
    const newGame = document.querySelector(".btn");
    newGame.addEventListener("click", function(){
        gamestate = ["","","","","","","","",""];
        input = "X";
        squares.forEach(function (div) {
            div.textContent="";
        });
        status.classList.remove("you-won");
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        winstat=[false];
    });

});


