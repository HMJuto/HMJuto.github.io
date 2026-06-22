let orderForm = document.querySelector('form');
let submitbtn = document.getElementById('SubmitBtn');

let submitForm = submitbtn.addEventListener('click', function() {
  
  let formdata = new FormData(orderForm);
  for ([Key, Value] of formdata) do
    alert(${Key}` : `${Value});
  alert(formdata);
  console.log(formdata);
  Export(formdata);
  window.location.assign("OnlineOrderserviceresponse.html");
  
});
  

