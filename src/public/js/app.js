const btnAdd = document.querySelector('#btn-add'),
    closeForm = document.querySelector('#close-form'),
    form = document.querySelector('#form');
    
const drop__btn = document.querySelector('.drop__btn'),
    tooltip = document.querySelector('.tooltip'),
    menu__wrapper = document.querySelector('.wrapper'),
    menu__bar = document.querySelector('.menu__bar'),
    navLink = document.querySelectorAll('.nav__link');

btnAdd.addEventListener('click', () => {
    form.className = 'content__form forms active';
})

closeForm.addEventListener('click', () => {
    form.className = 'content__form forms';
    console.log('clicked');
})

drop__btn.onclick = function() {
    menu__wrapper.classList.toggle('show');
    tooltip.classList.toggle('show');
}

drop__btn.onmouseover = function() {
    menu__wrapper.classList.toggle('show');
    tooltip.classList.toggle('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

function linkAction(){
    menu__wrapper.classList.remove('show');
    tooltip.classList.remove('show');
}