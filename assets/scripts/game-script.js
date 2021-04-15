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

    //creates Enemy constructor

    class Enemy{
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
    

    //Empty rockets and enemies arrays
    
    
    let rockets = [];
    let enemies = [];

    //Spawning enemies

    function spawnEnemies(){
        setInterval(function()
        {   const radius = Math.random() * (12 - 2) + 2;
            
            let x;
            let y;
            
            if (Math.random() < 0.5){
                x = Math.random < 0.5 ? 0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else{
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius; 
            }
            
            const color = 'green'
            
            const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)

            const velocity = {x: Math.cos(angle), y: Math.sin(angle)}
            
            enemies.push(new Enemy(x, y, radius, color, velocity))} , 1000)
    };
    
    // Creating rockets and enemies

    function animate(){
        requestAnimationFrame(animate);
        
        can.clearRect(0, 0, canvas.width, canvas.height);
        
        player.create();
        
        rockets.forEach((rocket) => {
            rocket.update()
        });

        enemies.forEach((enemy, index) => {
            enemy.update()
        
            const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y)

            if (dist - enemy.radius - player.radius < 1){
                cancelAnimationFrame(animationID)
            }
            
            rockets.forEach((rocket, rocketIndex) => {
                const dist = Math.hypot(rocket.x - enemy.x, rocket.y - enemy.y)

                if (dist - enemy.radius - rocket.radius < 1) {
                   setTimeout(() => 
                   {enemies.splice(index, 1)
                    rockets.splice(rocketIndex, 1)})
                }
            })
        }

        )
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

    //Calling functions

    animate();
    spawnEnemies();
})(window, document);