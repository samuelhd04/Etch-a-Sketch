const container = document.querySelector(".container");
const button = document.querySelector(".button");
const refresh = document.querySelector(".refresh");

let size = 16;

button.addEventListener("click", event => {
    while (true) {
        size = prompt("Enter a number below 100:");

        if (size < 100) {
            break;
        }
    }

    event.target.textContent = `${size} x ${size}`;
    displaySketch();
});

refresh.addEventListener("click", displaySketch);

function getRandom() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

function displaySketch() {
    if (container.hasChildNodes()) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i = 0; i < size; i++) {
            let outterDiv = document.createElement("div");
            outterDiv.setAttribute("class", "outterDivs");
            container.appendChild(outterDiv);

            for (let j = 0; j < size; j++) {
                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "innerDivs");
                outterDiv.appendChild(innerDiv);
            }
        }

    } else {
        for (let i = 0; i < size; i++) {
            let outterDiv = document.createElement("div");
            outterDiv.setAttribute("class", "outterDivs");
            container.appendChild(outterDiv);

            for (let j = 0; j < size; j++) {
                let innerDiv = document.createElement("div");
                innerDiv.setAttribute("class", "innerDivs");
                outterDiv.appendChild(innerDiv);
            }
        }
    }

    const innerDivs = document.querySelectorAll(".innerDivs");

    innerDivs.forEach(div => {
        div.addEventListener("mouseover", event => {
            if (event.target.style.backgroundColor === "") {
                event.target.style.backgroundColor = 
                `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
            }
        })
    })
}

displaySketch();






