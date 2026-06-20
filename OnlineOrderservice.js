let orderForm = document.getElementById("TShirtOrderForm");

function submitForm(a) {
  a.preventDefault();
  let formData = new FormData(orderForm);
};

orderForm.addEventListener('submit', submitForm)


for (data in formData) {
  window.alert(data);
};

