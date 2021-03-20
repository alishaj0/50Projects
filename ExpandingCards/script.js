// EXPANDING CARDS

const panels = document.querySelectorAll('.panel');
        // will put panels in nodeList
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

console.log(panels);