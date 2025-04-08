function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // taking from html
    const icon = document.querySelector(".hamburger-icon"); 
    menu.classList.toggle("open"); // toggle changes hamburger menu into cross (open form)
    icon.classList.toggle("open"); // toggle opens list
}
