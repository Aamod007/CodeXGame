// Slider and Header JavaScript
        const header = document.querySelector('header');
        const header_title = document.getElementById('header_title');
        const d_btn1 = document.getElementById('d_btn1');
        const d_btn2 = document.getElementById('d_btn2');
        const slider_btn = document.querySelectorAll('.dot');

        const backimg = {
            fimg: 'img/egypt-slider.jpg',
            simg: 'img/sliderimg2.jpg',
            timg: 'img/racecar.jpg'
        };
          
        
        const slider_load = (index) => {
            const images = [backimg.fimg, backimg.simg, backimg.timg];
            const titles = ["EGYPT AND WORLD", "RISE OF THE TOMB RAIDER", "HORIZON 4"];

            header.style.background = `url(${images[index]}) no-repeat center center/cover`;
            header_title.innerText = titles[index];

            slider_btn.forEach((btn, i) => {
                btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)";
            });

            d_btn1.href = "#";
            d_btn2.href = "#";
        };

        let currentIndex = 0;

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slider_btn.length;
            slider_load(currentIndex);
        };

        slider_btn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                currentIndex = index;
                slider_load(currentIndex);
            });
        });

        setInterval(nextSlide, 10000);
        slider_load(currentIndex);

        // Smooth Scroll for About Link
        document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        // Smooth Scroll for Blog Link
        document.querySelector('a[href="#blog"]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#blog').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

           // Smooth Scroll for Games Link
           document.querySelector('a[href="#games"]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#games').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });


           // Smooth Scroll for community Link
           document.querySelector('a[href="#commmunity"]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#community').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });


         // Smooth Scroll for Contact Link
         document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

         // Smooth Scroll for esport Link
         document.querySelector('a[href="#esport]').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#esport').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

            // Smooth Scroll for Game Shop Link
            document.querySelector('a[href="#gameshop"]').addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector('#gameshop').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
    
