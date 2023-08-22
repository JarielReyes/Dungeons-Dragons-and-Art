const slider = document.querySelector('.image-slider');
        const controls = document.querySelectorAll('.slider-control');

        let currentIndex = 0;

        controls.forEach((control, index) => {
            control.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;

            controls.forEach((control, index) => {
                if (index === currentIndex) {
                    control.classList.add('active');
                } else {
                    control.classList.remove('active');
                }
            });
        }




        const images = document.querySelectorAll('.image');
        const enlargedImageContainer = document.querySelector('.enlarged-image');
        const enlargedImage = document.getElementById('enlarged-img');

        images.forEach((image, index) => {
            image.addEventListener('click', () => {
                enlargedImage.src = image.src;
                enlargedImageContainer.style.display = 'flex';
            });
        });

        enlargedImageContainer.addEventListener('click', () => {
            enlargedImageContainer.style.display = 'none';
        });
