const submitBtn = document.querySelector(".submit")
const numberBtns = document.querySelectorAll(".btn");
const ratingsSpan = document.querySelector('.rating');
const firstPage = document.querySelector('.main')
const secondPage = document.querySelector('.sub-page');
const danger = document.querySelector('.danger')
let clickedBtn = false;
numberBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
    ratingsSpan.textContent = btn.id;
    clickedBtn =true;
    btn.classList.add('focus-btn')
    })
})
submitBtn.addEventListener('click', function(){

if(clickedBtn === false){
danger.style.display ="block"
} else{
    firstPage.classList.add('first');
    secondPage.classList.add('second');
}
})
