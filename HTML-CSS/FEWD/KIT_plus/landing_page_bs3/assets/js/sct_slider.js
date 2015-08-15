/** 
 * sct_slider.js
 */

(function($) {
    var slider = $("#slider");
    var next = $("#slider-overflow-wrapper a.nextbtn");
    var prev = $("#slider-overflow-wrapper a.prevbtn");

    function sct_woble(element, direction) {
        var o_pos = parseInt(slider.css("margin-left"));
        if (direction == 'right') {
            var n_pos = o_pos - 100;
        } else {
            var n_pos = o_pos + 100;
            console.log(n_pos);
        }
        slider.animate({
            marginLeft: n_pos
        }, 100, function() {
            slider.animate({
                marginLeft: o_pos
            }, 500, function() {});
        });
    }

    next.click(function() {
        if (slider.is(':animated')) {
            return false;
        }

        if ($('#slider li:last-child').attr('class') == 'active') {
            sct_woble(slider, 'right');
            return false;
        }

        var curr_pos = parseInt(slider.css("margin-left"));
        var new_pos = curr_pos - 493;
        slider.animate({
            marginLeft: new_pos
        }, 400, function() {
            // move active to the next one
            slider.find('li.active').removeClass('active').next().addClass('active');
        });
    });

    prev.click(function() {
        if (slider.is(':animated')) {
            return false;
        }

        if ($('#slider li:first-child').attr('class') == 'active') {
            sct_woble(slider, 'left');
            return false;
        }

        var curr_pos = parseInt(slider.css("margin-left"));
        var new_pos = curr_pos + 493;

        slider.animate({
            marginLeft: new_pos
        }, 400, function() {
            // move active to the next one
            slider.find('li.active').removeClass('active').prev().addClass('active');
        });
    });

})(jQuery);