//const { default: Swal } = require("sweetalert2")

const boton = document.getElementById('boton')
boton.addEventListener('click',() => {
  Swal.fire({
    title: 'Hola',
    position: 'top-end',
    text: 'Como',
    icon: 'warning',
    confirmButtonText: 'estas?',
    timer: 5000,
    customClass: {
      container: '...',
      popup: '...',
      header: '...',
      title: '...',
      closeButton: '...',
      icon: '...',
      image: '...',
      htmlContainer: '...',
      input: '...',
      inputLabel: '...',
      validationMessage: '...',
      actions: '...',
      confirmButton: '...',
      denyButton: '...',
      cancelButton: '...',
      loader: '...',
      footer: '....',
      timerProgressBar: '....',
    }
  })
  
})



    




console.log('hola')




