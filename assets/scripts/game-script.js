;(function (window, document, undefined) {
	$(".button-play").mouseenter(function(){
        $(".button-play").css("background-color", "coral")
    });
    $(".button-play").mouseleave(function(){
        $(".button-play").css("background-color", "rgb(228, 132, 7)")
    });

    $(".button-play").click(function(){
        $("#score-div").remove()
    });

    let canvas = document.querySelector('#myCanvas');
    let can = canvas.getContext('2d');

    class Player{
        constructor(x, y, radius, color){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
        }

        create(){
            can.beginPath()
            can.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            can.fillStyle = this.color
            can.fill()
        }
    };

    let player = new Player(canvas.width / 2 , canvas.height / 2, 5, 'white');
    player.create();
})(window, document);