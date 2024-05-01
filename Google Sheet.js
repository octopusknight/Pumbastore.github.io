const scriptURL = 'https://script.google.com/macros/s/AKfycbzpWd-r3ZUHC7F3kuePOILss9FZHzos_N9LCGiJURgd/dev'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
})