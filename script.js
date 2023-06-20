$(document).ready(function() {
    $(".rate").click(function() {
        $(this).css({"background-color": "hsl(217, 12%, 63%)", "color": "hsl(0, 0%, 100%)"});
        let valueRating = $(this).val();
        $(".btn-rating").click(function() {
            $(".raiting").hide();
            $(".response").show();
            $(".total-stars").html(valueRating);
        })
    })  
});