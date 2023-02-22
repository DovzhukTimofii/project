function screenWidth (width) {
    const burgerBtn = document.getElementById('burger-Btn');
    const contentBox = document.getElementById('content-box');
    const burgerContent = document.getElementById('burger-content');


    const cleanHeaderContainer = document.getElementById('close-menu-nav__box');
    const cleanInformationTableContainer = document.getElementById('clean-container__information-table');
    const cleanFooterContainer = document.getElementById('clean-container__footer');
    const cleanAdvertisingBoxContainer = document.getElementById('clean-container__advertising__box');

    let isBlockVisible = false;

    if (window.innerWidth < width) {
        burgerBtn.classList.add('yes');
        burgerBtn.classList.remove('outBtn');

        cleanHeaderContainer.classList.remove('container');
        cleanInformationTableContainer.classList.remove('container');
        cleanFooterContainer.classList.remove('container');
        cleanAdvertisingBoxContainer.classList.remove('container');


        contentBox.classList.add('none');

        burgerContent.classList.add('close');
        burgerContent.classList.remove('open');
        
        burgerBtn.addEventListener('click', () => {
            
            if (isBlockVisible) {
                isBlockVisible = false;

                burgerContent.classList.remove('close');
                burgerContent.classList.add('open');

                let opacity = 0;
                let id = setInterval(frame, 10);
                function frame() {
                    opacity += 0.01;
                    burgerContent.style.opacity = opacity;

                    if (opacity >= 1) {
                        clearInterval(id);
                    }
                }

            } else {
                isBlockVisible = true;

                burgerContent.classList.add('close');
                burgerContent.classList.remove('open');
            }

            
            
        })
    } else {
        burgerBtn.classList.remove('yes');
        burgerBtn.classList.add('outBtn');

        contentBox.classList.remove('none');

        burgerContent.classList.add('close');
        burgerContent.classList.remove('open');
    }
}

screenWidth (950)

screenWidth.addEventListener('resize', () => {
    screenWidth (950)
})
