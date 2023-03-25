const Base_ULR = "https://striveschool-api.herokuapp.com/api/product";
const endpoint = "https://striveschool-api.herokuapp.com/api/product";





//Get Starts here//

fetch("https://striveschool-api.herokuapp.com/api/product", { 
headers: { 
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFjMzg4N2E0YmFhODAwMTNlODQ5NTgiLCJpYXQiOjE2Nzk1NzEwNzksImV4cCI6MTY4MDc4MDY3OX0.B9E6hqwpe5NT2FOmXX3CtQtLsfpcPQRBQqAn8TqcXWM" 
} 
})
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)))



const createListItem = (event) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    const span = document.createElement('span');
    span.innerText = event.name;

    listItem.appendChild(span);
    list.appendChild(listItem);
  };
  const populateList = events => events.forEach(createListItem);



  



   
//Post starts here//

   const ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product';

   const nameInput = document.getElementById('product_id');
   const descriptionInput = document.getElementById('product_name_fr');
   const priceInput = document.getElementById('product_name_fr');
   const quantityInput = document.getElementById('available_quantity');
    const buttonInput = document.getElementById('singlebutton')
   const form = document.getElementById('product_new');
   




   const validatePrice = () => {
     errors.innerText = '';

     if (Number(priceInput.value) <= 0 ) {
       errors.innerText = 'Price must be a positive number!'
       return false;
     }

     return true;
   }

   const validateQuantity = () => {
     errors.innerText = '';

     if (Number(timeInput.value) <= 0 ) {
       errors.innerText = 'Quantity must be a positive number!'
       return false;
     }

     return true;
   }


 

 

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
  //console.log(handleFormSubmit);
  //.console.log(validatePrice)


 
/*
   buttonInput.addEventListener('singlebutton', handleFormSubmit);
  
   priceInput.addEventListener('blur', validatePrice);
   descriptionInput.addEventListener('blur', validateDescription);
   quantityInput.addEventListener('blur', validateQuantity);
*/


