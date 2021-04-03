const boxes = document.querySelectorAll(`.box`);

window.addEventListener(`scroll`, checkBoxes);

checkBoxes();
// The reason we see the first 3 boxes when the page loads is because checkBoxes() function run is fired off before begin scrolling. 
// If run placed after function, user would have to first begin scrolling 

function checkBoxes() {
        // where do want boxes to start coming in when scrolling - "triggerpoint" want it to be less than innerHeight
        // console.log(window.innerHeight / 5 * 4 ); = "triggerpoint"
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // 'boxes' is now a NodeList because querySelectorAll placed all boxes into NodeList when selected and set to variable 'boxes'
        const boxTop = box.getBoundingClientRect().top;
            // for each boxTop, get box position details (getBoundingClientRect().top)

        if (boxTop < triggerBottom) {
            // if the boxTop is less than the triggerBottom, add class of 'show', ELSE if not, remove class of 'show' when scrolling up
            // When begin scrolling, as soon as 'if' statement is true (when boxTop is less than triggerBottom), the next box will come into view from respective side.
            
            box.classList.add(`show`)
        } else {
            box.classList.remove(`show`);
        }
    });
}