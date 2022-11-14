const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

const mode = document.getElementById('mode_icon');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

mode.addEventListener('click', () => {

    const body = document.getElementById('corpo');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        body.classList.add('dark')
        return
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    body.classList.remove('dark');
})