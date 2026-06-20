let orderForm = document.getElementById("T_Shirt_product_order_form");

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

