const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'dotted';
    link.style.color = 'green';
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;  
  }


const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}



const e = document.querySelector('');

e.addEventListener('click' , function(evt){
    console.log(evt);
})
