window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
}
//
//function visMateriale() {
//    console.log("Vis Materiale");
//    document.querySelector("#tema02_more").addEventListener("click", viserMateriale);
//
//
//
//}
//
//function viserMateriale() {
//    document.querySelector("#tema02_more").classList.remove("hide");
//    document.addEventListener("#tema02_more").classList.add("show");
//    document.querySelector("#tema02_more").addEventListener("animationend", viserNuMateriale);
//}
//
//function viserNuMateriale() {
//    console.log("materiale vises");
//}

function visMenu() {
    console.log("vis menu");

    var burgerknap = document.querySelector(".btn-menu");
    var mobilmenu = document.querySelector("nav");
    btn - menu.addEventListener("click", menuVises);

}

function menuVises() {
    console.log("menu er vist");

    if (mobilmenu.style.display == "none" || mobilmenu.style.display == "") {
        mobilmenu.style.display = "flex";
    } else {
        mobilmenu.style.display = "none";
    }
}
