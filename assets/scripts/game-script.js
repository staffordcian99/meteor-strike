;(function (window, document, undefined) {
	$(".button-play").mouseenter(function(){
        $(".button-play").css("background-color", "coral")
    })
    $(".button-play").mouseleave(function(){
        $(".button-play").css("background-color", "rgb(228, 132, 7)")
    })

    $(".button-play").click(function(){
        $("#score-div").remove()
    })
})(window, document);