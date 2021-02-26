$(".modalBtn-c div").click(
    function () {
        $(this).siblings().removeClass('modalBtn-active');
        $(this).addClass('modalBtn-active');
    }
)
$(".modalBtn-e div").click(
    function () {
        $(this).siblings().removeClass('modalSBtn-active');
        $(this).addClass('modalSBtn-active');
    }
)