function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function createGrid(boxPerLine, boxSize) {
    for (let i = 0; i < (boxPerLine ** 2); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = `box-${i}`;
        box.setAttribute("style", 
            `background-color: white;\
            width: ${boxSize}px;\
            height: ${boxSize}px;\
            box-sizing: border-box;\
            border: 1px solid black;`);
        box.onmouseover = function () {
            if (box.style.backgroundColor == "white") {
                box.style.backgroundColor = random_rgb();
                box.style.opacity = 0.1;
            } else {
                box.style.opacity = parseFloat(box.style.opacity) + 0.1;
            }
        };
    
        flexGrid.appendChild(box);
    };
}

const flexGrid = document.querySelector(".flex-grid");

let numBoxes = 16;
let boxSize = 60;
createGrid(numBoxes, boxSize);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    flexGrid.innerHTML = "";

    let newGridSize = prompt("How many boxes would you like per line?", "16");
    if (isNaN(newGridSize)) {
        console.log("User did not submit a number. Default to 16 boxes per line.");
        createGrid(16, 60);
    } else {
        if (parseInt(newGridSize) > 100) {
            numBoxes = 100;
            boxSize = 960 / 100;
        } else {
            numBoxes = parseInt(newGridSize);
            boxSize = 960 / parseInt(newGridSize);
        }
        createGrid(numBoxes, boxSize);
    }
});