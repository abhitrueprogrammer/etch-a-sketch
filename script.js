const canvas = document.querySelector("#canvas")
for(let i = 0; i < 16; i++){
    // const row = document.createElement("div");
    // row.classList.toggle("row");
    // canvas.appendChild(row);
    for(let j = 0; j < 16; j++){
        const pixel = document.createElement("div");
        pixel.classList.toggle("pixel");
        pixel.addEventListener("mouseenter", ()=>{
            pixel.classList.add("red");
        });
        canvas.appendChild(pixel);

    }
}


