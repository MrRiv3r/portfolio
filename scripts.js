$(document).ready(function(){
    $(".speaker").click(function(){
        // Check if the clicked speaker has the ID "speaker0"
        if ($(this).attr("id") === "speaker0" && !$(this).hasClass("active")) {
            return; // If speaker0 is not active, do nothing
        }
        
        // Apply writing-mode to h1 and h2 of speaker0 if it is active
        if ($(this).attr("id") === "speaker0" && $(this).hasClass("active")) {
            $("h1, h2", this).css("writing-mode", "vertical-lr");
        }
        
        if ($(this).hasClass("active")) {
            $(".image-container img").click(function(event){
                // Prevent the click event from bubbling up to the parent elements
                event.stopPropagation();
            });
        
            $(this).removeClass("active");
            $(".container").removeClass("active");
        } else {
            $(".speaker").removeClass("active");
            $(this).addClass("active");
            $(".container").addClass("active");
        }
    });

    $(".image-container img").click(function(event){
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements
        var $speaker = $(this).closest(".speaker"); // Find the closest speaker element
        if (!$speaker.hasClass("active")) {
            $speaker.addClass("active");
            $(".container").addClass("active");
        }
    });

    $(".close").click(function(){
        $("#imageModal").css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target == $("#imageModal")[0]) {
            $("#imageModal").css("display", "none");
        }
    });
});