// Select Size Shoes
const btnSelectSizes = document.querySelectorAll('.size');

const activeSize = (e) => {
    btnSelectSizes.forEach((e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        }
    })
    e.target.classList.add('active');
}

btnSelectSizes.forEach((e) => {
    e.addEventListener('click', activeSize);
})

// Search
var input = document.getElementById("input-search");

function myFunction() {
    var filter, ul, li, a, i;

    filter = input.value.toUpperCase();
    ul = document.getElementById("list-search");
    li = ul.getElementsByTagName("li");

    if (!filter) {
        ul.style.display = "none";
    } else {
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                ul.style.display = "block";
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
input.addEventListener("keyup", myFunction);

// Menu
const menuBtns = document.querySelectorAll('.mobile-menu-btn');
const menu = document.querySelector('.js-menu');
const menuContainer = document.querySelector('.js-menu-container');
const menuClose = document.querySelector('.js-menu-close');

function showMenu() {
    menu.classList.add('open');
}

function hideMenu() {
    menu.classList.remove('open');
}

for (const menuBtn of menuBtns) {
    menuBtn.addEventListener('click', showMenu);
}

menuClose.addEventListener('click', hideMenu);

menu.addEventListener('click', hideMenu);

menuContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})


// Đóng/Mở Menu
const giay = document.querySelector('.giay')
const phuKien = document.querySelector('.phu-kien')
const subGiay = document.querySelector('.subnav-mobile')
const subPhuKien = document.querySelector('.subnav-mobile-item')
var checkGiay=true,checkPhuKien=true;
    
giay.addEventListener('click', function(){
    if(checkGiay){
        subGiay.style.display="block";
        checkGiay=false;
    }else{
        subGiay.style.display="none";
        checkGiay=true;
    }
})

phuKien.addEventListener('click', function(){
    if(checkPhuKien){
        subPhuKien.style.display="block";
        checkPhuKien=false;
    }else{
        subPhuKien.style.display="none";
        checkPhuKien=true;
    }
})

// Fixed Header On Scroll
window.onscroll = function() {fixedHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}