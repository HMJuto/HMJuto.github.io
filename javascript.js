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


let body = document.getElementById("body");


let T_Shirtimgchange = true;

while (T_Shirtimgchange == true)
    let Tch1 = () => {
        
        let t_shirtImg = document.getElementById("T-Shirtsimage");
        let t_shirtPictures = ["/T-ShirtsImg2.jpeg", "/T-ShirtsImg3.jpeg"];
        if (t_shirtImg.src == t_shirtPictures[0])
            
            var timerFinished = false
            var wait = () => {
                let str = "HmJuto";
                timerFinished = true;
                
            };
            

            setTimeout(wait, 10000);
            var Continue = false;

            while (Continue == false)
                if (wait.timerFinished == true)
                    let t_shirtImg = document.getElementById("T-Shirtsimage");
                    let t_shirtPictures = ["/T-ShirtsImg2.jpeg", "/T-ShirtsImg3.jpeg"];
                    t_shirtImg.src = t_shirtPictures[1]
                    Continue = true
            
            
            
        else if (t_shirtImg.src == t_shirtPictures[1])
            var timerFinished1 = false
            var wait1 = () => {
                let str1 = "HmJuto";
                timerFinished1 = true;
                
            };
            

            setTimeout(wait1, 10000);
            var Continue1 = false;

            while (Continue1 == false)
                if (wait1.timerFinished1 == true)
                    let t_shirtImg1 = document.getElementById("T-Shirtsimage");
                    let t_shirtPictures1 = ["/T-ShirtsImg2.jpeg", "/T-ShirtsImg3.jpeg"];
                    t_shirtImg1.src = t_shirtPictures1[1]
                    Continue1 = true
            
        
    };
    setTimeout(Tch1, 10000);

