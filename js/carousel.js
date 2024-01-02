document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#carouselExample').classList.add('carousel');
});
$(document).ready(function(){
    $('#carouselExample').carousel({
        interval: 2000
    });

    $('.carousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                var item;
                if (e.direction === "left") {
                    item = $('.carousel-item').eq(i);
                } else {
                    item = $('.carousel-item').eq(0);
                }
                if (item.length) { // Check if the item exists
                    item.appendTo('.carousel-inner');
                }
            }
        }
    });
});
