$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");
    
    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);

        // Play sound when opening
        let openSound = document.getElementById("openSound");
        openSound.currentTime = 0; // Reset to start
        openSound.play();

        console.log("Abrindo");
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("Fechando");
    }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if ($(".message").hasClass("closeNor"))
        $(".message").addClass("closed");
    $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
    else
        $(".heart").addClass("no-anim").removeClass("beating");
    $(".heart").removeClass("openHer").removeClass("closeHer");
});
