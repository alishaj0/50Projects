const progress = document.getElementById(`progress`);
    // progress bar / div
const prev = document.getElementById(`prev`);
const next = document.getElementById(`next`);
const circles = document.querySelectorAll(`.circle`);


let currentActive = 1;
    // Start currentActive (progress bar) at 1

next.addEventListener(`click`, () => {
    currentActive++;
        // on NEXT button, addEventListener of 'click'. 
        // with each NEXT click, currentActive++ adds 1
    if (currentActive > circles.length){
        currentActive = circles.length;
            // but want currentActive to stay within the length of 4. 
            // circles is in a node list with the length of 4
            // currentActive will not move past circles.length (4)
    } 
    update();
});

prev.addEventListener(`click`, () => {
    currentActive--;
        // on PREV button, addEventListener of 'click'. 
        // with each PREV click, currentActive-- subtracts 1
    if (currentActive < 1){
        currentActive = 1;
           // want currentActive to stay at circle 1;
    } 
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add(`active`);
        } else {
            circle.classList.remove(`active`);
        }
    });

    const actives = document.querySelectorAll(`.active`);

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
            // movement for progress bar:
            // take progress.style.width(default: 0%) = actives.length (how many active buttons -1) divided by circles.length (4 -1) multiplied by 100 for percentage and add % string. 

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
            // when currentActive === 1, the previous 'prev' button is disabled bc cannot go less than 1
            // else if currentActive === 4 (circles.length) the 'next' button is disabled bc cannot go passed 4
            // if anything else, neither button are disabled
}