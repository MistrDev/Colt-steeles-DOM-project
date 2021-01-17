const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'dotted';
    link.style.color = 'green';
}

const button = document.querySelector('#v1');

button.addEventListener('click', () => {
    alert('This is way better than Inline!')
})