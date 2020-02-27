const recipes = document.querySelectorAll('.recipe');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

for (let recipe of recipes) {
    recipe.addEventListener("click", () => {
        modalOverlay.classList.add("active");
        modal.querySelector("img").src = recipe.querySelector("img").src;
        modal.querySelector("h1").textContent = recipe.querySelector("h1").textContent;
        modal.querySelector("p").textContent = recipe.querySelector("p").textContent;
    });
}

modalOverlay.addEventListener("click", (event) => {
    const list = Array.from(modal.children);
    if (event.target !== modal && !list.includes(event.target, list.indexOf(event.target))) {
        close();
    }
});

document.querySelector('.modal-close').addEventListener("click", (event) => {
    close();
});

function close() {
    modalOverlay.classList.remove("active");
    modal.querySelector("img").src = "";
    modal.querySelector("h1").textContent = "";
    modal.querySelector("p").textContent = "";
}


const about = document.querySelector(".about");
const recipeView = document.querySelector(".recipes");
const home = document.querySelector(".home");

home.addEventListener("click", () => {
    window.location.href = "/";
});

about.addEventListener("click", () => {
    about.classList.add("active");
    window.location.href = "about.html";
});

recipeView.addEventListener("click", () => {
    recipeView.classList.add("active");
    window.location.href = "recipes.html";
});