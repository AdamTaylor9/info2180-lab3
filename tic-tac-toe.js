document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");      

    squares.forEach(function (div) {
    div.classList.add("square");
    });

    //adding x's and o's
    var input = "X";
    var gamestate = [];
    board.addEventListener("click", function(event) {
        if (event.target.classList.contains("square")) {
            const selectedSquare = event.target;

            selectedSquare.classList.add(input);
            selectedSquare.textContent = input;

            if (input== "X")
                input = "O";
            else
                input = "X";
        }
    });

    //adding hover
    board.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("square")) {
            const square = event.target;
            square.classList.add("hover");
            console.log("On");
        }
    });

    board.addEventListener("mouseout", function(event) {
        if (event.target.classList.contains("square")) {
            const square = event.target;
            square.classList.remove("hover");
        }
    });

});


