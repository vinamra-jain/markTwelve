const angOneEle = document.querySelector("#angle-one");
const angTwoEle = document.querySelector("#angle-two");
const angThreeEle = document.querySelector("#angle-three");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

let outputMessage = "";

const isTriangle = (angOne, angTwo, angThree) => {
  const angleOne = Number(angOne);
  const angleTwo = Number(angTwo);
  const angleThree = Number(angThree);
  if (angleOne && angleTwo && angleThree) {
    const sumOfAngles = angleOne + angleTwo + angleThree;
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

checkBtn.addEventListener("click", () => {
  const angOne = angOneEle.value;
  const angTwo = angTwoEle.value;
  const angThree = angThreeEle.value;

  if (angOne && angTwo && angThree) {
    if (isTriangle(angOne, angTwo, angThree)) {
      outputMessage = "Yes, it is a Triangle";
    } else {
      outputMessage = "No, it isn't a Triangle";
    }
  } else {
    outputMessage = "Hey, you missed one or more field(s).";
  }

  output.innerText = outputMessage;
});
