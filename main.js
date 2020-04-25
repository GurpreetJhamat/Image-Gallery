const current = document.querySelector('#img01');
const imgs = document.querySelectorAll('.image img');
const image = document.querySelector('.img_container');
const addClass = document.querySelectorAll('.over');
// const opacity = 0.5;
// console.log(current)
console.log(image.className)
console.log(addClass)
console.log(addClass[0].className)
function on() {
    document.getElementById("image_viewer").style.display = "block"; 
    console.log('working on function');  
}

function off() {
    document.getElementById("image_viewer").style.display = "none";
}

const imgClick = (e) => {

    current.src = e.target.src;
    image.classList.add(e.srcElement.classList.item(0));
    console.log('working');
    console.log(e);
    console.log(image.className);
    console.log(e.src.className);
    
    // imgs.style.opacity = 1;
}

imgs.forEach(img => img.addEventListener('click', imgClick));
imgs.forEach(img => img.addEventListener('click', on));
