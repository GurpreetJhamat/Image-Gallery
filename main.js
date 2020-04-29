const current = document.querySelector('#img01');
const imgs = document.querySelectorAll('.image img');
const image = document.querySelector('.img_container');
const addClass = document.querySelectorAll('.over');

function on(e) {
    document.getElementById("image_viewer").style.display = "block"; 
    console.log('working on function'); 
}

function off() {
    document.getElementById("image_viewer").style.display = "none";
}

const imgClick = (e) => {
    current.src = e.target.src;
    image.classList.add(e.srcElement.classList.item(0));
    // console.log(e);
    const clsFound = e.path[2].classList.item(0);
        if (clsFound == 'big' || clsFound == 'big-b'){
            image.style.width = "50%";
            // console.log('BIG')
        } else if(clsFound == 'vertical') {
            image.style.width = "25%";
        } else if (clsFound == 'horizontal' || clsFound == 'horizontal-h'){
            image.style.width = "90%";
        } else{
            image.style.width = "50%";
        }
      }
    
imgs.forEach(img => img.addEventListener('click', imgClick));
imgs.forEach(img => img.addEventListener('click', on));
