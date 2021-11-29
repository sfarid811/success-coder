const header = document.querySelector('header');


window.addEventListener('scroll', () => {
     const scroll = window.scrollY;

        if(scroll > 70) {
            header.classList.add('active');
        }
        else  {
            header.classList.remove('active');
            
        }
});

