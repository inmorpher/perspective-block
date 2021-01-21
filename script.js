const block = document.querySelector('.block');
const cursor = document.querySelector('.cursor');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
document.addEventListener('mousemove', event => {
    cursor.style.cssText = `left:${event.clientX}px; top:${event.clientY}px;`;
})

document.addEventListener('mouse', event => {
    if (event.target.getAttribute === hover) console.log(true);
})

block.addEventListener('mousemove', event => {
    console.log(event.pageX + ' ' + event.pageY);
    let x = (window.innerWidth / 2 - event.pageX) / 25;
    let y = (window.innerHeight / 2 - event.pageY) / 25;
    block.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;

})

block.addEventListener('mouseenter', event => {
    block.style.transition = `none`;
    // title.style.transform = "translateZ(2px)";
    // text.style.transform = "translateZ(2px)";
})

block.addEventListener('mouseleave', event => {
    block.style.transition = `0.3s ease-out`;
    block.style.transform = `rotateX(0) rotateY(0)`;
    // title.style.transform = `translateZ(0)`;
    // text.style.transform = `translateZ(0)`;
})