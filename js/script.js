const sirupfam = document.querySelector('.sirupfam');
const textfam = document.querySelector('.text-fam');
const scrollup = document.querySelector('.colorflower');
const sirupfamsmal = document.querySelector ('.sirupfamsmal');
const textfamsmall = document.querySelector ('.text-famsmall');



sirupfam.addEventListener('mouseover', function() {
    sirupfam.classList.toggle('large');
	textfam.classList.toggle('show');
});

sirupfam.addEventListener('mouseout', function() {
    sirupfam.classList.toggle('large');
	textfam.classList.toggle('show');
});

sirupfamsmal.addEventListener('mouseover', function() {
    sirupfamsmal.classList.toggle('large');
	textfamsmall.classList.toggle('show');
});

sirupfamsmal.addEventListener('mouseout', function() {
    sirupfamsmal.classList.toggle('large');
	textfamsmall.classList.toggle('show');
});

scrollup.addEventListener('mouseover', function () {
	scrollup.classList.toggle('press');
	window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});