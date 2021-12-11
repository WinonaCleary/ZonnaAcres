var clicked = false;



document.body.querySelector( ".MenuButton" ).addEventListener("click", function (){
    clicked=!clicked;
    if(clicked) {
        document.body.querySelector( ".NavMenu" ).style.display="block";
    }else{
        document.body.querySelector( ".NavMenu" ).style.display="none";
    }
})