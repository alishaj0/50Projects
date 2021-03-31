const search = document.querySelector(`.search`)
const btn = document.querySelector(`.btn`)
const inpput = document.querySelector(`.input`)

btn.addEventListener(`click`, () => {
    search.classList.toggle(`active`);
    input.focus()
});