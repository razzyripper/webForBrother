let popUp = document.querySelector(".popUpContainer")
let popDialog = document.querySelector(".popUp")
let cancel = document.querySelector(".cancel")
let btnPop = document.querySelector(".btnPop")
// při načtení 
addEventListener("pageshow", ()=>{
    popUp.style = "display: block";
});
// zrušení při kliknutí na křížek 
cancel.addEventListener("click", ()=> {
    popUp.style = "display: none";
});
// přesměrování a zrušení po kliknutí na button kontakt 
btnPop.addEventListener("click", ()=>{
    popUp.style = "display: none"
})


