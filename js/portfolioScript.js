console.log("javascript load");

var html = document.querySelector('html');

// const nav = document.querySelector('nav');
// const hamBtn = document.querySelector("nav > .hamBtn");
// let navHamLi = document.querySelectorAll("nav a.hamBtn > div.hamLine");
// navHamLi = Array.prototype.slice.call(navHamLi);
// const navHam = document.querySelector('ul.navHam');
// var navHamEls = document.querySelectorAll('ul.navHam > li');
// navHamEls = Array.prototype.slice.call(navHamEls);
// var lineV = document.querySelectorAll('div.mainSvgCon > div > svg.lineV');
// lineV = Array.prototype.slice.call(lineV);
// var lineDs = document.querySelectorAll('div.dScon > svg.lineDs');
// lineDs = Array.prototype.slice.call(lineDs);

// const naBtn01 = document.querySelector('.naBtn01');
// const naBtn02 = document.querySelector('.naBtn02');
// const naBtn03 = document.querySelector('.naBtn03');

var portExBtn = document.querySelector('div.portEach_nav > a.pE_exitBtn');

// var hamToggle = true;

var portBtnEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn');
portBtnEls = Array.prototype.slice.call(portBtnEls);
var svgGEls = document.querySelectorAll('.port_nav > div.port_nav_wrap > div.portBtn > svg.txtBtn > g.txtG');
svgGEls = Array.prototype.slice.call(svgGEls);

var portCon = document.querySelector('section#portEach_con');
var port = document.querySelectorAll('section#portEach_con > article.port');
port = Array.prototype.slice.call(port);

var port_title = document.querySelector('.port_title');
var port_txt = document.querySelector('.port_text');

reset();

function reset(){
    drawFirst();
    // let hamD = 0;
    // for(var i = 0;i < navHamEls.length;i++){
    //     navHamEls[i].style.transition = "all 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6) " + hamD + "s";
    //     navHamEls[i].style.visibility = "hidden";
    //     navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
    //     navHamEls[i].style.opacity = "0";
    //     hamD += 0.1;
    // }
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

// function onClickHamBtn(e){
//     e.preventDefault();
//     if(e.type === "click"){
//         if(hamToggle){
//             navHamLi[0].style.transform = "rotateZ(45deg)";
//             navHamLi[1].style.opacity = 0;
//             navHamLi[2].style.transform = "translateY(2px) rotateZ(-45deg)";
//             navHamLi[2].style.width = "100%";

//             for(var i = 0;i < navHamEls.length;i++){
//                 navHamEls[i].style.visibility = "visible";
//                 navHamEls[i].style.transform = "rotateZ(0) translateY(0)";
//                 navHamEls[i].style.opacity = "1";
//             }
            
//         }else{
//             navHamLi[0].style.transform = "";
//             navHamLi[1].style.opacity = 1;
//             navHamLi[2].style.transform = "";
//             navHamLi[2].style.width = "60%";

//             for(var i = 0;i < navHamEls.length;i++){
//                 navHamEls[i].style.transform = "rotateZ(25deg) translateY(-20px)";
//                 navHamEls[i].style.opacity = "0";
//                 navHamEls[i].style.visibility = "hidden";
//             }
            
//         }
//         hamToggle = !hamToggle;
//     }
// }

// hamBtn.addEventListener("click", onClickHamBtn);

var rect;
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var widthM;
var heightM;

var clicked = false;
var index;

function onPortBtn(e){
    e.preventDefault();
    // console.log('click');
    var pT = e.currentTarget;
    index = portBtnEls.indexOf(pT);
    if(e.type==="click"){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
        rect = portBtnEls[index].getBoundingClientRect();

        // widthM = winWidth - (rect.x + rect.width) - 25;
        widthM = -rect.x + 15;
        // heightM = winHeight - (rect.y + rect.height);
        heightM = -rect.y + 15;

        if(!clicked){
            // portBtnEls[index].style.left = widthM + "px";
            // portBtnEls[index].style.top = heightM + "px";
            // for(var i = 0;i < svgGEls.length;i++){
            //     svgGEls[i].style.animation = "erase 2s ease-in-out forwards";
            // }
            
            var lim=-1;
            var timeD = setInterval(function(){
                if(lim++<svgGEls.length-1){
                    svgGEls[lim].style.animation = "erase 0.35s ease-in-out 1 alternate forwards ";
                    svgGEls[lim].style.visibility = "hidden";
                    portBtnEls[lim].style.visibility = "hidden";
                }else{
                    clearInterval(timeD);
                }
                for(var i = 0;i<svgGEls[index].children.length;i++){
                    // svgGEls[index].children[i].style.animation = "draw 0s ease 1 alternate forwards";
                    // svgGEls[index].children[i].style.visibility= "hidden";
                }
                // svgGEls[index].style.animation = "draw 0s ease 1 alternate forwards";
                // svgGEls[index].style.visibility = "visible";
                
                // portBtnEls[index].style.transform = "scale(30)";
                // portBtnEls[index].style.opacity = "0";
                // svgGEls[index].style.visibility = "hidden";
            },120);
            // for(var i = 0;i<svgGEls[index].children.length;i++){
            //     // svgGEls[index].children[i].style.animation = "draw 0s ease 1 alternate forwards";
            //     svgGEls[index].children[i].style.transformOrigin = "center center";
            //     svgGEls[index].children[i].style.transform= "scale(30)";
            //     svgGEls[index].children[i].style.transition = "all 1s ease-in-out";
            //     svgGEls[index].children[i].style.opacity = "0";
            //     svgGEls[index].children[i].style.visibility= "hidden";
            // }
            
            // setTimeout(function(){
            //     portBtnEls[index].style.visibility = "hidden";
            // },1500);
            portCon.style.left = "0";
            portCon.style.transition = 'all 0.8s ease-in 1.9s';
            port[index].style.left = "0";
            port[index].style.transition = 'all 0.8s ease-in 1.6s';
            setTimeout(function(){
                // html.style.overflowY = "scroll";
                // html.style.overflowX = "hidden";
            },2400);
            
        }
        // else if(clicked){
        //     portBtnEls[index].style.left = "0px";
        //     portBtnEls[index].style.top = "0px";
        // }
        // clicked = !clicked;
    }
    
}

function onClickEx(e){
    e.preventDefault();
    portCon.style.left = "100%";
    port[index].style.left = "100%";
    portCon.style.transition = 'all 0.8s ease-in 0.2s';
    port[index].style.transition = 'all 0.8s ease-in 0.3s';
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
}

portExBtn.addEventListener('click', onClickEx);

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
    svgGEls[i].style.transition = "all 0.34s ease-in-out";
    portBtnEls[i].addEventListener('mouseenter', onSvgBtn);
    portBtnEls[i].addEventListener('mouseleave', onSvgBtn);
}

function portpageinout(){
    
}
var body = document.querySelector('body');
var sclH = body.scrollTop;
var sclFirst = true;
function onScrollWindow(e){
    sclH = body.scrollTop;
    console.log(sclH);
    if(sclH < 35 && !sclFirst){
        port_txt.style.animation = "LoadPort 0.6s ease-in-out 1 alternate backwards";
        port_title.style.animation = "LoadPort 0.6s ease-in-out 1 alternate backwards";
        nav.style.animation = "LoadPort 0.6s ease-in-out 1 alternate backwards";
    }
    else if(sclH > 45){
        port_txt.style.animation = "unLoadPort 0.6s ease-in-out 1 alternate forwards";
        port_title.style.animation = "unLoadPort 0.6s ease-in-out 1 alternate forwards";
        nav.style.animation = "unLoadPort 0.6s ease-in-out 1 alternate forwards";
        sclFirst = false;
    }
}
body.addEventListener('scroll', onScrollWindow);

var as = document.querySelectorAll('svg.as');
as = Array.prototype.slice.call(as);


