const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'dotted';
    link.style.color = 'blue';
}


const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}