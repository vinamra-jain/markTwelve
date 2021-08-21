const sides = document.querySelectorAll(".base-and-height");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

calcBtn.addEventListener("click", ()=>{
    let message = "";
    const base = Number(sides[0].value);
    const height = Number(sides[1].value);
    if(base === 0 || height === 0){
        message = "Invalid Input!"
    }else{
        const area = 0.5*base*height;
        message = `Area of the triangle is ${area} cm²`
    }
    output.innerText = message;
})