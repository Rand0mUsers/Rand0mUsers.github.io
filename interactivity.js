$(document).ready(function () {
    console.log("Ready!");
    $(".toggle").on("click", function() {
        $(this).next().slideToggle(1000);
    });
});