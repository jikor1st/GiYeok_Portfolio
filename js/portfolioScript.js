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

const naBtn01 = document.querySelector('.naBtn01');
const naBtn02 = document.querySelector('.naBtn02');
const naBtn03 = document.querySelector('.naBtn03');

var hamToggle = true;

var portBtnEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn > svg.txtBtn');
portBtnEls = Array.prototype.slice.call(portBtnEls);
var svgGEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn > svg.txtBtn > g.txtG');
svgGEls = Array.prototype.slice.call(svgGEls);


reset();

function reset(){
    drawFirst();
    let hamD = 0;
    for(var i = 0;i < navHamEls.length;i++){
        navHamEls[i].style.transition = "all 0.8s cubic-bezier(0.68, -0.6, 0.32, 1.6) " + hamD + "s";
        navHamEls[i].style.visibility = "hidden";
        navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
        navHamEls[i].style.opacity = "0";
        hamD += 0.2;
    }
}
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

var rect;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var widthM;
var heightM;

var clicked = false;

function onPortBtn(e){
    e.preventDefault();
    // console.log('click');
    var pT = e.currentTarget;
    var index = portBtnEls.indexOf(pT);
    if(e.type==="click"){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
        rect = portBtnEls[index].getBoundingClientRect();

        widthM = winWidth - (rect.x + rect.width);
        heightM = winHeight - (rect.y + rect.height);

        if(!clicked){
            portBtnEls[index].style.left = widthM + "px";
            portBtnEls[index].style.top = heightM + "px";
            // for(var i = 0;i < svgGEls.length;i++){
            //     svgGEls[i].style.animation = "erase 2s ease-in-out forwards";
            // }
            
            var lim=-1;
            var timeD = setInterval(function(){
                if(lim++<svgGEls.length-1){
                    svgGEls[lim].style.animation = "erase 0.5s ease-in-out alternate forwards";
                    svgGEls[lim].style.visibility = "hidden";
                }else{
                    clearInterval(timeD);
                }
                svgGEls[index].style.animation = "draw 0s ease alternate forwards";
                // svgGEls[index].style.visibility = "visible";
            },130);
            
        }
        else if(clicked){
            portBtnEls[index].style.left = "0px";
            portBtnEls[index].style.top = "0px";
        }
        clicked = !clicked;
    }
    
}

for(var i = 0;i < portBtnEls.length - 6;i++){
    portBtnEls[i].style.transition = "all 1s ease-in-out 1.8s";
    portBtnEls[i].addEventListener('click', onPortBtn);
    
}

function onSvgBtn(e){
    e.preventDefault();
    var sT = e.currentTarget;
    var index = portBtnEls.indexOf(sT);
    if(e.type === "mouseenter"){
        for(var i = 0; i < portBtnEls.length -6;i++){
            svgGEls[i].style.stroke = "#D0D9EC";
            // portBtnEls[i].classList.add('stroke');
            svgGEls[index].style.stroke = "#0F78F4";
            svgGEls[index].style.strokeWidth = "10";
        }
    }
    if(e.type === "mouseleave"){
        for(var i =0; i < svgGEls.length -6;i++){
            // svgGEls[i].classList.remove('stroke');
            svgGEls[i].style.stroke = "#0F78F4";
        }
    }
}

for(var i = 0;i < svgGEls.length - 6;i++){
    svgGEls[i].style.transition = "all 0.6s ease-in-out";
    portBtnEls[i].addEventListener('mouseenter', onSvgBtn);
    portBtnEls[i].addEventListener('mouseleave', onSvgBtn);
}

function portpageinout(){
    
}