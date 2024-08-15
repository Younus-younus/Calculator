let nums = document.getElementsByClassName("numbers");
let display = document.getElementById("diplaynums");
let content = document.getElementById("content");
let lines = document.getElementsByClassName("lines");
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", (e) => {
        let num = e.target.innerText;
        console.log(num);
        displaynums.value += num;
    });
}
let arth = document.getElementsByClassName("arth");
for (let i = 0; i < arth.length; i++) {
    arth[i].addEventListener("click", (e) => {
        let arth = e.target.innerText;
       console.log(arth);
       displaynums.value += arth;
    });
}
let reset = document.getElementById("reset");
let correct = document.getElementById("correct");
reset.addEventListener("click", ()=> {
    displaynums.value = '';
});
let ans = document.getElementById("ans");
ans.addEventListener("click", () => {
    try {
        let res = eval(displaynums.value);
        displaynums.value = res;
    } catch (error) {
        displaynums.value = "Error";
    }
});

correct.addEventListener("click", ()=> {
    let strnew = displaynums.value.slice(0,-1);
    displaynums.value = strnew;
});
let dark = document.getElementById("toggle");
// Assuming dark is the element
let isEndJustified = false;

dark.addEventListener("click", () => {
    if (!isEndJustified) {
        dark.style.justifyContent = "end";
        isEndJustified = true;
        dark.style.background = "#121212";
        darkmode();
    } else {
        // Resetting to default value
        dark.style.justifyContent = ""; // whatever the default value is
        isEndJustified = false;
        dark.style.background = "";
        lightmode();
    }
});
function darkmode() {
    let body = document.querySelector("body");
    body.style.background = "linear-gradient(45deg,#0a0a0a,#3a4452)";
    content.style.background = "transparent"; 
    content.style.border = "1px solid #717377";
    content.style.borderRadius = "16px"; 
    content.style.boxShadow = "0px 3px 10px rgba(113,115,119,0.5)";
    displaynums.classList.add("input");
    for(let i of arth) {
        i.style.color = "#6fff00";
    }
    for(let i of lines) {
        i.classList.add("buttons");
    }
    reset.style.backgroundColor = "#fb7c14";
    correct.style.backgroundColor = "#fb7c14";
    ans.style.color = "#6fff00";
}
function lightmode() {
    let body = document.querySelector("body");
    body.style.background = "";
    body.style.background = "";
    content.style.background = ""; 
    content.style.border = "";
    content.style.borderRadius = ""; 
    content.style.boxShadow = "";
    reset.style.backgroundColor = "";
    correct.style.backgroundColor = "";
    ans.style.color = "";
    for(let i of arth) {
        i.style.color = "";
    }
    for(let i of lines) {
        i.classList.remove("buttons");
    }
    displaynums.classList.remove("input");
}
