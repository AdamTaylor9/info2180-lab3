document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");      

    squares.forEach(function (div) {
    div.classList.add("square");
    });
});
