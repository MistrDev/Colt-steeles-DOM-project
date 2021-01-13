const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'wavy'
}



const h1 = document.querySelector('h1');

h1.classList.add('purple');