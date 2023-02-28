const burgerBtn = document.getElementById('burger-Btn');
const burgerContent = document.getElementById('burger-content');

burgerBtn.addEventListener('click', () => {
	const burgerClassName = burgerContent.className
	const isBurgerClose = burgerClassName.includes('close');
	console.log(isBurgerClose);
	if (isBurgerClose) {
		burgerContent.classList.remove('close');
		burgerContent.classList.add('open');

	} else {
		burgerContent.classList.add('close');
		burgerContent.classList.remove('open');
	}
});





