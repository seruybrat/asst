/*
  jQuery's document.ready/$(function(){}) should
  you wish to use a cross-browser DOMReady solution 
  without opting for a library.
  Demo: http://jsfiddle.net/9CWtz/
  usage:
  $(function(){
     // your code
  });
  Parts: jQuery project, Diego Perini, Lucent M.
  This version: Addy Osmani
*/
(function (window) {
  // Define a local copy of $
  var $ = function (callback) {
      readyBound = false;
      $.isReady = false;
      if (typeof callback == 'function') {
        DOMReadyCallback = callback;
      }
      bindReady();
    },
    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,
    readyBound = false,
    DOMReadyCallback = function () {},
    // The ready event handler
    DOMContentLoaded;
  // Is the DOM ready to be used? Set to true once it occurs.
  $.isReady = false;
  // Handle when the DOM is ready
  var DOMReady = function () {
      // Make sure that the DOM is not already loaded
      if (!$.isReady) {
        // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
        if (!document.body) {
          setTimeout(DOMReady, 13);
          return;
        }
        // Remember that the DOM is ready
        $.isReady = true;
        // If there are functions bound, to execute
        DOMReadyCallback();
        // Execute all of them
      }
    }; // /ready()
  var bindReady = function () {
      if (readyBound) {
        return;
      }
      readyBound = true;
      // Catch cases where $ is called after the
      // browser event has already occurred.
      if (document.readyState === "complete") {
        DOMReady();
      }
      // Mozilla, Opera and webkit nightlies currently support this event
      if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
        // A fallback to window.onload, that will always work
        window.addEventListener("load", DOMContentLoaded, false);
        // If IE event model is used
      } else if (document.attachEvent) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", DOMContentLoaded);
        // A fallback to window.onload, that will always work
        window.attachEvent("onload", DOMContentLoaded);
        // If IE and not a frame
        // continually check to see if the document is ready
        var toplevel = false;
        try {
          toplevel = window.frameElement == null;
        } catch (e) {}
        if (document.documentElement.doScroll && toplevel) {
          doScrollCheck();
        }
      }
    }; // /bindReady()
  // The DOM ready check for Internet Explorer
  var doScrollCheck = function () {
      if ($.isReady) {
        return;
      }
      try {
        // If IE is used, use the trick by Diego Perini
        // http://javascript.nwbox.com/IEContentLoaded/
        document.documentElement.doScroll("left");
      } catch (error) {
        setTimeout(doScrollCheck, 1);
        return;
      }
      // and execute any waiting functions
      DOMReady();
    }; // /doScrollCheck()
    // Cleanup functions for the document ready method
  if (document.addEventListener) {
    DOMContentLoaded = function () {
      document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
      DOMReady();
    };
  } else if (document.attachEvent) {
    DOMContentLoaded = function () {
      // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
      if (document.readyState === "complete") {
        document.detachEvent("onreadystatechange", DOMContentLoaded);
        DOMReady();
      }
    };
  } // /if()
  // Expose $ to the global object
  window.$ = $;
})(window);


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
            },
        ];

        var target = document.getElementById('items');
        var price;

        for (var i = 0; i < itemsArr.length; i++) { 

            if(typeof itemsArr[i].priceNew !== 'undefined') {
                console.log(itemsArr[i].priceNew);

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