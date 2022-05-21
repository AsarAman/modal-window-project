'use strict';

const openModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

for (let i = 0; i < openModalBtns.length; i++)
openModalBtns[i].addEventListener('click', openModal);



const closeModal = function () {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}




closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
