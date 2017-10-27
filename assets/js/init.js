
// Animate articles to place
// -------------------------------------------------------------------------------
function animateArticles() {
    TweenMax.set('.sbg-fa-flex__card', {opacity: 0, y:200});
    TweenMax.staggerTo('.sbg-fa-flex__card', 1, {opacity:1, y:0, ease: Expo.easeOut}, .3);
}


// open modal
// -------------------------------------------------------------------------------
function openModal() {
    var num = 15;

    var modalBtn = document.querySelector('.sbg-fa-modal__profile');
    var closeBtn = document.querySelector('.sbg-fa-modal__close');

    var modalContainer = document.querySelector('.sbg-fa-modal__container');
    var holdModals = document.createDocumentFragment();

    for (var i = 0; i < num; i++) {
        var div = document.createElement('div');
        div.classList.add('sbg-fa-modal__drop');
        div.style.top = Math.floor((Math.random() * 100)) + 'vh';
        div.style.left = Math.floor((Math.random() * 100)) + 'vw';
        div.style.transitionDelay = Math.random() + 's';
        holdModals.appendChild(div);
    }

    modalContainer.appendChild(holdModals);

    function menuClassToggle() {
        document.querySelector('body').classList.toggle('modal-open');
    }

    modalBtn.addEventListener('click',function(){
        modalContainer.style.display = 'flex';

        window.setTimeout(function(){
            menuClassToggle();
            modalContainer.classList.add('active');
        },0.1);
    });

    closeBtn.addEventListener('click',function(){
        modalContainer.classList.remove('active');

        menuClassToggle();
        window.setTimeout(function(){
            modalContainer.style.display = 'none';
        },3000);
    });
}



// Load functions
// -------------------------------------------------------------------------------

(function() {
    animateArticles();
    openModal();

})();
