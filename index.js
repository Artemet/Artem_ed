productsMenu.style.display = "none";
document.getElementById("nav").addEventListener("click",getMenu);
function getMenu() {
    console.log(productsMenu.style.display);
    if(productsMenu.style.display == "none"){
        productsMenu.style.display = "grid";
    }
    else{
        productsMenu.style.display = "none";
    }
}

function send() {
    console.log("Спасибо!")
}