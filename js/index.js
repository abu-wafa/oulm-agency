let tglMenu = document.querySelector(".landin-page .header .toggle-lins")
let ULlinks = document.querySelector(".landin-page .header .links")

tglMenu.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle("toggle")
    ULlinks.classList.toggle("open")
}
// close if clicked in the body
    document.addEventListener("click",(e)=>{
    if (e.target !==tglMenu && e.target !==ULlinks){
        if(ULlinks.classList.contains("open")){
            tglMenu.classList.remove("toggle")
            ULlinks.classList.remove("open")            
        }
    }
    
});