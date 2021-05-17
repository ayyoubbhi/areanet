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