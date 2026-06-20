let orderForm = document.getElementById("TShirtOrderForm");

let formData = new FormData();

function submitForm(a) {
  a.preventDefault();
  formData(orderForm)
};

orderForm.addEventListener('submit', submitForm)


for (data in formData) {
  window.alert(data);
  Console.log(data);
  
};

