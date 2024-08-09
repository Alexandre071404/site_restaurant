let slider=document.querySelectorAll(".slidimg");
let diapo=document.querySelector(".slider");
let count=0;
let long=slider.length;
let right=document.querySelector(".right")
let left= document.querySelector(".left")
let ani=setInterval(start1,6000)   
 right.addEventListener('click', start1)
 left.addEventListener('click', start2)
 diapo.addEventListener('mouseover', end);  
 diapo.addEventListener('mouseout', start);
 function remove(){
    for(let i=0; i<long;i++) {
        slider[i].classList.remove('activate')
    }
 }
 function start1(){
    count++;
    if(count>long-1){
        count=0
    }
    remove();
    slider[count].classList.add('activate')

 }

 function start2(){
    count--;
    if(count<0){
        count=long-1
    }
    remove();
    slider[count].classList.add('activate')
 }

function end(){
    clearInterval(ani);
}
function start(){
    ani=setInterval(start1,6000)   

}