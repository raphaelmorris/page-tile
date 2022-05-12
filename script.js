var $loader = document.querySelector('.loader')
var $popup = document.querySelector('.toto')

window.onload = function() {
  $loader.classList.remove('loader--active')
};

document.querySelector('.btn').addEventListener('click', function () {
  $loader.classList.add('loader--active')
  
  window.setTimeout(function () {
    //$loader.classList.remove('loader--active'),
    window.location = 'page2.html';
  }, 600)

})