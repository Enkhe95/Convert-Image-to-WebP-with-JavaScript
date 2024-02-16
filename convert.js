const UserImage = document.querySelector("#UserImage");
const WebpImage = document.querySelector("#WebpImage");

function convertImage(event) {
  if (event.target.files.length > 0) {
    //show User image
    let src = URL.createObjectURL(event.target.files[0]);
    UserImage.src = src;
  }
}
