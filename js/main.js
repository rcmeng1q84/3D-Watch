/**
 * Created by RC on 07/08/2017.
 */

var btns;
var bTop, bLeft, bRight, bBottom;
var btnDist;

var btnAnimeList;

$(document).ready(function () {
    var app = new Vue({
        el      : '#app',
        data    : {
            title: 'Android',
            value: 0
        },
        computed: {
            value: function (value) {
                if (value >= 50) {
                    btnAnimeList = showSlideBtns(value - 50);
                }
                if (value < 50) {
                    showSlideBtns(0);
                }
                if (value <= 25) {
                    selectSlideBtns(value);
                }
            }
        }


    })

    var r = $('#R').slider().data('slider');
    $('#R').on('slide', function () {
        app.value = 100 - r.getValue();


        $("#slider-label").text(app.value)


    });

    $('.screen-btn').hover(function () {
        var e = $(this);
        var animeE;
        timer = setTimeout(function () {
            e.click();
        }, 2000);
    }, function () {

        clearTimeout(timer);
    });


});

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function showSlideBtns(v) {

    var o = map_range(v, 0, 40, 0, 1);
    var sc = map_range(v, 0, 40, 1, 0.6);

    var animelist = [];

    animelist.push(anime({
        targets   : ".left-btn",
        translateX: v + 'px',
        opacity   : o,
        duration  : 3
    }));

    animelist.push(anime({
        targets   : ".right-btn",
        translateX: -v + 'px',

        opacity : o,
        duration: 3
    }));

    animelist.push(anime({
        targets   : ".top-btn",
        translateY: v + 'px',

        opacity : o,
        duration: 3
    }));

    animelist.push(anime({
        targets   : ".bottom-btn",
        translateY: -v + 'px',

        opacity : o,
        duration: 3
    }));
    animelist.push(anime({
        targets : ".swiper-container",
        scale   : sc,
        duration: 3
    }));

    return animelist;
}

function selectSlideBtns(v) {
    var o = map_range(v, 0, 25, 0.4, 1);

    var sc = map_range(v, 0, 25, 0.94, 1);
    var animelist = [];

    animelist.push(anime({
        targets : ".swiper-btn",
        opacity : o,
        scale   : sc,
        duration: 1
    }));
    console.log(o)
    return animelist;
}

function hideSlideBtns() {


}
