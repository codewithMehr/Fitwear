// For text animation
let typed = new Typed(".textAnimation", {
    strings: ["15% OFF YOUR FIRST ORDER!", "FREE SHIPPING All OVER PAKISTAN", "BEST QUALITY PRODUCTS"],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
})
//For small screen navbar
let menu = document.getElementById('small-menu').addEventListener('click', mini)
function mini() {
    document.querySelector(".nav-two").classList.toggle("visible");
    console.log("done")
}