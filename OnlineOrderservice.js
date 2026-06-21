let orderForm = document.querySelector('form');

orderForm.addEventListener('submit', () => {
  
  let formdata = new FormData(orderForm);
  alert(formdata);
  
});
