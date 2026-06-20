let orderForm = document.querySelector('form');

function submitForm(a) {
  a.preventDefault();
  let formData = new FormData(orderForm);
};

orderForm.addEventListener('submit', submitForm)
