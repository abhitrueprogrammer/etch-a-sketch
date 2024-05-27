const canvas = document.querySelector("#canvas")
createCanvas(16,16);

const buttonChangeCanvas = document.querySelector("#change-canvas-size")

buttonChangeCanvas.addEventListener("click", () =>{
    let userInput = window.prompt("Enter canvas size(<100): ", "16");
    userInput = +userInput //add sanitization and error handling
    if(isNaN(userInput)){
        window.alert("Please enter a single integer");
        return
    }
    if(userInput > 100){
        window.alert("Cannot enter value > 100");
        return;
    }
    clearCanvas();
    createCanvas(userInput,userInput);
})
function clearCanvas(){
    canvas.textContent=""
}
function createCanvas(x,y) {
    const columnPercentage = 100/x;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const pixel = document.createElement("div");
            pixel.classList.toggle("pixel");
            pixel.style.height= `${columnPercentage}%`;
            pixel.style.flex = `1 0 ${columnPercentage}%`;
            pixel.addEventListener("mouseenter", () => {
                pixel.classList.add("red");
            });
            canvas.appendChild(pixel);
        }
    }
}

