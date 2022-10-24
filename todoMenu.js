"use strict"

const allTodo = document.querySelector(".all-todos");
allTodo.addEventListener("click", () => {
    const items = document.querySelectorAll("tr");
    items.forEach(todo => {
        todo.style.display = "block";
    })
});

const doneTodo = document.querySelector(".done-todos");
doneTodo.addEventListener("click", () => {
    const items = document.querySelectorAll("tr");
    items.forEach(todo => {
        todo.style.display = "none";
        if(todo.classList.contains("true")) {
            todo.style.display = "block"
        }
    })
});

const undoneTodo = document.querySelector(".undone-todos");
undoneTodo.addEventListener("click", () => {
    const items = document.querySelectorAll("tr");
    items.forEach(todo => {
        todo.style.display = "block";
        if(todo.classList.contains("true")) {
            todo.style.display = "none"
        }
    })
});


// navigation on small screen close and open

const menuOpen = () => {
    const nav = document.getElementById("nav");
    nav.style.width = "80%";
    nav.style.display = "block";
}

const menuClose = () => {
    const nav = document.getElementById("nav");
    nav.style.width = "0";
    nav.style.display = "none";
}

const menuOpenDiv = document.querySelector(".menu");
const backMenu = document.querySelector(".back");
menuOpenDiv.addEventListener("click", menuOpen);
backMenu.addEventListener("click", menuClose);

//mediaQuery

const mediaQueryList = window.matchMedia("(max-width: 630px)");
function handleOrientationChange(mql) {
    if(mql.matches){
        const nav = document.getElementById("nav");
        nav.style.display = "none";
        nav.style.width = "0";
        return;
    }
    else {
        const nav = document.getElementById("nav");
        nav.style.display = "block";
        nav.style.width = "100%";
        return;
    }
}


handleOrientationChange(mediaQueryList);
mediaQueryList.addEventListener("change", handleOrientationChange);