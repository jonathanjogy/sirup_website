const image = document.querySelector('.sirupfam');
const text = document.querySelector('.text-fam');

image.addEventListener('click', function() {
    image.classList.toggle('large');
	text.classList.toggle('show');
});

