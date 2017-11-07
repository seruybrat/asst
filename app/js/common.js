(function() {

    // Dropdawn for social share

    function dropdown() {

        var trigger = document.querySelector('.dropdown__trigger');
        var close = document.querySelector('.dropdown__close');

        function showDropdown() {
            document.querySelector('.dropdown__toggle').className = 'dropdown__toggle show';
        }

        if (document.addEventListener) {
            trigger.addEventListener('click', showDropdown);
        } else if (document.attachEvent) {
            trigger.attachEvent('onclick', showDropdown);
        }

        function hideDropdown() {
            document.querySelector('.dropdown__toggle').className = 'dropdown__toggle';
        }

        if (document.addEventListener) {
            close.addEventListener('click', hideDropdown);
        } else if (document.attachEvent) {
            close.attachEvent('onclick', hideDropdown);
        }
    }

    // Slider for similar items

    function slider() {
        var items = document.querySelectorAll('.grid__item');
        var navLeft = document.querySelector('.slider-left');
        var navRight = document.querySelector('.slider-right');
        var index = 0;
      
        // Slider left navigation

        function goPrew() {

            for (var i = 0; i < items.length; i++) {
                items[i].className = 'grid__item preview hide';
            }

            index --;

            if(index < 0) {
                index = items.length-1;
            }

            items[index].className = 'grid__item preview show';

        }

        if (document.addEventListener) {
            navLeft.addEventListener('click', goPrew);
        } else if (document.attachEvent) {
            navLeft.attachEvent('onclick', goPrew);
        }

        // Slider right navigation

         function goNext() {

            for (var i = 0; i < items.length; i++) {
                items[i].className = 'grid__item preview hide';
            }

            index ++;

            if(index >= items.length) {
                index = 0;
            }

            items[index].className = 'grid__item preview show';

        }

        if (document.addEventListener) {
            navRight.addEventListener('click', goNext);
        } else if (document.attachEvent) {
            navRight.attachEvent('onclick', goNext);
        }
    }

     $(function(){

        var itemsArr = [
            {
                img: 'model1',
                priceOld: 29.99,
                priceNew: 19.99
            },
            {
                img: 'model2',
                priceOld: 22
            },
            {
                img: 'model3',
                priceOld: 24.99
            },
            {
                img: 'model4',
                priceOld: 29.99,
                priceNew: 19.99
            },
            {
                img: 'model5',
                priceOld: 60
            },
            {
                img: 'model6',
                priceOld: 54
            }
        ];

        var target = document.getElementById('items');
        var price;

        for (var i = 0; i < itemsArr.length; i++) { 

            if(typeof itemsArr[i].priceNew !== 'undefined') {

                price = '<div class="price__old"> $ ' + itemsArr[i].priceOld.toFixed(2) + '</div>' +

                        '<div class="price__new"> $ ' + itemsArr[i].priceNew.toFixed(2) + '</div>';

            } else {

                price = '<div class="price__current"> $ ' + itemsArr[i].priceOld.toFixed(2) + '</div>';

            }

            var item = 

            '<div class="grid__item preview">' +

                '<img class="preview__pic" src="img/' + itemsArr[i].img + '.jpg" alt="model">' +

                '<div class="preview__price price">' +

                    price +

                '</div>' +

            '</div>';

            target.innerHTML += item;

        }

        dropdown();
        slider();

    });


})();