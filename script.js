window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
}

function visMateriale() {
    console.log("Vis Materiale");
    document.querySelector("#tema02_more").addEventListener("click", viserMateriale);



}

function viserMateriale() {
    document.querySelector("#tema02_more").classList.remove("hide");
    document.addEventListener("#tema02_more").classList.add("show");
    document.querySelector("#tema02_more").addEventListener("animationend", viserNuMateriale);
}

function viserNuMateriale() {
    console.log("materiale vises");
}
