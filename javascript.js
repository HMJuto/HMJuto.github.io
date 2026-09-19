let bannerimage = document.getElementById("Banner-image");
let bannerimages = ["Imagesforbanner/1.jpeg", "Imagesforbanner/2.jpeg", "Imagesforbanner/3.jpeg", "Imagesforbanner/4.jpeg", "Imagesforbanner/5.jpeg", "Imagesforbanner/6.jpeg", "Imagesforbanner/7.jpeg", "Imagesforbanner/8.jpeg"];

let changebannerimage = () => {
    let random = Math.floor(Math.random() * 8) + 1;
    bannerimage.src = bannerimages[random]
};

setInterval(changebannerimage, 10000);

let T_Shirtsbtn = document.getElementById("T-Shirtsbtn")

T_Shirtsbtn.addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdp4nlwkS6yVYnzUCzWuy18FstbxtMCiVWigbQyeHJiw7nD0Q/viewform?usp=header");
});

let t_shirtImg = document.getElementById("T-Shirtsimage");
let t_shirtPictures = ["/T-ShirtsImg2.jpeg", "/T-ShirtsImg3.jpeg"];
let body = document.getElementById("body");


let T_Shirtimgchange = true;

while (T_Shirtimgchange == true):
    t_shirtImg.src = t_shirtPictures[0]
    setTimeout(10000);
    t_shirtImg.src = t_shirtPictures[1]

