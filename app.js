const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'dotted';
    link.style.color = 'green';
}

const randomColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
      return `rgb(${R}, ${G}, ${B})`;  
  }


const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}
