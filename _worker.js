export default {
  async fetch(request) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    }

    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>粒子文字效果</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            overflow: hidden;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: sans-serif;
        }
        #canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .controls {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 100;
        }
        .controls button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            cursor: pointer;
            backdrop-filter: blur(5px);
            transition: 0.3s;
        }
        .controls button:hover {
            background: rgba(255, 255, 255, 0.4);
        }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>
    <div class="controls">
        <button onclick="changeText()">更换文字</button>
        <button onclick="changeColor()">更换颜色</button>
    </div>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        let particles = [];
        let mouse = { x: 0, y: 0 };
        let texts = ['Hello!', '你好！', 'Bonjour!', 'Hola!', '안녕하세요!', 'こんにちは!'];
        let currentText = 0;
        let colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];
        let currentColor = 0;
        
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = 2;
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 30) + 1;
                this.color = colors[currentColor];
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
            
            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;
                
                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx/10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy/10;
                    }
                }
            }
        }

        function init() {
            particles = [];
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            ctx.fillStyle = 'white';
            ctx.font = '30px Verdana';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            const text = texts[currentText];
            const textWidth = ctx.measureText(text).width;
            const fontSize = Math.min(canvas.width / (textWidth / 30), 100);
            
            ctx.font = fontSize + 'px Verdana';
            ctx.fillText(text, canvas.width/2, canvas.height/2);
            
            const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            for (let y = 0; y < textCoordinates.height; y += 4) {
                for (let x = 0; x < textCoordinates.width; x += 4) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        particles.push(new Particle(x, y));
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let particle of particles) {
                particle.draw();
                particle.update();
            }
            requestAnimationFrame(animate);
        }

        function changeText() {
            currentText = (currentText + 1) % texts.length;
            init();
        }

        function changeColor() {
            currentColor = (currentColor + 1) % colors.length;
            particles.forEach(p => p.color = colors[currentColor]);
        }

        canvas.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        });

        window.addEventListener('resize', init);

        init();
        animate();
    </script>
</body>
</html>
    `

    return new Response(html, { headers })
  }
}
