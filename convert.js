const UserImage = document.querySelector("#UserImage");
const WebpImage = document.querySelector("#WebpImage");

function convertImage(event) {
  if (event.target.files.length > 0) {
    //show User image
    let src = URL.createObjectURL(event.target.files[0]);
    UserImage.src = src;

    //Convert User Image to Canvas
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    let userImage = new Image();
    userImage.src = src;

    userImage.onload = function () {
      canvas.width = userImage.width;
      canvas.height = userImage.height;
      ctx.drawImage(userImage, 0, 0);

      //convert canvas to webp
      let webpImage = canvas.toDataURL("image/webp", 1);
      WebpImage.src = webpImage;
    };
  }
}
