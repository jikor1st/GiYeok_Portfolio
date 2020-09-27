console.log("javascript load");

const hamBtn = document.querySelector("nav > .hamBtn");
let navHamLi = document.querySelectorAll("nav a.hamBtn > div.hamLine");
navHamLi = Array.prototype.slice.call(navHamLi);
const navHam = document.querySelector('ul.navHam');
var navHamEls = document.querySelectorAll('ul.navHam > li');
navHamEls = Array.prototype.slice.call(navHamEls);
var lineV = document.querySelectorAll('div.mainSvgCon > div > svg.lineV');
lineV = Array.prototype.slice.call(lineV);
var lineDs = document.querySelectorAll('div.dScon > svg.lineDs');
lineDs = Array.prototype.slice.call(lineDs);


var hamToggle = true;

const minusBtn = document.querySelector('.stBtn > .minus');
const plusBtn = document.querySelector('.stBtn > .plus');
const mainG = document.querySelector('.giyeok_svg > .mainG');
const fontWeightP = document.querySelector('p.fontWeight');

window.onload  = function() {
    // for(var i = 0;i < navHamEls.length; i++){
    //     // navHamEls[i].style.transition = "";
    //     navHamLi[i].style.transition = "";
    // } 
}

reset();

function reset(){
    minusBtn.style.transform = "scale(0)";
    let hamD = 0;
    for(var i = 0;i < navHamEls.length;i++){
        navHamEls[i].style.transition = "all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6) " + hamD + "s";
        navHamEls[i].style.visibility = "hidden";
        navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
        navHamEls[i].style.opacity = "0";
        hamD += 0.2;
    }
}

function onClickHamBtn(e){
    e.preventDefault();
    if(e.type === "click"){
        if(hamToggle){
            navHamLi[0].style.transform = "rotateZ(45deg)";
            navHamLi[1].style.opacity = 0;
            navHamLi[2].style.transform = "translateY(2px) rotateZ(-45deg)";
            navHamLi[2].style.width = "100%";

            for(var i = 0;i < navHamEls.length;i++){
                navHamEls[i].style.visibility = "visible";
                navHamEls[i].style.transform = "rotateZ(0) translateY(0)";
                navHamEls[i].style.opacity = "1";
            }
            
        }else{
            navHamLi[0].style.transform = "";
            navHamLi[1].style.opacity = 1;
            navHamLi[2].style.transform = "";
            navHamLi[2].style.width = "60%";

            for(var i = 0;i < navHamEls.length;i++){
                navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
                navHamEls[i].style.opacity = "0";
                navHamEls[i].style.visibility = "hidden";
            }
            
        }
        hamToggle = !hamToggle;
    }
}

hamBtn.addEventListener("click", onClickHamBtn);



let mainS = 170;
let sL = 30;
let sP = 0;
var tranBtn = true;
function onClickMinus(e){
    e.preventDefault();
    if(!tranBtn){
        return;
    }
    if(mainS > 170){
        mainS -= sL;
        // plusBtn.style.visibility = "visible";
        plusBtn.style.transform = "scale(1)";
    }
    if(mainS <= 170){
        // minusBtn.style.visibility = "hidden";
        minusBtn.style.transform = "scale(0)";
    }
    sP += 15;
    mainControllGStroke();
}
function onClickPlus(e){
    e.preventDefault();
    if(!tranBtn){
        return;
    }
    if(mainS < 290){
        mainS += sL;
        // minusBtn.style.visibility = "visible";
        minusBtn.style.transform = "scale(1)";
    }
    if(mainS >= 290){
        plusBtn.style.transform = "scale(0)";
    }
    sP -= 15;
    // fontWeightP.style.animation = ""
    mainControllGStroke();
}


function mainControllGStroke(){
    tranBtn = false;
    setTimeout(function(){
        tranBtn = true;
    },800);
    mainG.style.strokeWidth = mainS;
    mainG.style.transition = 'stroke-width 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    fontWeightP.innerText = mainS + " 두께";
    for(var i = 0; i < lineV.length;i++){
        lineV[i].style.transition = 'all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        lineDs[i].style.transition = 'all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    }
    lineV[0].style.transform = "translateY(" + sP + "px)";
    lineV[1].style.transform = "translateY(" + sP * -1 + "px)";
    lineDs[0].style.transform = "translateY(" + sP + "px)";
    lineDs[1].style.transform = "translateY(" + sP * -1 + "px)";
}
minusBtn.addEventListener('click', onClickMinus);
plusBtn.addEventListener('click', onClickPlus);