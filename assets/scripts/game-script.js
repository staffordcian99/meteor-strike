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

    canvas.width = innerWidth;
    canvas.height = innerHeight;
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

    //Creates particle constructor
    
    class Particle{
        constructor(x, y, radius, color, velocity, alpha){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = velocity
            this.alpha = 1
        }

        create(){
            can.save()
            can.globalAlpha = this.alpha
            can.beginPath()
            can.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            can.fillStyle = this.color
            can.fill()
            can.restore()
        }

        update(){
            this.create()
            this.x = this.x + this.velocity.x
            this.y = this.y + this.velocity.y
            this.alpha -= 0.01
        }
    };

    //creating the player 

    let player = new Player(canvas.width / 2 , canvas.height / 2, 20, 'white');
    

    //Empty rockets and enemies arrays
    
    
    let rockets = [];
    let enemies = [];
    let particles = [];

    //Spawning enemies

    function spawnEnemies(){
        setInterval(function()
        {   const radius = Math.random() * (40 - 5) + 5;
            
            let x;
            let y;
            
            if (Math.random() < 0.5){
                x = Math.random < 0.5 ? 0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else{
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius; 
            }
            
            const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            
            const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)

            const velocity = {x: Math.cos(angle), y: Math.sin(angle)}
            
            enemies.push(new Enemy(x, y, radius, color, velocity))} , 1000)
    };
    
    // Creating rockets and enemies

    function animate(){
        let animationID = requestAnimationFrame(animate);
        
        can.fillStyle = 'rgba(0, 0, 0, 0.1)';
        can.fillRect(0, 0, canvas.width, canvas.height);
        
        player.create();

        particles.forEach((particle, index) => {
            
            if(particle.alpha <= 0){
                particles.splice(index, 1)
            } else {
                particle.update()}})
            ;
        
        rockets.forEach((rocket, index) => {
            rocket.update();

            if(
                rocket.x + rocket.radius < 0 ||
                rocket.x - rocket.radius > canvas.width||
                rocket.y + rocket.radius < 0 ||
                rocket.y - rocket.radius > canvas.height
             ) {
                setTimeout(
                    function(){
                        rockets.splice(index, 1)
                    }, 0)
            }
        });

        enemies.forEach((enemy, index) => {
            enemy.update()
        
            const dist = Math.hypot(enemy.x - player.x, enemy.y - player.y)

            if (dist - enemy.radius - player.radius < 0.05){
                cancelAnimationFrame(animationID)
            }
            
            rockets.forEach((rocket, rocketIndex) => {
                const dist = Math.hypot(rocket.x - enemy.x, rocket.y - enemy.y)

                if (dist - enemy.radius - rocket.radius < 0.1) {

                    for (let i = 0; i < 8; i++){
                        particles.push(new Particle(rocket.x, rocket.y, 3, enemy.color, {x: Math.random() - 0.5, y:Math.random() - 0.5}))
                         };
                    
                    if (enemy.radius -10 > 5){
                        gsap.to(enemy, {
                            radius: enemy.radius - 10
                        })
                        setTimeout(() => 
                        {rockets.splice(rocketIndex, 1)},0);
                    } else {

                   setTimeout(() => 
                   {enemies.splice(index, 1)
                    rockets.splice(rocketIndex, 1)},0)}
                }
            })
        }

        )
    };

    addEventListener('click', (event) => {
       
        console.log(rockets);
        
        const angle = Math.atan2(
            event.clientY - player.y,
            event.clientX - player.x
        );
        
        const velocity = {
            x: Math.cos(angle) * 4,
            y: Math.sin(angle) * 4
        };
        
        rockets.push(
        new Rocket(
            canvas.width / 2 , canvas.height / 2,
            5, 'white', velocity
        ));

    })

    //Calling functions

    animate();
    spawnEnemies();
})(window, document);