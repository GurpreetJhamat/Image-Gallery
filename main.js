const trigger = document.querySelectorAll('div');
for (const button of trigger) {
    button.addEventListener('click', on, true)
  }


function on() {
    document.getElementById("image_viewer").style.display = "block"; 
    const images = document.querySelectorAll('img')
    images.className += "myImg";  
  }
  
  function off() {
    document.getElementById("image_viewer").style.display = "none";
  }



  // Get the modal
var modal = document.getElementById("image_viewer");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
  }