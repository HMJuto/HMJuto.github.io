let orderForm = document.querySelector('form');

function submitForm() {
  
  let formData = new FormData(orderForm);
  
};

orderForm.addEventListener('submit', submitForm)
