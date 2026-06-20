let orderform = document.getElementById('Orderform')

let Res1 = document.getElementById('res1')
let Res2 = document.getElementById('res2')
let Res3 = document.getElementById('res3')

let Lbl4 = document.getElementById('lbl4')
let Lbl1 = document.getElementById('lbl1')
let Lbl2 = document.getElementById('lbl2')
let Lbl3 = document.getElementById('lbl3')

let displaycontent = [
  [Lbl4.textContent], 
  [Lbl1.textContent, Res1.value], 
  [Lbl2.textContent, Res2.value], 
  [Lbl3.textContent, Res2.value]
];

orderform.innerHTML = displaycontent
