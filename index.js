function switchThemes(){
    let themeOne = document.querySelector("#theme-one");
    let themeTwo = document.querySelector("#theme-two");
    let themeThree = document.querySelector("#theme-three");
    let circleOne = document.querySelector(".circle-one");
    let circleTwo = document.querySelector(".circle-two");
    let circleThree = document.querySelector(".circle-three");
    if(themeOne.checked){
        circleOne.classList.remove("hidden");
        circleTwo.classList.add("hidden");
        circleThree.classList.add("hidden");
        switchThemesEqual();
    }else if(themeTwo.checked){
        circleOne.classList.add("hidden");
        circleTwo.classList.remove("hidden");
        circleThree.classList.add("hidden");
        switchThemesNumber();
    }else if(themeThree.checked){
        circleOne.classList.add("hidden");
        circleTwo.classList.add("hidden");
        circleThree.classList.remove("hidden");
        switchThemesNumber();
    }
}

function switchThemesNumber(){
    let h3 = document.querySelector("h3")
    let labels = document.querySelectorAll('.theme-number + label');
    let para = document.querySelector(".right > p");
    h3.style.color = "var(--clr-number-text)";
    labels.forEach(label => {
        label.style.color = "var(--clr-number-text)";
    });
    para.style.color = "var(--clr-number-text)";
}

function switchThemesEqual(){
    let h3 = document.querySelector("h3")
    let labels = document.querySelectorAll('.theme-number + label');
    let para = document.querySelector(".right > p");
    h3.style.color = "var(--clr-equal-text)";
    labels.forEach(label => {
    label.style.color = "var(--clr-equal-text)";
    });
    para.style.color = "var(--clr-equal-text)";
}

document.querySelectorAll('.theme-number').forEach((radioInput) => {
    radioInput.addEventListener("change", switchThemes);
});

function clickableCircles(){
    let themeOne = document.querySelector("#theme-one");
    let themeTwo = document.querySelector("#theme-two");
    let themeThree = document.querySelector("#theme-three");
    let circleOne = document.querySelector(".circle-one");
    let circleTwo = document.querySelector(".circle-two");
    let circleThree = document.querySelector(".circle-three");
    circleOne.addEventListener("click", function() {
        themeOne.checked = true;
        switchThemes();
    });
    circleTwo.addEventListener("click", function() {
        themeTwo.checked = true;
        switchThemes();
    });
    circleThree.addEventListener("click", function() {
        themeThree.checked = true;
        switchThemes();
    });
}