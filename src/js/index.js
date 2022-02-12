import '../scss/style.scss';

(function() {

    'use strict';
  
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;

    function enableSwiper() {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        })
    };
    const breakpointChecker = function() {
      if ( breakpoint.matches === true ) {
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
        return;
        } else if ( breakpoint.matches === false ) {
          return enableSwiper();
        }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  })(); 
  
//          brand btn open
let changeBrandBtn = document.querySelector('.read-more__js--brand');
let openBrand = document.querySelector('.brand-swiper .swiper-container--js--close');

changeBrandBtn.addEventListener('click', function() {
        let changeText = document.getElementById('read-more--brand');
        if (changeText.innerHTML == 'Показать все' ) {
            changeText.innerHTML = 'Скрыть';
            openBrand.style.height = 'auto';            
            changeText.classList.add('read-more__btn--open');
            changeText.classList.remove('read-more__btn--close');
           } else {
            changeText.innerHTML = 'Показать все';
            openBrand.style.height = '195px';
            changeText.classList.remove('read-more__btn--open');
            changeText.classList.add('read-more__btn--close');
        
        }
    });

//          equip btn open
let changeEquipmentBtn = document.querySelector('.equipment-swiper .read-more__js--equipment-type');
let openEquip = document.querySelector('.equipment-swiper .swiper-container--js--close');

changeEquipmentBtn.addEventListener('click', function() {
    let change = document.getElementById('read-more--equipment');
    if (change.innerHTML == 'Показать все' ) {
        change.innerHTML = 'Скрыть';
        openEquip.style.height = 'auto';            
        change.classList.add('read-more__btn--open');
        change.classList.remove('read-more__btn--close');
            } else {
                change.innerHTML = 'Показать все';
        openEquip.style.height = '195px';
        change.classList.remove('read-more__btn--open');
        change.classList.add('read-more__btn--close');
    }
});

//                   main content btn open
let contentBtn = document.querySelector('.content__btn');
let contentText=document.querySelector('.content__text');

contentBtn.addEventListener('click', function() {
    let btnBefore = document.querySelector('content__btn')
    if (contentBtn.innerHTML == 'Читать далее') {
        contentBtn.innerHTML = 'Скрыть';
        contentText.classList.add ('content__text--open');
        contentBtn.classList.add('content__btn--open');
    } else{
        contentBtn.innerHTML = 'Читать далее';
        contentText.classList.remove ('content__text--open');
        btnBefore.style.transform =('rotate(180deg)');
        contentBtn.classList.remove('content__btn--open');
    }
});

//                  aside menu 
let openMenu = document.querySelector('.header__button--burger');
let buttonExit = document.querySelector('.aside__body .button--exit');
let slidMenu = document.querySelector('.aside--overlay');

openMenu.addEventListener('click', function() { 
    slidMenu.classList.add('open');
    }); 
buttonExit.addEventListener('click', function() {
    slidMenu.classList.remove('open')
    });

closeAside(slidMenu);

function closeAside(slidMenu) {
    if(slidMenu) {
        slidMenu.addEventListener('click', function(e) {
            if(!e.target.closest('.aside__body')){
                blureKlick(e.target.closest('.aside--overlay'));
            }  
        });
    }
}
function blureKlick(slidMenu) {
        slidMenu.classList.remove('open');
    }

const modalLinks = document.querySelectorAll('.modal__link');
const body = document.querySelector('body');

let unlock = true;
const timeout = 800;

if (modalLinks.length > 0) {
    for (let i=0; i<modalLinks.length; i++) {
        const modalLink = modalLinks[i];
        modalLink.addEventListener('click', function(e) {    
            let currentClass = modalLink.className;
            if (currentClass.includes('feedback')) {
                const feedbackModal = document.getElementById('feedback')
                modalOpen(feedbackModal);
                e.preventDefault()
            }   else if (currentClass.includes('order-call')) {
                const orderCallModal = document.getElementById('order-call')
                modalOpen(orderCallModal);
                e.preventDefault()
            }
        });
    }
}

function modalOpen(curentModal) {
        if (curentModal) {                                                    }
            curentModal.classList.add('open');
            curentModal.addEventListener('click', function(e) {
                if(!e.target.closest('.modal__content')){
                    modalClose(e.target.closest('.modal'));
                }
            });
        }

const modalCloseBtn = document.querySelectorAll ('.close--modal');
if (modalCloseBtn.length > 0) {
    for (let i = 0; i < modalCloseBtn.length; i++) {
        const el = modalCloseBtn[i];
        el.addEventListener ('click', function(e){
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalClose(modalActive) {
        modalActive.classList.remove('open');
}
