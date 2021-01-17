const allLinks = document.querySelectorAll('a');


for (let link of allLinks) {
    link.style.textDecorationColor = 'purple';
    link.style.textDecorationStyle = 'dotted';
    link.style.color = 'green';
}

const btn = document.querySelector('#v1');

btn.addEventListener('click', () => {
    alert('This is way better than Inline!')
})