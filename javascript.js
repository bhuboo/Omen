
var menu2 = document.getElementById("menu2");
menu2.onclick = function(){
menu2.classList.toggle("openmenu2");
    }

var a;

    function searchshow(){
        if(a==1){
            document.getElementById("search").style.visibility="visible";
            return a=0;
        }
        else{
            document.getElementById("search").style.visibility="hidden";
            return a=1;bb
        }
    }
    searchshow();


    var b;

    function searchshow1(){

        if(b==1){
            document.getElementById("buttonDIS4").style.visibility="visible";
            document.getElementById("buttonDIS4").style.height="10vh";
            return b=0;
        }
        else{
            document.getElementById("buttonDIS4").style.visibility="hidden";
            document.getElementById("buttonDIS4").style.height="0vh";

            return b=1;
        }
    }
    searchshow1();



    // var c;

    // function searchshow2(){

    //     if(c==1){
    //         document.getElementById("fhead1").style.display="block";
    //         // document.getElementById("fhead").style.height="";
    //         return c=0;
    //     }
    //     else{
    //         document.getElementById("fhead1").style.display="none";
    //         // document.getElementById("fhead").style.height="0vh";

    //         return c=1;
    //     }
    // }
    // searchshow2();


    // var d;

    // function searchshow3(){

    //     if(d==1){
    //         document.getElementById("fhead1shop").style.display="block";
    //         // document.getElementById("fhead").style.height="";
    //         return d=0;
    //     }
    //     else{
    //         document.getElementById("fhead1shop").style.display="none";
    //         // document.getElementById("fhead").style.height="0vh";

    //         return d=1;
    //     }
    // }
    // searchshow3();


    // var e;

    // function searchshow4(){

    //     if(e==1){
    //         document.getElementById("fhead1down").style.display="block";
    //         // document.getElementById("fhead").style.height="";
    //         return e=0;
    //     }
    //     else{
    //         document.getElementById("fhead1down").style.display="none";
    //         // document.getElementById("fhead").style.height="0vh";

    //         return e=1;
    //     }
    // }
    // searchshow4();


    // var f;

    // function searchshow5(){

    //     if(f==1){
    //         document.getElementById("fhead1sus").style.display="block";
    //         // document.getElementById("fhead").style.height="";
    //         return f=0;
    //     }
    //     else{
    //         document.getElementById("fhead1sus").style.display="none";
    //         // document.getElementById("fhead").style.height="0vh";

    //         return f=1;
    //     }
    // }
    // searchshow5();

    
    // var g;

    // function searchshow6(){

    //     if(g==1){
    //         document.getElementById("fhead2omen").style.display="block";
    //         // document.getElementById("fhead").style.height="";
    //         return g=0;
    //     }
    //     else{
    //         document.getElementById("fhead2omen").style.display="none";
    //         // document.getElementById("fhead").style.height="0vh";

    //         return g=1;
    //     }
    // }
    // searchshow6();







// scroll down movement 











// let didScroll = false;
// let paralaxTitles = document.querySelectorAll('.imgh');

// const scrollInProgress = () => {
// 	didScroll = true
// }

// const raf = () => {
// 	if(didScroll) {
// 		paralaxTitles.forEach((element, index) => {
// 			element.style.transform = "translateY("+ window.scrollY / 280 +"vmax)"
// 		})
// 		didScroll = false;
// 	}
// 	requestAnimationFrame(raf);
// }


// requestAnimationFrame(raf);
// window.addEventListener('scroll', scrollInProgress)











// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     var randombg = document.getElementById("randombg");
//  console.log(bgColor);
  
//     randombg.style.backgroundColor = bgColor;

//     }
//     setInterval( random_bg_color,1000);

// random_bg_color();
// rgb(23,45,234)


function tre_bg_col(){
    var colortre = ['#FF55E1','red','#ffb40'];
    var bgColortre = colortre[Math.floor(Math.random()* colortre.length)];
    var randombg = document.getElementById("randombg");

    console.log(bgColortre);
     randombg.style.backgroundColor = bgColortre;
     randombg.style.transition = "0.5s" ;
}
setInterval(tre_bg_col,1000)

tre_bg_col();


// function button_drop_color(){
//     var colortre =['#FF55E1','red','#ffb40'];
//     var colortrf =['#FF55E1','red','#ffb40'];
//     var colortrg =['#FF55E1','red','#ffb40'];
//     var x = colortre[Math.floor(Math.random()* colortre.length)];
//     var y = colortrf[Math.floor(Math.random()*colortrf.length)];
//     var z = colortrg[Math.floor(Math.random()*colortrg.length)];
         
//     var buttonaa = document.getElementById("buttonaa");
//     var hover = window.getComputedStyle(buttonaa,"::before");

//     var dropcolor = ["linear-gradient( 90deg,"+ x +"," + y + "," + z +")"];

//     console.log(dropcolor[0])

//     buttonaa.style.setProperty('--hovera',dropcolor[0]);
    
// }
// setInterval(button_drop_color,2000);
// button_drop_color();













function changeposition(){
    var a = document.getElementById("change");
    const position = "relative";
    var left = "0";
    var top = "-14rem";
    var brand = document.getElementById("coo");

    a.style.position = position;
    a.style.left = left;
    a.style.top = top;

    brand.style.position = position;
    brand.style.left = "-37.5rem";
    function reload() {
        document.location.reload();
      }
      
      setTimeout(reload, 5000);
}

// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;
// 	if (currentScroll <= 0) {
// 		body.classList.remove("scroll-up");
// 		return;
// 	}

// 	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-up");
// 		body.classList.add("scroll-down");
// 	} else if (
// 		currentScroll < lastScroll &&
// 		body.classList.contains("scroll-down")
// 	) {
// 		body.classList.remove("scroll-down");
// 		body.classList.add("scroll-up");
// 	}
// 	lastScroll = currentScroll;
// });

