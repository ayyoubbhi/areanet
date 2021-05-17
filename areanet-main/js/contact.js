/************ mzbouacfiajaumqs
 * Config Send To Message*********/

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCK38RH2pE65yUcgv80LKbKtL1rlt67aZ4",
//     authDomain: "areatet-fr.firebaseapp.com",
//     databaseURL: "https://areatet-fr-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "areatet-fr",
//     storageBucket: "areatet-fr.appspot.com",
//     messagingSenderId: "617136742725",
//     appId: "1:617136742725:web:c0788c74c610f839ba9e2c"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// // reference ContactInfo Colletions
// // Refernece contactInfo collections
// let contactInfo = firebase.database().ref("infos");






// Listen For Submit
document.querySelector('.container-from').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
   
    // Get Input Value
    let name = document.querySelector(".container-from .name").value;
    let adresse = document.querySelector(".container-from .adresse").value;
    let email = document.querySelector(".container-from .email").value;
    let tel = document.querySelector(".container-from .tel").value;
    let message = document.querySelector(".container-from .textarea").value;

    
    // saveContactIfno(name,adresse,email,tel,message);

    sendEmail(name,adresse,email,tel,message);
}


// function saveContactIfno(name,adresse,email,tel,message){

//     let newContactInfo = contactInfo.push();


//     newContactInfo.set({
//         name: name,
//         adresse: adresse,
//         email: email,
//         tel: tel,
//         message: message,
//     });

// }

function sendEmail(name,adresse,email,tel,message){
    // Email.send({
    //   Host: 'smtp.yourisp.com',
    //   Username: 'areanet64@gmail.com',
    //   Password: 'mzbouacfiajaumqs',
    //   To:'areanet64@gmail.com',
    //   From:'areanet64@gmail.com',
    //   Subject: `${name} Sent You A Message`,
    //   Body: ` Name: ${name} </br> Address: ${adresse} </br> Email: ${email} </br>
    //         Tel: ${tel} </br> ${message}`,

    // }).then((message) => alert("mail sent successfully"))


    Email.send({
        Host : "smtp.gmail.com",
        Username : 'areanet64@gmail.com',
        Password : 'mzbouacfiajaumqs',
        To : 'areanet64@gmail.com',
        From : email,
        Subject : "AreaNet",
        Body : `<body style=" padding: 10px" >
    <h1 style=" text-align: center;">AreaNet</h1> <br>
        <h3> Name: ${name} <br> Address: ${adresse} <br> Email: ${email} <br>
        Tel: ${tel} </h3> <br>  <h4> ${message} </h4> </body>`
    }).then(
      message => document.getElementById('alert').style.display = 'block'
    );

    document.querySelector(".container-from .name").textContent

    
    document.querySelector(".container-from .name").value = '';
    document.querySelector(".container-from .adresse").value = '';
    document.querySelector(".container-from .email").value = '';
    document.querySelector(".container-from .tel").value = '';
    document.querySelector(".container-from .textarea").value = '';
    

    setInterval(() => {
        document.getElementById('alert').remove();

        location.reload();
    }, 6000)




}
/*********************************
******Star Bar Home Iphone  ******* 
**********************************/
const bar = document.querySelector('.bar');
const navIphone = document.querySelector('.nav-iphone');
const back = document.querySelector('.back');






// bar.onclick = function (){

//     if(!navIphone.classList.contains('active')){
//         navIphone.classList.add('active');
//     }else{
//         navIphone.classList.remove('active')
//     }
    
// }
// back.onclick = function (){
//     navIphone.classList.remove('active');
 
// }
/*********************************
*******Star Bar Home Iphone ******
**********************************/

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