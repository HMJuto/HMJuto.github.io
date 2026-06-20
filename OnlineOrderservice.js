let orderForm = document.getElementById("T_Shirt_product_order_form");

let formData = new FormData();

function submitForm(a) {
  a.preventDefault();
  formData(orderForm)
};

orderForm.addEventListener('submit', submitForm)

let incRement = 0;
let incRement1 = 0;

for (data in formData) {
  window.alert(data[incRement1, incRement]);
  
  if incRement >= 2 {
    incRement1 = incRement1 + 1;
  };

  incRement = incRement + 1;
  
};

