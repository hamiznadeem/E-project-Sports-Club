// back to top Btn js 
const backToTopBtn = document.querySelector('.backToTopBtn');
window.addEventListener("scroll",() =>{
    if(window.pageYOffset > 250){
        backToTopBtn.classList.remove("d-none")
    } else{
        backToTopBtn.classList.add("d-none")
    }
});
backToTopBtn.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"        
    });
});