///// Start CarouselSlider
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');
const imageSlide = carouselImage.length;


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let counter = 1;
let istrue;
const size = carouselImage[0].clientWidth;





carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';




// nextBtn.addEventListener('click', ()=>{
//         if(counter >= imageSlide - 1){
//             return null;
//         }else{
        
//                carouselSlide.style.transition = "transform ease-in-out 0.4s";
//                 counter++;
//                 carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';
//         }
        
// })
// prevBtn.addEventListener('click', ()=>{
//     if(counter <= 0)return ;

//     if(timerId){
//     carouselSlide.style.transition = "transform ease-in-out 0.4s";
//     counter--;
//     carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';
//     }
// })

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImage[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - 1;
        carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';

    }else if(carouselImage[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = 0;
        carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';

    }
})

const timerId = setInterval(()=>{
    istrue = false;
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size * counter)+'px)';
    carouselSlide.style.transition = "transform ease-in-out 0.6s";
    istrue = true;
},4500)

///// End CarouselSlider


//////Start Slider Opacity
const sliderImg = document.querySelector('.slider-container .slider');
console.log(sliderImg)



//////End Slider Opacity
















//*** Start Activeted Menus Bar */
//Create Variable 
const BtnActivetedMenu = document.getElementById('btn-menu');
const barMenu = document.querySelector('.bar-menus');
const backMenu = document.querySelector('.back');
//AddEventListener
BtnActivetedMenu.addEventListener('click', activedMenu);


function activedMenu(){
    if(!barMenu.classList.contains('active')){
        barMenu.classList.add('active')
    }
    backMenu.addEventListener('click', function removeMenu(){
        barMenu.classList.remove('active')
    })
}


//***End Activeted Menus Bar */