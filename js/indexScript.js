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
var lineH = document.querySelectorAll('div.mainSvgCon > div.line_svg');
lineH = Array.prototype.slice.call(lineH);

const naBtn01 = document.querySelector('.naBtn01');
const naBtn02 = document.querySelector('.naBtn02');
const naBtn03 = document.querySelector('.naBtn03');

var hamToggle = true;

const minusBtn = document.querySelector('.stBtn > .minus');
const plusBtn = document.querySelector('.stBtn > .plus');
const mainG = document.querySelector('.giyeok_svg > .mainG');
const fontWeightP = document.querySelector('p.fontWeight');

const mTBox = document.querySelector('#mainPage > .introCon');
const mT01 = document.querySelector('.introCon > .introMain');
const mT02 = document.querySelector('.introSub > .inS01');
const mT03 = document.querySelector('.introSub > .inS02');
const mT04 = document.querySelector('.contact_con');

var sectionEls = document.querySelectorAll('main > section');
const section01 = document.querySelector('main > #mainPage');
const section02 = document.querySelector('main > #contactPage');

var jgySEls = document.querySelectorAll('.jgySvgCon > svg.jgy_svg');
var jgyGEls = document.querySelectorAll('.jgySvgCon > svg.jgy_svg > g.g_gg');

window.onload  = function() {
    // for(var i = 0;i < navHamEls.length; i++){
    //     // navHamEls[i].style.transition = "";
    //     navHamLi[i].style.transition = "";
    // } 
}

reset();

function reset(){
    section01.style.top = "0";
    section02.style.top = "100vh";
    minusBtn.style.backgroundColor = "#D9DDE3";
    let hamD = 0;
    for(var i = 0;i < navHamEls.length;i++){
        navHamEls[i].style.transition = "all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6) " + hamD + "s";
        navHamEls[i].style.visibility = "hidden";
        navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
        navHamEls[i].style.opacity = "0";
        hamD += 0.2;
    }
    mT04.style.opacity="0";
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
let jgyP = 50;

var tranBtn = true;
var limitBM = true;
var limitBP = true;
var fontEasing = "cubic-bezier(.53,-1.12,.47,1.95)";
var btnEasing = "cubic-bezier(.53,-1.12,.47,1.95)";

var indexMain = 0;
var topFix = 100;

function onClickMinus(e){
    e.preventDefault();
    if(!tranBtn){
        return;
    }
    if(mainS > 170 && limitBM){
        mainS -= sL;
        // plusBtn.style.visibility = "visible";
        // plusBtn.style.transform = "scale(1)";
        plusBtn.style.backgroundColor = "#0F78F4";
        minusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
        fontWeightP.style.animation = "fontLeft 0.8s " + fontEasing + " 1 alternate"
        setTimeout(function(){
            minusBtn.style.animation = "";
            fontWeightP.style.animation = "";
        },800);
        indexMain -= 1;
        ControllScroll();
        sP += 15;
        jgyP += 10;
        mainControllGStroke();
        limitBP = true;
    }
    if(mainS <= 170){
        // minusBtn.style.visibility = "hidden";
        // minusBtn.style.transform = "scale(0)";
        minusBtn.style.backgroundColor = "#D9DDE3";
        limitBM = false;
    }
    
}
function onClickPlus(e){
    e.preventDefault();
    if(!tranBtn){
        return;
    }
    if(mainS < 260 && limitBP){
        mainS += sL;
        // minusBtn.style.visibility = "visible";
        // minusBtn.style.transform = "scale(1)";
        minusBtn.style.backgroundColor = "#0F78F4";
        plusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
        fontWeightP.style.animation = "fontRight 0.8s " + fontEasing + " 1 alternate";
        setTimeout(function(){
            plusBtn.style.animation = "";
            fontWeightP.style.animation = "";
        },800);
        indexMain += 1;
        ControllScroll();
        sP -= 15;
        jgyP -= 10;
        mainControllGStroke();
        limitBM = true;
    }
    if(mainS >= 260){
        // plusBtn.style.transform = "scale(0)";
        plusBtn.style.backgroundColor = "#D9DDE3";
        limitBP = false;
    }
}
function onClickNaBtn02(e){
    e.preventDefault();
    
}
naBtn02.addEventListener('click', onClickNaBtn02);

var mw01 = window.matchMedia("(max-width:1920px) and (min-width:1201px)");
var mw02 = window.matchMedia("(max-width:1200px) and (min-width:701px)");
var mw03 = window.matchMedia("(max-width:700px)");
window.onresize = function(){
    ControllScroll();
    mTBox.style.transition = "";
};
var CBM = false;
function ControllScroll(){
    mTBox.style.transition = "all 0.8s cubic-bezier(.53,-1.12,.47,1.95)";
    if(indexMain == 0){
        if(mw01.matches){
            mTBox.style.top = "25.93vw";
        }
        else if(mw02.matches){
            mTBox.style.top = "37.34vw";
        }
        else if(mw03.matches){
            mTBox.style.top = "330px";
        }
        mT02.style.animation = "displayC 0.8s " + fontEasing + " 0.1s 1 backwards";
    }
    else if(indexMain == 1){
        if(mw01.matches){
            mTBox.style.top = "8.95vw";
            console.log('m01');
        }
        else if(mw02.matches){
            mTBox.style.top = "20vw";
            console.log('m02');
        }
        else if(mw03.matches){
            mTBox.style.top = "56px";
            console.log('m03');
        }
        mT02.style.animation = "displayT 0.8s " + fontEasing + " 0.1s 1 forwards";
        if(CBM){
            mT03.style.animation = "displayC 0.8s " + fontEasing + " 0.1s 1 backwards";
        }
    }
    else if(indexMain == 2){
        CBM = true;
        mT03.style.animation = "displayT 0.8s " + fontEasing + " 0.1s 1 forwards" ;
        section01.style.top = "0";
        section02.style.top = "100vh";
        mT04.style.opacity="0";
        mT04.style.transition = "opacity 0.5s ease-in-out";
    }
    else if(indexMain == 3){
        for(var i = 0; i < sectionEls.length;i++){
            sectionEls[i].style.transition = "all 0.8s cubic-bezier(.53,-1.12,.47,1.95)";
        }
        sectionEls[1].style.transition = "all 0.7s ease-in";
        section01.style.top = "-100vh";
        section02.style.top = "0";
        mT04.style.opacity = "1";
        mT04.style.transition = "opacity 3s ease-in-out";
    }
}

function mainControllGStroke(){
    tranBtn = false;
    setTimeout(function(){
        tranBtn = true;
    },800);
    setTimeout(function(){
        fontWeightP.innerText = mainS + " 두께";
    },600);
    
    mainG.style.strokeWidth = mainS;
    mainG.style.transition = 'stroke-width 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    
    for(var i = 0; i < lineV.length;i++){
        lineV[i].style.transition = 'all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        lineDs[i].style.transition = 'all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        lineH[i].style.transition = 'all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    }
    lineV[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
    lineV[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";
    lineDs[0].style.transform = "translateY(" + sP + "px)";
    lineDs[1].style.transform = "translateY(" + sP * -1 + "px)";

    lineH[0].style.transform = "translateX(" + sP + "px) scaleY(1)";
    lineH[1].style.transform = "translateX(" + sP * -1 + "px) scaleY(1)";
    
    jgySEls[0].style.left = jgyP + "%";
    jgySEls[2].style.right = jgyP + "%";
}
minusBtn.addEventListener('click', onClickMinus);
plusBtn.addEventListener('click', onClickPlus);