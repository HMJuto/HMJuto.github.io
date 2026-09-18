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
let t_shirtPictures = ["T-ShirtsImg1.jpeg", "T-ShirtsImg2.jpeg", "T-ShirtsImg3.jpeg"];
let body = document.getElementById("Body");

window.addEventListener("load", function() {
    let TShirtImgChange = true
    
    while (TShirtImgChange == true):
        let ranNum = Math.random(0, 3);
        t_shirtImg.src = t_shirtPictures[ranNum];
    
});
