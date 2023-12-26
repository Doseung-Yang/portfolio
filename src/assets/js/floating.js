const container = document.getElementById('floating_container');
const expandButton = document.getElementById('floating-button');
const image = document.getElementById('floating-button');

expandButton.addEventListener('click', function(e) {
  e.stopPropagation();
  image.classList.toggle('expanded');
});

container.addEventListener('click', function() {
  image.classList.remove('expanded');
});
