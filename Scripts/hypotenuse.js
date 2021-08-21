const sides = document.querySelectorAll(".sides");
const calcBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");

const calculateSumOfSquares = (a,b)=>{
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}

calcBtn.addEventListener("click", ()=>{
    const a = Number(sides[0].value);
    const b = Number(sides[1].value);
    let message = "";
    if(a===0 || b===0){
        message = "Invalid Input";
    }else{
        const c = Math.sqrt(calculateSumOfSquares(a,b));
        message = `Hypotenuse = ${c}`;
    }
    output.innerText = message;
})