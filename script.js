// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function open() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img.forEach((x) => x.addEventListener("click", open));

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
