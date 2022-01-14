import { useRef, useEffect } from 'react';

const CanvasMenu = () => {
  let ref = useRef();

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext('2d');

    window.addEventListener('resize', fitToContainer);
    fitToContainer(canvas);

    let mouseX = -100;
    let mouseY = -100;
    window.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    //last = performance.now();

    class Vector {
      constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
      }

      getDistance(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    }

    class Agent {
      constructor(x, y, speedX, speedY) {
        this.pos = new Vector(x, y);
        this.speed = new Vector(1, 1);
        this.vel = new Vector(getRndInteger(-1, 1), getRndInteger(-1, 1));
        this.radius = Math.floor(Math.random() * 10 + 4);
        this.pushNumber = 0;
      }

      bounce() {
        if (
          this.pos.x <= 0 + this.radius ||
          this.pos.x >= canvas.width - this.radius
        )
          this.vel.x *= -1;
        if (
          this.pos.y <= 0 + this.radius ||
          this.pos.y >= canvas.height - this.radius
        )
          this.vel.y *= -1;
      }

      repel() {
        if (
          Math.abs(this.pos.x - mouseX) < 80 &&
          Math.abs(this.pos.y - mouseY) < 80
        ) {
          this.vel.x =
            (this.pos.x - mouseX) /
            Math.max(
              Math.abs(this.pos.x - mouseX),
              Math.abs(this.pos.y - mouseY)
            );
          this.vel.y =
            (this.pos.y - mouseY) /
            Math.max(
              Math.abs(this.pos.x - mouseX),
              Math.abs(this.pos.y - mouseY)
            );
        }
        if (
          Math.abs(this.pos.x - mouseX) < 50 &&
          Math.abs(this.pos.y - mouseY) < 50 &&
          this.speed.x < 4 &&
          this.speed.y < 4
        ) {
          this.speed.x *= 2;
          this.speed.y *= 2;
          this.pushNumber++;
        }
        if (
          Math.abs(this.pos.x - mouseX) > 80 &&
          Math.abs(this.pos.y - mouseY) > 80 &&
          this.pushNumber > 1
        ) {
          for (let k = 0; k < this.pushNumber; k++) {
            this.speed.x /= 2;
          }
          for (let k = 0; k < this.pushNumber; k++) {
            this.speed.y /= 2;
          }
          this.pushNumber = 0;
        }
      }

      update() {
        this.pos.x += this.vel.x * this.speed.x;
        this.pos.y += this.vel.y * this.speed.y;
      }

      draw(ctx) {
        ctx.fillStyle = 'white';

        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);

        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }
    }

    const agents = [];

    test();

    for (let i = 0; i < 40; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = getRndInteger(0.1, 2);
      const speedY = getRndInteger(0.1, 2);

      agents.push(new Agent(x, y, speedX, speedY));
    }

    function test() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines();

      agents.forEach((agent) => {
        agent.update();

        agent.draw(ctx);

        agent.bounce();
        agent.repel();
      });
      requestAnimationFrame(test);

      function lines() {
        const maxLineWidth = 12;
        const maxLineDistance = 200;

        for (let i = 0; i < agents.length; i++) {
          const agent = agents[i];

          for (let j = i + 1; j < agents.length; j++) {
            const other = agents[j];

            const dist = agent.pos.getDistance(other.pos);

            if (dist > maxLineDistance) continue;

            ctx.beginPath();
            ctx.lineWidth = ((1 - maxLineWidth) / maxLineDistance) * dist + 12;

            ctx.moveTo(agent.pos.x, agent.pos.y);
            ctx.lineTo(other.pos.x, other.pos.y);
            ctx.strokeStyle = 'black';
            ctx.stroke();
          }
        }
      }
    }

    function getRndInteger(min, max) {
      return Math.random() * (max - min) + min; // remove 1??
    }

    //makese screen size dynamic
    function fitToContainer() {
      canvas.style.width = '100%';
      canvas.width = canvas.offsetWidth;
      canvas.style.height = '100%';
      canvas.height = window.innerHeight;
    }
  });

  return (
    <div>
      <canvas ref={ref}></canvas>
    </div>
  );
};

export default CanvasMenu;
