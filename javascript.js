let bannerimage = document.getElementById("Banner-image");
let bannerimages = ["Imagesforbanner/1.jpeg", "Imagesforbanner/2.jpeg", "Imagesforbanner/3.jpeg", "Imagesforbanner/4.jpeg", "Imagesforbanner/5.jpeg", "Imagesforbanner/6.jpeg", "Imagesforbanner/7.jpeg", "Imagesforbanner/8.jpeg"];

let changebannerimage = () => {
    let random = Math.floor(Math.random() * 8) + 1;
    bannerimage.src = bannerimages[random]
};

setInterval(changebannerimage, 10000);

