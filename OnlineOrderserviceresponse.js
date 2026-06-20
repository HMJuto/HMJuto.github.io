let t_shO_Orderservice = document.createElement("script");
t_shO_Orderservice.src = "OnlineOrderservice.html"

console.writeline(t_shO_Orderservice.src)

let orderform = document.getElementById("Orderform");

let Res1 = document.t_shO_Orderservice.getElementById("res1");
let Res2 = document.t_shO_Orderservice.getElementById("res2");
let Res3 = document.t_shO_Orderservice.getElementById("res3");

let Lbl4 = document.t_shO_Orderservice.getElementById("lbl4");
let Lbl1 = document.t_shO_Orderservice.getElementById("lbl1");
let Lbl2 = document.t_shO_Orderservice.getElementById("lbl2");
let Lbl3 = document.t_shO_Orderservice.getElementById("lbl3");

let displaycontent = [
  [Lbl4.textcontent], 
  [Lbl1.textcontent, Res1.value], 
  [Lbl2.textcontent, Res2.value], 
  [Lbl3.textcontent, Res2.value]
];

orderform.innerHTML = displaycontent;
