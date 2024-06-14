const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
    const outterDiv = document.createElement("div");
    outterDiv.setAttribute("class", "outterDivs");
    container.appendChild(outterDiv);
    for (let j = 0; j < 4; j++) {
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "innerDivs");
        outterDiv.appendChild(innerDiv);
    }
}


