// Image loads blurred and slowly comes into focus using Blur Effect, mapping different number ranges

const loadText = document.querySelector(`.loading-text`);
const bg = document.querySelector(`.bg`);

let load = 0;

let int = setInterval(blurring, 30);
// setInterval() for running blurring() function, set to run at an inverval of every 30 millliseconds

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
        // to stop the interval at 99
    }

    loadText.innerText = `${load}%`;
    // to set the load text to show as a percentage
    // will count up to 100 with setInterval() and will stop at 99 due to clearInterval()

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // scale(arguments for scale() function)
    // scale(load = num, in_min = 0, in_max = 100, out_min = 1, out_max = 0)
    //

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// MAPPING OUT SCALE FOR BLUR
// have to map a range of numbers in order to set the opacity to go from 1 - 0 with number range of 0-100.
/*
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max = in_min) + out_min;
}
*/
