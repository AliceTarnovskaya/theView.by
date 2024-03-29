const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBth = document.querySelector('[data-close]');
function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''
}
function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId)
}

modalTrigger.forEach(btn =>{
    btn.addEventListener('click', openModal)
})

modalCloseBth.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        closeModal()
    }
})
document.addEventListener('keydown', (e) =>{
    if(e.code === 'Escape' && modal.classList.contains('show')){
        closeModal()
    }
})