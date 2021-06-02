const menu__head = document.querySelectorAll('.menu__head')
menu__head.forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if (parent.classList.contains('menu--active')) {
            parent.classList.remove('menu--active');

        } else {
            document.querySelectorAll('.menu__item').forEach((child) => child.classList.remove('menu--active'));
            parent.classList.add('menu--active');
        }


        if (item.classList.contains("menu--open")) {
            item.classList.remove('menu--open');
            item.classList.add('menu__head')
        } else {
            document.querySelectorAll('.menu__item').forEach((child) => child.classList.remove('menu--open'));
            item.classList.remove('menu__head')
            item.classList.add('menu--open')
        }
    })
)

modal = document.querySelector('.modal'),
    modalCloseBth = document.querySelector('[data-close]');

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId)
}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal)
})

modalCloseBth.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal()
    }
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal()
    }
})