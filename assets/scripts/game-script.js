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

    //the game 

    let canvas = document.querySelector('#myCanvas');
    let can = canvas.getContext('2d');

    //creates player constructor

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

    //creates rocket constructor

    class Rocket{
        constructor(x, y, radius, color, velocity){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = velocity
        }

        create(){
            can.beginPath()
            can.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            can.fillStyle = this.color
            can.fill()
        }

        update(){
            this.create()
            this.x = this.x + this.velocity.x
            this.y = this.y + this.velocity.y
        }
    };

    //creating the player 

    let player = new Player(canvas.width / 2 , canvas.height / 2, 15, 'white');
    

    //creating and animating rockets
    
    
    let rockets = [];
    
    function animate(){
        requestAnimationFrame(animate);
        
        can.clearRect(0, 0, canvas.width, canvas.height);
        
        player.create();
        
        rockets.forEach((rocket) => {
            rocket.update()
        });
    };

    addEventListener('click', (event) => {
       
        let angle = Math.atan2(
            event.clientY - canvas.height / 2,
            event.clientX - canvas.width / 2
        );
        
        let velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
        
        rockets.push(
        new Rocket(
            canvas.width / 2 , canvas.height / 2,
            2, 'red', velocity
        ));

    })

    animate();
})(window, document);