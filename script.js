function click1() {
      	
      	var b1=document.getElementById('btn1').value;
      	var b2=document.getElementById('btn2').value;
      	var b4=document.getElementById('btn4').value;

      	if (b2 == "") {
      		document.getElementById('btn2').value=b1;
      		document.getElementById('btn1').value=b2;
      	}
      	if(b4 == ""){
      		document.getElementById('btn4').value=b1;
      		document.getElementById('btn1').value=b4;
      	}
      	win();
      }

      function click2() {
      	
      	var b1=document.getElementById('btn1').value;
      	var b2=document.getElementById('btn2').value;
      	var b3=document.getElementById('btn3').value;
      	var b5=document.getElementById('btn5').value;

      	if (b1 == "") {
      		document.getElementById('btn1').value=b2;
      		document.getElementById('btn2').value=b1;
      	}
      	if(b3 == ""){
      		document.getElementById('btn3').value=b2;
      		document.getElementById('btn2').value=b3;
      	}
      	if(b5 == ""){
      		document.getElementById('btn5').value=b2;
      		document.getElementById('btn2').value=b5;
      	}
      	win();
      }

      function click3() {
      	
      	var b3=document.getElementById('btn3').value;
      	var b2=document.getElementById('btn2').value;
      	var b6=document.getElementById('btn6').value;

      	if (b2 == "") {
      		document.getElementById('btn3').value=b2;
      		document.getElementById('btn2').value=b3;
      	}
      	if(b6 == ""){
      		document.getElementById('btn6').value=b3;
      		document.getElementById('btn3').value=b6;
      	}
      	win();
      }

      function click4() {
      	
      	var b1=document.getElementById('btn1').value;
      	var b5=document.getElementById('btn5').value;
      	var b7=document.getElementById('btn7').value;
      	var b4=document.getElementById('btn4').value;

      	if (b1 == "") {
      		document.getElementById('btn4').value=b1;
      		document.getElementById('btn1').value=b4;
      	}
      	if(b7 == ""){
      		document.getElementById('btn7').value=b4;
      		document.getElementById('btn4').value=b7;
      	}
      	if(b5 == ""){
      		document.getElementById('btn5').value=b4;
      		document.getElementById('btn4').value=b5;
      	}
      	win();
      }

      function click5() {
      	
      	var b2=document.getElementById('btn2').value;
      	var b5=document.getElementById('btn5').value;
      	var b6=document.getElementById('btn6').value;
      	var b4=document.getElementById('btn4').value;
      	var b8=document.getElementById('btn8').value;

      	if (b2 == "") {
      		document.getElementById('btn5').value=b2;
      		document.getElementById('btn2').value=b5;
      	}
      	if(b4 == ""){
      		document.getElementById('btn5').value=b4;
      		document.getElementById('btn4').value=b5;
      	}
      	if(b6 == ""){
      		document.getElementById('btn5').value=b6;
      		document.getElementById('btn6').value=b5;
      	}
      	if(b8 == ""){
      		document.getElementById('btn5').value=b8;
      		document.getElementById('btn8').value=b5;
      	}
      	win();
      }

      function click6() {
      	
      	var b3=document.getElementById('btn3').value;
      	var b5=document.getElementById('btn5').value;
      	var b9=document.getElementById('btn9').value;
      	var b6=document.getElementById('btn6').value;

      	if (b3 == "") {
      		document.getElementById('btn3').value=b6;
      		document.getElementById('btn6').value=b3;
      	}
      	if (b5 == "") {
      		document.getElementById('btn5').value=b6;
      		document.getElementById('btn6').value=b5;
      	}
      	if (b9 == "") {
      		document.getElementById('btn9').value=b6;
      		document.getElementById('btn6').value=b9;
      	}	
      	win();
      }

      function click7() {
      	
      	var b7=document.getElementById('btn7').value;
      	var b4=document.getElementById('btn4').value;
      	var b8=document.getElementById('btn8').value;

      	if (b4 == "") {
      		document.getElementById('btn4').value=b7;
      		document.getElementById('btn7').value=b4;
      	}
      	if (b8 == "") {
      		document.getElementById('btn8').value=b7;
      		document.getElementById('btn7').value=b8;
      	}
      	win();
      }

      function click8() {
      	
      	var b8=document.getElementById('btn8').value;
      	var b5=document.getElementById('btn5').value;
      	var b7=document.getElementById('btn7').value;
      	var b9=document.getElementById('btn9').value;

      	if (b5 == "") {
      		document.getElementById('btn5').value=b8;
      		document.getElementById('btn8').value=b5;
      	}
      	if (b7 == "") {
      		document.getElementById('btn7').value=b8;
      		document.getElementById('btn8').value=b7;
      	}
      	if (b9 == "") {
      		document.getElementById('btn9').value=b8;
      		document.getElementById('btn8').value=b9;
      	}
      	win();
      }

      function click9() {
      	
      	var b8=document.getElementById('btn8').value;
      	var b6=document.getElementById('btn6').value;
      	var b9=document.getElementById('btn9').value;

      	if (b6 == "") {
      		document.getElementById('btn6').value=b9;
      		document.getElementById('btn9').value=b6;
      	}
      	if (b8 == "") {
      		document.getElementById('btn8').value=b9;
      		document.getElementById('btn9').value=b8;
      	}

      	win();
      }

      function win() {

      	var b1=document.getElementById('btn1').value;
      	var b2=document.getElementById('btn2').value;
      	var b3=document.getElementById('btn3').value;
      	var b4=document.getElementById('btn4').value;
      	var b5=document.getElementById('btn5').value;
      	var b6=document.getElementById('btn6').value;
      	var b7=document.getElementById('btn7').value;
      	var b8=document.getElementById('btn8').value;
      	var b9=document.getElementById('btn9').value;
      	
      	if(b1=='1' && b2=='2' && b3=='3' && b4=='4' && b5=='5' && b6=='6' && b7=='7' && b8=='8' && b9==''){
      		document.getElementById('Win').innerText='Yeah You are win';
      		document.getElementById('canvas').style.display="block"

      	  var btn1=document.getElementById('btn1').disabled = true;  
          var btn2=document.getElementById('btn2').disabled = true;  
          var btn3=document.getElementById('btn3').disabled = true;  
          var btn4=document.getElementById('btn4').disabled = true;  
          var btn5=document.getElementById('btn5').disabled = true;  
          var btn6=document.getElementById('btn6').disabled = true;  
          var btn7=document.getElementById('btn7').disabled = true;  
          var btn8=document.getElementById('btn8').disabled = true;  
          var btn9=document.getElementById('btn9').disabled = true;  
      	}
      	  
        }

        async function loadParticles(options) {
      await loadFireworksPreset(tsParticles);

      await tsParticles.load(options);
    }

    const configs = { preset: "fireworks" };

    loadParticles(configs);


    window.addEventListener("resize", resizeCanvas, false);
        window.addEventListener("DOMContentLoaded", onLoad, false);
        
        window.requestAnimationFrame = 
            window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
        
        var canvas, ctx, w, h, particles = [], probability = 0.04,
            xPoint, yPoint;
        
        function onLoad() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            resizeCanvas();
            
            window.requestAnimationFrame(updateWorld);
        } 
        
        function resizeCanvas() {
            if (!!canvas) {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }
        } 
        
        function updateWorld() {
            update();
            paint();
            window.requestAnimationFrame(updateWorld);
        } 
        
        function update() {
            if (particles.length < 500 && Math.random() < probability) {
                createFirework();
            }
            var alive = [];
            for (var i=0; i<particles.length; i++) {
                if (particles[i].move()) {
                    alive.push(particles[i]);
                }
            }
            particles = alive;
        } 
        
        function paint() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = "rgba(49,49,49,0.1)";
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';
            for (var i=0; i<particles.length; i++) {
                particles[i].draw(ctx);
            }
        } 
        
        function createFirework() {
            xPoint = Math.random()*(w-200)+100;
            yPoint = Math.random()*(h-200)+100;
            var nFire = Math.random()*50+100;
            var c = "rgb("+(~~(Math.random()*200+55))+","
                 +(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
            for (var i=0; i<nFire; i++) {
                var particle = new Particle();
                particle.color = c;
                var vy = Math.sqrt(25-particle.vx*particle.vx);
                if (Math.abs(particle.vy) > vy) {
                    particle.vy = particle.vy>0 ? vy: -vy;
                }
                particles.push(particle);
            }
        } 
        
        function Particle() {
            this.w = this.h = Math.random()*4+1;
            
            this.x = xPoint-this.w/2;
            this.y = yPoint-this.h/2;
            
            this.vx = (Math.random()-0.5)*10;
            this.vy = (Math.random()-0.5)*10;
            
            this.alpha = Math.random()*.5+.5;
            
            this.color;
        } 
        
        Particle.prototype = {
            gravity: 0.05,
            move: function () {
                this.x += this.vx;
                this.vy += this.gravity;
                this.y += this.vy;
                this.alpha -= 0.01;
                if (this.x <= -this.w || this.x >= screen.width ||
                    this.y >= screen.height ||
                    this.alpha <= 0) {
                        return false;
                }
                return true;
            },
            draw: function (c) {
                c.save();
                c.beginPath();
                
                c.translate(this.x+this.w/2, this.y+this.h/2);
                c.arc(0, 0, this.w, 0, Math.PI*2);
                c.fillStyle = this.color;
                c.globalAlpha = this.alpha;
                
                c.closePath();
                c.fill();
                c.restore();
            }
        }