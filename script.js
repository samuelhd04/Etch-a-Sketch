const container = document.querySelector(".container");
const button = document.querySelector(".button");

let size = 4;

button.addEventListener("click", () => {
    size = prompt("Enter a number below 100:");
});

button.addEventListener("click", displaySketch);

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
            event.target.style.backgroundColor = "gray";
        })
    })
}

displaySketch();






