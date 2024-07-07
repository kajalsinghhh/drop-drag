const dropArea = document.getElementById("drop-area");
const inputfile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputfile.addEventListener("change", uploadImage);

function uploadImage(){
    if (inputfile.files && inputfile.files[0]) {
        let imgLink = URL.createObjectURL(inputfile.files[0]);
        imageView.innerHTML = ''; // Clear existing content
        imageView.style.backgroundImage = `url(${imgLink})`;
    } else {
        console.error("No file selected or file input is empty.");
    }
}
 
dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputfile.files = e.dataTransfer.files;
    uploadImage();
});