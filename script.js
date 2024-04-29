const flexGrid = document.querySelector(".flex-grid");

for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.id = `box-${i}`;
    box.setAttribute("style", 
        "background-color: white;\
        width: 60px;\
        height: 60px;\
        box-sizing: border-box;\
        border: 1px solid black;");

    flexGrid.appendChild(box);
}