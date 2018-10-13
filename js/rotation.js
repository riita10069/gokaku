$(function () {
    $(".rotate").rotate({
        bind:
        {
            mouseover: function () {
                $(this).rotate({
                    animateTo: 1080
                })
            },
            // mouseout: function () {
            //     $(this).rotate({
            //         animateTo: 0
            //     })
            // },
            click: function () {
                $(this).rotate({
                    animateTo: 360
                })
            }
        }
    });
    $('.rotate').on('inview', function () {
        $(this).rotate({
            animateTo: 360
        })
    });
});