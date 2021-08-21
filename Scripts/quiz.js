const formEl = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled']; 

submitBtn.addEventListener("click", ()=>{
    let score = 0;
    let index = 0;
    const userAnswers = new FormData(formEl);
    for(const value of userAnswers.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    output.innerText = `Your Score is ${score}`;
})