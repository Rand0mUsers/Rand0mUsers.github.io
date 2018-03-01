"use strict";

$(document).ready(function () {
    // click handler for dropdowns
    $(".toggle").on("click", function() {
        // slide-toggle the content
        $(this).next().slideToggle(1000);

        // toggle the little triangle appropriately
        if ($(this)[0].innerHTML.startsWith("▸")) {
            $(this)[0].innerHTML = $(this)[0].innerHTML.replace("▸", "▾");
        }
        else {
            $(this)[0].innerHTML = $(this)[0].innerHTML.replace("▾", "▸");
        }
    });
});