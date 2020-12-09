console.log("javascript load");

const hamBtn = document.querySelector("nav > .hamBtn");
let navHamLi = document.querySelectorAll("nav a.hamBtn > div.hamLine");
navHamLi = Array.prototype.slice.call(navHamLi);
const navHam = document.querySelector('ul.navHam');
var navHamEls = document.querySelectorAll('ul.navHam > li');
navHamEls = Array.prototype.slice.call(navHamEls);
var navAEls = document.querySelectorAll('ul.navHam > li > a');
navAEls = Array.prototype.slice.call(navAEls);

var dScon = document.querySelector('div.dScon');
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

const stBtn = document.querySelector('.stBtn');
const minusBtn = document.querySelector('.stBtn > .minus');
const plusBtn = document.querySelector('.stBtn > .plus');
const pageNow = document.querySelector('.stBtn > p');
const mainG = document.querySelector('.giyeok_svg > .mainG');
const fontWeightP = document.querySelector('p.fontWeight');
const description = document.querySelector('div.description');
const motion01 = document.querySelector('div.motion01');

const mTBox = document.querySelector('#mainPage > .introCon');
const introCt = document.querySelector('h2.intro_ct');
const mT01 = document.querySelector('.introCon > .introMain');
const mT01_a = document.querySelector('.introSub > .inS01');
const mT01_b = document.querySelector('.introSub > .inS02');
const mT02 = document.querySelector('section#port_wrap');
const mT03 = document.querySelector('.contact_con');

var sectionEls = document.querySelectorAll('main > section');
const section01 = document.querySelector('main > #mainPage');
const section02 = document.querySelector('section#port_wrap');
const section03 = document.querySelector('main > #contactPage');

const lastCt = document.querySelector('h2.intro_ct');

var mainDot = document.querySelector('div.dot');
var inHr = document.querySelector('dl.inS01 > div > hr');

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
        navHamEls[i].style.transition = "all 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6) " + hamD + "s";
        navHamEls[i].style.visibility = "hidden";
        navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
        navHamEls[i].style.opacity = "0";
        hamD += 0.1;
    }
    mT03.style.opacity="0";
    motion01.style.animation = "motion01 1s ease-in-out infinite forwards";
    navAEls[0].style.color = "#0f78f4";
    navAEls[1].style.color = "#000";
    navAEls[2].style.color = "#000";
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
let jgyTP = -3;

var tranBtn = true;
var limitBM = true;
var limitBP = true;
var fontEasing = "cubic-bezier(.53,-1.12,.47,1.95)";
var btnEasing = "cubic-bezier(.53,-1.12,.47,1.95)";

var indexMain = 0;
var indexFull = 4;
var topFix = 100;

var ctlC = false;

function onClickHangle(e){
    e.preventDefault();
    hangle();
}
function onClickWork(e){
    e.preventDefault();
    Work();
}
function onClickContact(e){
    e.preventDefault();
    Contact();
}

function Work(){
    tranBtn = true;
    
    console.log(indexMain);
    if(indexMain > 3){
        indexMain--;
        fontWeightP.style.animation = "fontRight 0.8s " + fontEasing + " 1 alternate";
        setTimeout(function(){
            minusBtn.style.animation = "";
            fontWeightP.style.animation = "";
            pageNow.style.animation = "";
        },800);
        ctlDs();
    }
    else if(indexMain < 3){
        var tt = 0;
        var mm = 0;
        switch(indexMain){
            case 0:
                mm = 3;
                break;
            case 1:
                mm = 2;
                break;
            case 2:
                mm = 1;
                break;
        }
        var timeS = setInterval(function(){
            if(tt++<mm){
                indexMain++;
                fontWeightP.style.animation = "fontLeft 0.8s " + fontEasing + " 1 alternate";
                setTimeout(function(){
                    minusBtn.style.animation = "";
                    fontWeightP.style.animation = "";
                    pageNow.style.animation = "";
                },800);
            }
            else{
                clearInterval(timeS);
            }
            ctlDs();
        },1000);
    }
    plusBtn.style.backgroundColor = "#0F78F4";
    minusBtn.style.backgroundColor = "#0F78F4";
}
function hangle(){
    tranBtn = true;
    var ss = 0;
    var nn = 0;
    switch(indexMain){
        case 0:
            nn = 0;
            break;
        case 1:
            nn = 1;
            break;
        case 2:
            nn = 2;
            break;
        case 3:
            nn = 3;
            break;
        case 4:
            nn = 4;
            break;
    }
    var timeT = setInterval(function(){
        if(ss++<nn){
            indexMain--;
            minusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
            fontWeightP.style.animation = "fontLeft 0.8s " + fontEasing + " 1 alternate";
            pageNow.style.animation = "pagePBottom 0.8s " + fontEasing + " 1 alternate";
            setTimeout(function(){
                minusBtn.style.animation = "";
                fontWeightP.style.animation = "";
                pageNow.style.animation = "";
            },800);
        }
        else{
            // plusBtn.style.backgroundColor = "#0F78F4";
            // minusBtn.style.backgroundColor = "#D9DDE3";
            clearInterval(timeT);
        }
        ctlDs();
    },1000);
}
function Contact(){
    tranBtn = true;
    var ln = 0;
    var qq = 0;
    switch(indexMain){
        case 0:
            qq = 4;
            break;
        case 1:
            qq = 3;
            break;
        case 2:
            qq = 2;
            break;
        case 3:
            qq = 1;
            break;
        case 4:
            qq = 0;
            
            break;
    }
    var timeT = setInterval(function(){
        if(ln++<qq){
            indexMain++;
            plusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
            fontWeightP.style.animation = "fontLeft 0.8s " + fontEasing + " 1 alternate";
            pageNow.style.animation = "pagePTop 0.8s " + fontEasing + " 1 alternate";
            setTimeout(function(){
                plusBtn.style.animation = "";
                fontWeightP.style.animation = "";
                pageNow.style.animation = "";
            },800);
        }
        else{
            // plusBtn.style.backgroundColor = "#0F78F4";
            // minusBtn.style.backgroundColor = "#D9DDE3";
            clearInterval(timeT);
        }
        ctlDs();
    },1000);
}
navAEls[0].addEventListener('click', onClickHangle);
navAEls[1].addEventListener('click', onClickWork);
navAEls[2].addEventListener('click', onClickContact);

function pageNowChange(){
    setTimeout(function(){
        if(indexMain == 0){
            pageNow.innerText = '글자의 무게';
        }
        else if(indexMain == 1){
            pageNow.innerText = '이름의 무게';
        }
        else if(indexMain == 2){
            pageNow.innerText = '기억되는 사람';
        }
        else if(indexMain == 3){
            pageNow.innerText = '나의 작업물';
        }
        else if(indexMain == 4){
            pageNow.innerText = '글자의 무게';
        }
    },600);
}
function ctlDs(){
    if(indexMain == 0){
        mainS = 170;
        sP = 0;
        jgyP = 50;
        jgyTP = -3;
        inHr.style.animation = '';
        navAEls[0].style.color = "#0f78f4";
        navAEls[1].style.color = "#000";
        navAEls[2].style.color = "#000";
        plusBtn.style.backgroundColor = "#0F78F4";
        minusBtn.style.backgroundColor = "#D9DDE3";
    }
    else if(indexMain == 1){
        mainS = 200;
        sP = -15;
        jgyP = 30;
        jgyTP = 10;
        navAEls[0].style.color = "#0f78f4";
        navAEls[1].style.color = "#000";
        navAEls[2].style.color = "#000";
        description.style.animation = 'unloadDescription 0.5s ease-in-out 1 forwards';
        motion01.style.animation = "motion01 1s ease-in-out 1 forwards";
        mainDot.style.animation = '';
        inHr.style.animation = 'inS01Hr 1.5s ease 0.5s forwards';
    }
    else if(indexMain == 2){
        mainS = 230;
        sP = -30;
        jgyP = 9;
        jgyTP = 50;
        navAEls[0].style.color = "#0f78f4";
        navAEls[1].style.color = "#000";
        navAEls[2].style.color = "#000";
        // mainDot.style.transform = 'translateX(-50%) scale(40)';
        mainDot.style.animation = 'scaleDot 1.5s ease 0.5s forwards';
        // mainDot.style.transition = "all 0.8s ease 0.8s";
    }
    else if(indexMain == 3){
        mainS = 260;
        sP = -45;
        jgyP = 50;
        jgyTP = 50;
        mainDot.style.animation = '';
        navAEls[0].style.color = "#000";
        navAEls[1].style.color = "#0f78f4";
        navAEls[2].style.color = "#000";
    }
    else if(indexMain == 4){
        mainS = 290;
        sP = -60;
        jgyP = 50;
        jgyTP = -3;
        navAEls[0].style.color = "#000";
        navAEls[1].style.color = "#000";
        navAEls[2].style.color = "#0f78f4";
        plusBtn.style.backgroundColor = "#D9DDE3";
        minusBtn.style.backgroundColor = "#0F78F4"
    }
    ControllScroll();
    mainControllGStroke();
    pageNowChange();
}

function onClickMinus(e){
    e.preventDefault();  
    if(!tranBtn){
        return;
    }
    if(indexMain > 0 && limitBM){
        // mainS -= sL;
        // plusBtn.style.visibility = "visible";
        // plusBtn.style.transform = "scale(1)";
        plusBtn.style.backgroundColor = "#0F78F4";
        minusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
        fontWeightP.style.animation = "fontLeft 0.8s " + fontEasing + " 1 alternate";
        pageNow.style.animation = "pagePTop 0.8s " + fontEasing + " 1 alternate";
        setTimeout(function(){
            minusBtn.style.animation = "";
            fontWeightP.style.animation = "";
            pageNow.style.animation = "";
        },800);
        indexMain -= 1;
        ctlDs();
        // ControllScroll();
        // sP += 15;
        // jgyP += 10;
        // mainControllGStroke();
        limitBP = true;
    }
    if(indexMain <= 0){
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
    if(indexMain < indexFull && limitBP){
        // mainS += sL;
        // minusBtn.style.visibility = "visible";
        // minusBtn.style.transform = "scale(1)";
        minusBtn.style.backgroundColor = "#0F78F4";
        plusBtn.style.animation = "btnScale 0.8s " + btnEasing + " 1 alternate";
        fontWeightP.style.animation = "fontRight 0.8s " + fontEasing + " 1 alternate";
        pageNow.style.animation = "pagePBottom 0.8s " + fontEasing + " 1 alternate";
        setTimeout(function(){
            plusBtn.style.animation = "";
            fontWeightP.style.animation = "";
            pageNow.style.animation = "";
        },800);
        indexMain += 1;
        ctlDs();
        // ControllScroll();
        // sP -= 15;
        // jgyP -= 10;
        // mainControllGStroke();  
        limitBM = true;
    }
    if(indexMain >= indexFull){
        // plusBtn.style.transform = "scale(0)";
        plusBtn.style.backgroundColor = "#D9DDE3";
        limitBP = false;
    }
}
function onClickNaBtn02(e){
    e.preventDefault();
    
}
naBtn02.addEventListener('click', onClickNaBtn02);

// var mwMax = window.matchMedia("(max-width:1924px)");
var mw01 = window.matchMedia("(max-width:1920px) and (min-width:1201px)");
var mw02 = window.matchMedia("(max-width:1200px) and (min-width:701px)");
var mw03 = window.matchMedia("(max-width:700px)");
window.onresize = function(){
    ControllScroll();
    mTBox.style.transition = "";
    stBtn.style.top = "26%";
    stBtn.style.bottom = 'unset';
    if(mw01.matches){
        stBtn.style.top = "26%";
        stBtn.style.bottom = 'unset';
    }
    else if(mw02.matches){
        // stBtn.style.left = '75%';
        stBtn.style.top = "26%";
        stBtn.style.bottom = 'unset';
    }
    else if(mw03.matches){
        stBtn.style.top = 'unset';
        stBtn.style.bottom = '45px';
    }
    if((mw01.matches || mw02.matches) && indexMain == 3){
        stBtn.style.top = '5%';
        // stBtn.style.left = '50%';
    }
    else if(mw03.matches && indexMain == 3){
        stBtn.style.top = 'unset';
        stBtn.style.bottom = '45px';
    }
    
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
        mT01_a.style.animation = "displayC 0.8s " + fontEasing + " 0.1s 1 backwards";
        if(mw01.matches || mw02.matches){
            stBtn.style.top = "26%";
            stBtn.style.bottom = 'unset';
        }
        jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(1)";
        jgySEls[0].style.opacity = '1';
        jgySEls[1].style.transform = "translate(-50%,-50%) scale(1)";
        jgySEls[1].style.opacity = '1';
        jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(1)";
        jgySEls[2].style.opacity = '1';
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
        mT01_a.style.animation = "displayT 0.7s " + fontEasing + " 1 forwards";
        if(CBM){
            mT01_b.style.animation = "displayC 0.8s " + fontEasing + " 0.1s 1 backwards";
        }
        if(mw01.matches || mw02.matches){
            stBtn.style.top = "26%";
            stBtn.style.bottom = 'unset';
        }
        jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(1)";
        jgySEls[0].style.opacity = '1';
        jgySEls[1].style.transform = "translate(-50%,-50%) scale(1)";
        jgySEls[1].style.opacity = '1';
        jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(1)";
        jgySEls[2].style.opacity = '1';
    }
    else if(indexMain == 2){
        CBM = true;
        mT01_b.style.animation = "displayT 0.8s " + fontEasing + " 0.1s 1 forwards" ;
        section01.style.top = "0";
        section02.style.transform = "translateY(100vh)";
        // mT04.style.opacity="0";
        // mT04.style.transition = "opacity 0.8s ease-in-out";
        if(mw01.matches || mw02.matches && indexMain == 2){
            stBtn.style.top = "26%";
            stBtn.style.bottom = 'unset';
        }
        if(mw01.matches && indexMain == 2){
            stBtn.style.left = "50%";
        }
        else if(mw02.matches && indexMain == 2){
            stBtn.style.left = "75%";
        }
        else if(mw03.matches && indexMain == 2){
            stBtn.style.left = "50%";
        }
        mainG.style.animation = "drawG 0.8s ease forwards alternate";
        fontWeightP.style.opacity = '1';
        fontWeightP.style.visibility = 'visible';

        lineV[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineV[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";

        lineH[0].style.transform = "translateX(" + sP + "px) scaleY(1)";
        lineH[1].style.transform = "translateX(" + sP * -1 + "px) scaleY(1)";

        lineDs[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineDs[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";

        unDraw();
        jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(1)";
        jgySEls[0].style.opacity = '1';
        jgySEls[1].style.transform = "translate(-50%,-50%) scale(1)";
        jgySEls[1].style.opacity = '1';
        jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(1)";
        jgySEls[2].style.opacity = '1';
    }
    else if(indexMain == 3){
        for(var i = 0; i < sectionEls.length;i++){
            sectionEls[i].style.transition = "all 0.8s cubic-bezier(.53,-1.12,.47,1.95)";
        }
        sectionEls[1].style.transition = "all 0.7s ease-in";
        section01.style.top = "-100vh";
        section02.style.transform = "translateY(-100vh)";
        section03.style.transform = 'translateY(0)';

        lastCt.style.transform = "scale(15)";
        lastCt.style.transition = "all 0.5s cubic-bezier(0.855, 1.125, 0.000, 0.990)";
        lastCt.style.transformOrign = "right center";
        lastCt.style.visibility = "hidden";

        stBtn.style.transition = "all 0.5s cubic-bezier(.53,-1.12,.47,1.95)";
        if(mw01.matches || mw02.matches && indexMain == 3){
            stBtn.style.top = '5%';
            stBtn.style.left = '50%';
        }
        else if(mw03.matches && indexMain == 3){
            stBtn.style.top = 'unset';
            stBtn.style.bottom = '45px';
        }
        mainG.style.animation = "undrawG 0.8s ease forwards alternate";
        fontWeightP.style.opacity = '0';
        fontWeightP.style.visibility = 'hidden';

        lineV[0].style.transform = "translateY(" + sP + "px) scaleY(0)";
        lineV[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(0)";

        lineH[0].style.transform = "translateX(" + sP + "px) scaleY(0)";
        lineH[1].style.transform = "translateX(" + sP * -1 + "px) scaleY(0)";

        lineDs[0].style.transform = "translateY(" + sP + "px) scaleY(0)";
        lineDs[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(0)";
        
        setTimeout(function(){
            var zz = 0;
            var startJ = setInterval(function(){
                if(zz == 0){
                    jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(10)";
                    jgySEls[0].style.opacity = '0';
                }
                else if(zz == 1){
                    jgySEls[1].style.transform = "translate(-50%,-50%) scale(10)";
                    jgySEls[1].style.opacity = '0';
                }
                else if(zz == 2){
                    jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(10)";
                    jgySEls[2].style.opacity = '0';
                }
                else{
                    clearInterval(startJ);
                }
                zz++;
            },250);
            
            // jgySEls[0].style.filter = 'blur(10px)';
            // jgySEls[1].style.filter = 'blur(10px)';
            // jgySEls[2].style.filter = 'blur(10px)';
            drawFirst();
        },500);
        
        mT03.style.opacity = "0";
        mT03.style.transition = "opacity 0.6s ease-in-out";
    }
    else if(indexMain == 4){
        section02.style.transform = "translateY(0)";
        section03.style.transform = "translateY(-100vh)";

        lastCt.style.transition = "all 2s cubic-bezier(0.855, 1.125, 0.000, 0.990) 0.5s";
        lastCt.style.transform = "scale(1)";
        lastCt.style.visibility = "visible";

        lineV[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineV[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";

        lineH[0].style.transform = "translateX(" + sP + "px) scaleY(1)";
        lineH[1].style.transform = "translateX(" + sP * -1 + "px) scaleY(1)";

        lineDs[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineDs[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";

        unDraw();
        jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(1)";
        jgySEls[0].style.opacity = '1';
        jgySEls[1].style.transform = "translate(-50%,-50%) scale(1)";
        jgySEls[1].style.opacity = '1';
        jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(1)";
        jgySEls[2].style.opacity = '1';

        mT03.style.opacity = "1";
        mT03.style.transition = "opacity 4s ease-in-out 0.5s";
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
    
    if(!(indexMain == 3)){
        mainG.style.animation = "drawG 0.8s ease forwards alternate";
        fontWeightP.style.opacity = '1';
        fontWeightP.style.visibility = 'visible';

        lineV[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineV[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";

        lineH[0].style.transform = "translateX(" + sP + "px) scaleY(1)";
        lineH[1].style.transform = "translateX(" + sP * -1 + "px) scaleY(1)";

        lineDs[0].style.transform = "translateY(" + sP + "px) scaleY(1)";
        lineDs[1].style.transform = "translateY(" + sP * -1 + "px) scaleY(1)";
    }

    jgySEls[0].style.left = jgyP + "%";
    jgySEls[0].style.top = jgyTP + "%";
    jgySEls[0].style.transform = "translate(-50%, " + jgyTP * -1 + "%) scale(1)";
    jgySEls[2].style.right = jgyP + "%";
    jgySEls[2].style.bottom = jgyTP + "%";
    jgySEls[2].style.transform = "translate(50%, " + jgyTP + "%) scale(1)";
}
minusBtn.addEventListener('click', onClickMinus);
plusBtn.addEventListener('click', onClickPlus);

/* portfolio section*/

var html = document.querySelector('html');

const nav = document.querySelector('nav');

var portExBtn = document.querySelector('div.portEach_nav > a.pE_exitBtn');
var portExBtnEls = document.querySelectorAll('a.pE_exitBtn > .line')
var portEachBtnCon = document.querySelector('.portEach_btn_con');
var portEachBtnDiv = document.querySelectorAll('.portEach_btn_con > div.btncan');
var portEachBtn = document.querySelectorAll('.portEach_btn_con > div > .portEach_btnCan');
portEachBtnDiv = Array.prototype.slice.call(portEachBtnDiv);
portEachBtn = Array.prototype.slice.call(portEachBtn);

var portBtnEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn');
portBtnEls = Array.prototype.slice.call(portBtnEls);
var svgGEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn > svg.txtBtn > g.txtG');
svgGEls = Array.prototype.slice.call(svgGEls);

var portEachAll = document.querySelector('.port_each_all');
var portCon = document.querySelector('section#portEach_con');
var port = document.querySelectorAll('section#portEach_con article.port');
port = Array.prototype.slice.call(port);

var port_title = document.querySelector('.port_title');
var port_txt = document.querySelector('.port_text');

var portImgArea = document.querySelectorAll('.port_img_area');
portImgArea = Array.prototype.slice.call(portImgArea);
var portImgCover = document.querySelectorAll('.port_img_area > .port_img_cover');
portImgCover = Array.prototype.slice.call(portImgCover);
var portImgCon = document.querySelectorAll('.port_img_area > .port_img_con');
portImgCon = Array.prototype.slice.call(portImgCon);

function drawFirst(){
    var Flim=-1;
    var drawF = setInterval(function(){
        if(Flim++<svgGEls.length-1){
            svgGEls[Flim].style.animation = "draw 1.5s ease-in-out alternate forwards";
        }else{
            clearInterval(drawF);
        }
    },150);
}

function unDraw(){
    var lim=-1;
    var timeD = setInterval(function(){
        if(lim++<svgGEls.length-1){
            svgGEls[lim].style.animation = "erase 0.35s ease-in-out 1 alternate forwards ";
            svgGEls[lim].style.visibility = "hidden";
            portBtnEls[lim].style.visibility = "hidden";
        }else{
            clearInterval(timeD);
        }
    },120);
}

var clicked = false;
var index;
portConReset();
function portConReset(){
    portCon.style.opacity = "0";
    portCon.style.visibility = "hidden";
    for(var i =0;i<port.length;i++){
        port[i].style.opacity = "0";
        port[i].style.visibility = "hidden";
    }
}
function onPortBtn(e){
    e.preventDefault();
    // console.log('click');
    var pT = e.currentTarget;
    index = portBtnEls.indexOf(pT);
    if(e.type==="click"){
        if(!clicked){
            unDraw();
            // portCon.style.left = "0";
            portCon.style.opacity = "1";
            portCon.style.visibility = "visible";
            portCon.style.transition = 'opacity 0.4s ease-in 0.45s';
            // port[index].style.left = "0";
            // port[index].style.transform = 'translateX(-100vw)';
            port[index].style.visibility = "visible";
            port[index].style.opacity = "1";
            port[index].style.transition = 'opacity 0.8s ease-in 1.1s';
            setTimeout(function(){
                // html.style.overflowY = "scroll";
                // html.style.overflowX = "hidden";
            },2400);
            portEachBtn[index].style.border = "2px solid #002958";
            portEachBtn[index].style.color = "#ffffff";
            portEachBtn[index].style.fontFamily = "S-CoreDream-7ExtraBold";
            portEachBtn[index].style.backgroundColor = "#0F78F4";
            portEachBtnCon.style.visibility = 'visible';

            portEachAll.style.transform = "translateX(" + 100 * index * -1 + "vw)";
        }
    }  
}

function onClickEx(e){
    e.preventDefault();
    portCon.style.transition = 'all 0.8s ease-in 0.2s';
    portCon.style.opacity = "0";
    portCon.style.visibility = "hidden";
    // port[index].style.left = "100%";
    for(var i = 0;i < port.length;i++){
        port[i].style.visibility = "hidden";
        port[i].style.opacity = "0";
        port[i].style.transition = 'all 0.8s ease-in 0.3s';
    }
    var lim2=-1;
    var timeN = setInterval(function(){
        if(lim2++<svgGEls.length-1){
            svgGEls[lim2].style.visibility = "visible";
            svgGEls[lim2].style.animation = "draw 0.35s ease-in-out 0.9s 1 alternate forwards ";
            portBtnEls[lim2].style.visibility = "visible";
        }else{
            clearInterval(timeN);
        }
        // html.style.overflowY = "hidden";
        // html.style.overflowX = "hidden";
    },110);
    for(var i = 0;i < portEachBtn.length;i++){
        portEachBtn[i].style.border = "1px solid #DFDFDF";
        portEachBtn[i].style.fontFamily = "S-CoreDream-4Regular";
        portEachBtn[i].style.color = "#DFDFDF";
        portEachBtn[i].style.backgroundColor = "#ffffff";
    }
    setTimeout(function(){
        portEachBtnCon.style.visibility = 'hidden';
    },400);
}
portSetting();
function portSetting(){
    portEachAll.style.transform = "translate(0,0)";
    portEachAll.style.transition = "0.5s linear";
    for(var i = 0;i < port.length;i++){
        port[i].style.transform = "translate(" + 100 * i + "vw, -100vh)";
    }
}
function onPortEx(e){
    e.preventDefault();
    for(var i=0;i<portExBtnEls.length;i++){
        portExBtnEls[i].style.transition = "transform 0.6s ease";
    }
    if(e.type === 'mouseenter'){
        portExBtnEls[0].style.transform = "translate(-50%,-50%) rotateZ(135deg)";
        portExBtnEls[1].style.transform = "translate(-50%,-50%) rotateZ(-135deg)";
    }else if(e.type === 'mouseleave'){
        portExBtnEls[0].style.transform = "translate(-50%,-50%) rotateZ(45deg)";
        portExBtnEls[1].style.transform = "translate(-50%,-50%) rotateZ(-45deg)";
    }
}
portExBtn.addEventListener('mouseenter', onPortEx);
portExBtn.addEventListener('mouseleave', onPortEx);
portExBtn.addEventListener('click', onClickEx);

for(var i = 0;i < portBtnEls.length - 5;i++){
    portBtnEls[i].style.transition = "all 1s ease-in-out 1.8s";
    portBtnEls[i].addEventListener('click', onPortBtn);
}
function onPortEachBtn(e){
    e.preventDefault();
    var inx = e.currentTarget;
    var EIndex = portEachBtnDiv.indexOf(inx);
    if(e.type === "click"){
        for(var i = 0; i < port.length; i++){
            port[i].style.opacity = "0";
            port[i].style.visibility = "hidden";
            portEachBtn[i].style.border = "1px solid #DFDFDF";
            portEachBtn[i].style.fontFamily = "S-CoreDream-4Regular";
            portEachBtn[i].style.color = "#DFDFDF";
            portEachBtn[i].style.backgroundColor = "#ffffff";
            port[i].style.transition = '0.7s ease-out';
        }
        port[EIndex].style.transition = '1s ease';
        port[EIndex].style.visibility = "visible";
        port[EIndex].style.opacity = "1";
        portEachBtn[EIndex].style.border = "2px solid #002958";
        portEachBtn[EIndex].style.color = "#ffffff";
        portEachBtn[EIndex].style.fontFamily = "S-CoreDream-7ExtraBold";
        portEachBtn[EIndex].style.backgroundColor = "#0F78F4";
        console.log(EIndex);
        portEachAll.style.transform = "translateX(" + 100 * EIndex * -1 + "vw)";
        index = EIndex;
    }
    if(e.type === "mouseover"){
        for(var i = 0; i < port.length; i++){
            portEachBtn[i].style.border = "1px solid #DFDFDF";
            portEachBtn[i].style.fontFamily = "S-CoreDream-4Regular";
            portEachBtn[i].style.color = "#DFDFDF";
            portEachBtn[i].style.backgroundColor = "#ffffff";
        }
        portEachBtn[EIndex].style.border = "2px solid #0F78F4";
        portEachBtn[EIndex].style.color = "#0F78F4";
        portEachBtn[EIndex].style.fontFamily = "S-CoreDream-7ExtraBold";
        portEachBtn[EIndex].style.backgroundColor = "#ffffff";
    }else if(e.type === "mouseleave"){
        for(var i = 0; i < port.length; i++){
            portEachBtn[i].style.border = "1px solid #DFDFDF";
            portEachBtn[i].style.fontFamily = "S-CoreDream-4Regular";
            portEachBtn[i].style.color = "#DFDFDF";
            portEachBtn[i].style.backgroundColor = "#ffffff";
        }
        portEachBtn[index].style.border = "2px solid #002958";
        portEachBtn[index].style.color = "#ffffff";
        portEachBtn[index].style.fontFamily = "S-CoreDream-7ExtraBold";
        portEachBtn[index].style.backgroundColor = "#0F78F4";

        // console.log('leave : ' + EIndex);
    }
}
for(var i = 0;i < portEachBtn.length;i++){
    portEachBtnDiv[i].addEventListener('click', onPortEachBtn);
    portEachBtnDiv[i].addEventListener('mouseover', onPortEachBtn);
    portEachBtnDiv[i].addEventListener('mouseleave', onPortEachBtn);
}


function onSvgBtn(e){
    e.preventDefault();
    var sT = e.currentTarget;
    var index = portBtnEls.indexOf(sT);
    if(e.type === "mouseenter"){
        for(var i = 0; i < portBtnEls.length -5;i++){
            svgGEls[i].style.stroke = "#D0D9EC";
            // portBtnEls[i].classList.add('stroke');
            svgGEls[index].style.stroke = "#0F78F4";
            svgGEls[index].style.strokeWidth = "10";
            portBtnEls[i].style.visibility = "visible";
        }
        console.log('enter');
    }
    if(e.type === "mouseleave"){
        for(var i =0; i < svgGEls.length -5;i++){
            // svgGEls[i].classList.remove('stroke');
            svgGEls[i].style.stroke = "#0F78F4";
            portBtnEls[i].style.visibility = "visible";
        }
    }
}
for(var i = 0;i < svgGEls.length - 5;i++){
    svgGEls[i].style.transition = "all 0.34s ease-in-out";
    portBtnEls[i].addEventListener('mouseenter', onSvgBtn);
    portBtnEls[i].addEventListener('mouseleave', onSvgBtn);
}

// var as;