const form = document.querySelector(".login-form");

form.addEventListener("submit", onForm);

function onForm(evt) {
    evt.preventDefault();
   
    const {email, password} = evt.currentTarget.elements;
   

    const data = {
        useremail: email.value,
        userPassword: password.value  
    }
    
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Bci поля мають бути заповнені');
        } else {
          console.log(data); 
          form.reset(); 
        } 
}


