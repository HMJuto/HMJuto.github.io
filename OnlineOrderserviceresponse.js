let orderform = document.getElementById('Orderform')

let Res1 = "OnlineOrderservice.html".getElementById('res1')
let Res2 = "OnlineOrderservice.html".getElementById('res2')
let Res3 = "OnlineOrderservice.html".getElementById('res3')

let Lbl4 = "OnlineOrderservice.html".getElementById('lbl4')
let Lbl1 = "OnlineOrderservice.html".getElementById('lbl1')
let Lbl2 = "OnlineOrderservice.html".getElementById('lbl2')
let Lbl3 = "OnlineOrderservice.html".getElementById('lbl3')

let displaycontent = [
  [Lbl4.textcontent], 
  [Lbl1.textcontent, Res1.value], 
  [Lbl2.textcontent, Res2.value], 
  [Lbl3.textcontent, Res2.value]
];

orderform.innerHTML = displaycontent
