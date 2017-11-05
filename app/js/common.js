
function dropdown() {
    var trigger = document.querySelector('.dropdown__trigger');
    var close = document.querySelector('.dropdown__close');
    trigger.addEventListener('click', function() {
        
        document.querySelector('.dropdown__toggle').className = 'dropdown__toggle show';

    });
    close.addEventListener('click', function() {
        
        document.querySelector('.dropdown__toggle').className = 'dropdown__toggle';

    })
}

function slider() {
    var items = document.querySelectorAll('.grid__item');
    var navLeft = document.querySelector('.slider-left');
    var navRight = document.querySelector('.slider-right');
    var index = 0;
    
    navLeft.addEventListener('click', function() {

        for (var i = 0; i < items.length; i++) {
            items[i].className = 'hide';
        }
        index --;
        if(index < 0) {
            index = items.lenght;
        }
        items[index].className = 'grid__item preview';

        console.log(items[index]);


    });

    navRight.addEventListener('click', function() {

        for (var i = 0; i < items.length; i++) {
            items[i].className = 'hide';
        }
        index ++;
        if(index > items.lenght) {
            index = 0;
        }
        items[index].className = 'grid__item preview show';

    });

}

document.addEventListener('DOMContentLoaded', function() {

    dropdown();
    slider();

});