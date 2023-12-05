const mouseEntered = (element) =>{
    if (element) {
        const UlElement = element.querySelector('ul');
    
        if (UlElement) {
          UlElement.classList.add('show');
        }
      }
}
const mouseRemove = (element) =>{
    if (element) {
        const UlElement = element.querySelector('ul');
    
        if (UlElement) {
          UlElement.classList.remove('show');
        }
      }
}

function handleScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var navTextElements = document.getElementsByClassName('change-white');
  var nav = document.querySelector('nav');

  // Loop through all elements with the class 'change-white'
  for (var i = 0; i < navTextElements.length; i++) {
    var navText = navTextElements[i];

    if (scrollPosition >= 72) {
      // Remove 'text-white' class from each element
      navText.classList.remove('text-white');
      nav.classList.remove('custom-nav-bg');
      nav.classList.add('nav-bg-white');
    } else {
      // Add 'text-white' class to each element
      nav.classList.remove('nav-bg-white');
      nav.classList.add('custom-nav-bg');
      navText.classList.add('text-white');
    }
  }
}

window.addEventListener('scroll', handleScroll);
