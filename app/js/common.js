
(function() {

    //checkbox for IE8
    /* Для ИЕ8 этот дуратский скрипт */

    if (document.attachEvent && window.Element && window.Element.prototype.querySelectorAll) {

        window.attachEvent('onload', function() {

            function test(e) {

                if(e.nodeName === "INPUT" && e.type === "checkbox") {

                    e.className=e.className.replace(/(?:(?:^|\s)checked(\s|$)|$)/i, e.checked?' checked$1':'$1');

                }

            }

            document.attachEvent('onclick', function(){test(window.event.srcElement||{})});

            for(var i = 0, e = document.querySelectorAll('input[type="checkbox"]'); i < e.length; i++) {

                test(e[i]);

            }

        });

    }


    // Dropdawn for social share

    function dropdown() {

        var trigger = document.querySelector('.dropdown__trigger');
        var close = document.querySelector('.dropdown__close');

        trigger.attachEvent('onclick', function() {
            
            document.querySelector('.dropdown__toggle').className = 'dropdown__toggle show';

        });

        close.attachEvent('onclick', function() {
            
            document.querySelector('.dropdown__toggle').className = 'dropdown__toggle';

        });
    }

    // Slider for similar items

    function slider() {
        var items = document.querySelectorAll('.grid__item');
        var navLeft = document.querySelector('.slider-left');
        var navRight = document.querySelector('.slider-right');
        var index = 0;
      
        // Slider left navigation

        navLeft.attachEvent('onclick', function() {
            
            console.log(items.length);

            for (var i = 0; i < items.length; i++) {

                items[i].className = 'grid__item preview hide';

            }

            index --;

            if(index < 0) {

                index = items.length-1;

            }

            items[index].className = 'grid__item preview show';


        });

        // Slider right navigation

        navRight.attachEvent('onclick', function() {

            console.log(items.length);

            for (var i = 0; i < items.length; i++) {

                items[i].className = 'grid__item preview hide';

            }
            index ++;

            if(index >= items.length) {

                index = 0;
            }

            items[index].className = 'grid__item preview show';

        });

    }

    document.addEventListener('DOMContentLoaded', function() {

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
            },
        ];

        var target = document.getElementById('items');
        var price;

        for (var i = 0; i < itemsArr.length; i++) { 

            if(itemsArr[i].priceNew) {

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