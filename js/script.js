document.addEventListener('scroll', function () {
    let header = document.querySelector('.header')
    if (window.scrollY > 0) {
      header.classList.add('fixed')
      
    } else {
      header.classList.remove('fixed')
      
    }
    
  })

  console.log('qwert')