/*

This website is completely non-commercial and is developed completely for the educational purpose as a project in hack-o-duck competition by
Anand Prabhakar, Shivani and Nirbhay.

*/

window.onscroll = function() {scrollFunction()};
                    
function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}


function gototop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





document.addEventListener("contextmenu", function(e){
    alert("Right click is disabled for safety..");
    e.preventDefault();

}, false);

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }

function gofullscreen(){
    if (document.fullscreenEnabled) {
        console.log("going to Fullscreen mode");
        document.getElementById('quiz').requestFullscreen();
        
    }
}
function gofullgallery(){
    if (document.fullscreenEnabled) {
        console.log("going to Fullscreen mode");
        document.getElementById('container').requestFullscreen();
        
    }
}

var i=1;
display(i);
function next(x){
    display(i +=x);
}	

function now(x){
    display(i = x);

}

function display(x){
    var j ;
    var film = document.getElementsByClassName("main");
    if(x > film.length){i =1;}
    if(x < 1){i = film.length;}
    for(j=0; j< film.length; j++){
        film[j].style.display ="none";
	film[j].style.border ="3px dashed rgba(255,0,234,1)";
    }
    console.log('Total images in Gallery available = '+film.length);
    film[i - 1].style.display ="block";
    var counter = i;
    if((counter+1) > film.length ){ 
        console.log("You Have viewed the whole Gallery..");
	console.log('I will soon upload more images-Anand Prabhakar');
	alert("You Have viewed all the "+film.length+" images\nplease visit after some days and i will update the images \n- Anand Prabhakar");
    } else {
	console.log("Keep on viewing..more images are there");
    }
    
}

