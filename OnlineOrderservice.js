let orderForm = document.querySelector('form');
let submitbtn = document.getElementById('SubmitBtn');

let submitForm = submitbtn.addEventListener('click', function() {
  
  let formdata = new FormData(orderForm);
  alert(formdata);
  console.log(formdata)
  export {"formdata"};
  window.open("OnlineOrderserviceresponse.js");
  
});
  

