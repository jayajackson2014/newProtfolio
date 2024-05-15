(function () {
 
    'use strict'
   
   
   
   
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
   
    var forms = document.querySelectorAll('.needs-validation')
   
   
   
   
    // Loop over them and prevent submission
   
    Array.prototype.slice.call(forms)
   
      .forEach(function (form) {
   
        form.addEventListener('submit', function (event) {
   
          if (!form.checkValidity()) {
   
            event.preventDefault()
   
            event.stopPropagation()
   
          }
   
   
   
   
          form.classList.add('was-validated')
   
        }, false)
   
      })
   
  })()

const scriptURL = 'https://script.google.com/macros/s/AKfycbwW7w8akNSK5JS2PrUrGqwpA8aJ7mQ9PfxjIW3owp2mbTQ0f6KzOE7dOzdbGOnATwxo3A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})