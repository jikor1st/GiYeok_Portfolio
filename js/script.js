console.log("javascript load");

const hamBtn = document.querySelector("nav > .hamBtn");
let navHamLi = document.querySelectorAll("nav a.hamBtn > div.hamLine");
navHamLi = Array.prototype.slice.call(navHamLi);
var hamToggle = true;

function reset(){
    minusBtn.style.visibility = "hidden";
}

function onClickHamBtn(e){
    e.preventDefault();
    if(e.type === "click"){
        if(hamToggle){
            navHamLi[0].style.transform = "rotateZ(45deg)";
            navHamLi[1].style.opacity = 0;
            navHamLi[2].style.transform = "translateY(2px) rotateZ(-45deg)";
            navHamLi[2].style.width = "100%";
        }else{
            navHamLi[0].style.transform = "";
            navHamLi[1].style.opacity = 1;
            navHamLi[2].style.transform = "";
            navHamLi[2].style.width = "60%";
        }
        hamToggle = !hamToggle;
    }
}

hamBtn.addEventListener("click", onClickHamBtn);

const minusBtn = document.querySelector('.stBtn > .minus');
const plusBtn = document.querySelector('.stBtn > .plus');
const mainG = document.querySelector('.giyeok_svg > .mainG');
const fontWeightP = document.querySelector('p.fontWeight');

let mainS = 170;
let sL = 30;

function onClickMinus(e){
    e.preventDefault();
    if(mainS > 170){
        mainS -= sL;
        // plusBtn.style.visibility = "visible";
        plusBtn.style.transform = "scale(1)";
    }
    else if(mainS <= 170){
        // minusBtn.style.visibility = "hidden";
        minusBtn.style.transform = "scale(0)";
    }
    mainControllGStroke();
}
function onClickPlus(e){
    e.preventDefault();
    if(mainS < 170 + (sL * 4)){
        mainS += sL;
        // minusBtn.style.visibility = "visible";
        minusBtn.style.transform = "scale(1)";
    }
    else if(mainS >= 170 + (sL * 4)){
        plusBtn.style.transform = "scale(0)";
    }
    mainControllGStroke();
}


function mainControllGStroke(){
    mainG.style.strokeWidth = mainS;
    mainG.style.transition = 'stroke-width 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    fontWeightP.innerText = mainS + " 두께";
}
minusBtn.addEventListener('click', onClickMinus);
plusBtn.addEventListener('click', onClickPlus);