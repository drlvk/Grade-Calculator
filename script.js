// Input references

let container = document.querySelector(".container");
let result = document.querySelector(".result");
let maths = document.querySelector("#maths");
let phy = document.querySelector("#phy");
let che = document.querySelector("#che");
let eng = document.querySelector("#eng");
let hindi = document.querySelector("#hindi");

let btn = document.querySelector(".btn");

let form = document.querySelector(".input");

function allCalculation() {
  let total =
    parseFloat(maths.value) +
    parseFloat(phy.value) +
    parseFloat(che.value) +
    parseFloat(eng.value) +
    parseFloat(hindi.value);

  let percentage = (total * 100) / 500;

  let Grades;
  if (percentage <= 100 && percentage >= 80) {
    Grades = "A";
  }
  if (percentage <= 79 && percentage >= 60) {
    Grades = "B";
  }
  if (percentage <= 59 && percentage >= 33) {
    Grades = "C";
  }
  if (percentage <= 32 && percentage >= 0) {
    Grades = "F";
  }

  if (Grades === "A" || Grades === "B" || Grades === "C") {
    Status = "Pass";
  } else if (Grades === "F") {
    Status = "Fail";
  } else {
    Status = "Please Enter Valid Marks";
  }

  function showResult() {
    result.innerHTML = "";
    let output = document.createElement("div");
    output.setAttribute("class", "output");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");

    p1.textContent =
      total > 500 || typeof total !== "number"
        ? ``
        : ` Total Score : ${total}/500`;
    p2.textContent =
      percentage > 100 || typeof percentage !== "number"
        ? ``
        : ` Percentage : ${percentage}`;
    p3.textContent = Grades === undefined ? `` : ` Grade : ${Grades}`;
    p4.textContent =
      Status === "A" || Status === "B" || Status === "C" || Status === "F"
        ? ` You are ${Status}`
        : `${Status}`;

    output.append(p1);
    output.append(p2);
    output.append(p3);
    output.append(p4);

    result.append(output);
  }

  return showResult();
}

btn.addEventListener("click", () => {
  allCalculation();
});
