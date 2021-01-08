const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.color = 'rgb(0, 145, 134)';
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'wavy'
}


const header = document.querySelector('h1');
header ? console.log(true) : console.log(false);