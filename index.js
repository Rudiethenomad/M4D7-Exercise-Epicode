const Base_ULR = "https://striveschool-api.herokuapp.com/api/product";
const endpoint = "https://striveschool-api.herokuapp.com/api/product";







fetch("https://striveschool-api.herokuapp.com/api/product", { 
headers: { 
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFjMzg4N2E0YmFhODAwMTNlODQ5NTgiLCJpYXQiOjE2Nzk1NzEwNzksImV4cCI6MTY4MDc4MDY3OX0.B9E6hqwpe5NT2FOmXX3CtQtLsfpcPQRBQqAn8TqcXWM" 
} 
})
   .then(response => response.json())
   .then(data => console.log(JSON.stringify(data)))


   const ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product';

   const nameInput = document.getElementById('product_name');
   const descriptionInput = document.getElementById('product_name_fr');
   const priceInput = document.getElementById('product_categorie');
   const timeInput = document.getElementById('available_quantity');

   const form = document.getElementById('form');
   const errors = document.getElementById('errors');

   const validateName = () => {
     errors.innerText = '';

     if (nameInput.value.trim() === '') {
       errors.innerText = 'Name must not be empty!'
       return false;
     }

     return true;
   }

   const validateDescription = () => {
     errors.innerText = '';

     if (descriptionInput.value.trim() === '') {
       errors.innerText = 'Description must not be empty!'
       return false;
     }

     return true;
   }

   const validatePrice = () => {
     errors.innerText = '';

     if (Number(priceInput.value) <= 0 ) {
       errors.innerText = 'Price must be a positive number!'
       return false;
     }

     return true;
   }

 

   const validateForm = () => {
     return validateDescription() &&
       validateName() &&
       validateTime();
   };

   const handleFormSubmit = async (event) => {
     event.preventDefault();

     errors.innerText = '';

     if (validateForm() === false) {
       return;
     }
     
     const requestBody = {
       name: nameInput.value,
       description: descriptionInput.value,
       price: priceInput.value,
       time: timeInput.value,
     };

     const headers = {
       'Content-Type': 'application/json'
     };

     const config = {
       method: 'POST',
       body: JSON.stringify(requestBody),
       headers
     };

     const response = await fetch(ENDPOINT, config);

     if (response.status === 200) {
       nameInput.value = '';
       descriptionInput.value = '';
       priceInput.value = '';
       timeInput.value = '';
     } else {
       const details = await response.json();
       errors.innerText = details.message;
     }
   };
/*
   form.addEventListener('submit', handleFormSubmit);
   nameInput.addEventListener('blur', validateName);
   priceInput.addEventListener('blur', validatePrice);
   descriptionInput.addEventListener('blur', validateDescription);
   timeInput.addEventListener('blur', validateTime);

*/

