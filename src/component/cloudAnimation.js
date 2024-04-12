import React, { useRef, useEffect } from "react";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

const getDir = () => {
  const dec = Math.floor(Math.random() * 30);
  if (dec < 16) return LEFT;
  else return RIGHT;
};

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.floor(Math.random() * 30);
    this.clr = "silver";
    this.dir = getDir();
    this.speed = Math.floor(Math.random() * 2) + 1;
  }
  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  update(canvasWidth) {
    if (this.x <= 0) {
      this.dir = RIGHT;
    } else if (this.x >= canvasWidth) {
      this.dir = LEFT;
    }

    if (this.dir === LEFT) {
      this.moveLeft();
    } else {
      this.moveRight();
    }
  }
  drawRoot(ctx, x, y) {
    let sx = x,
      sy = y,
      ex = sx + Math.floor(Math.random() * 50) - 15,
      ey = sy + Math.floor(Math.random() * 30);
    let i = 0,
      limit = Math.floor(Math.random() * 20);
    while (i < limit) {
      ctx.beginPath();
      ctx.strokeStyle = "silver";
      ctx.lineWidth = 1;
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      sx = ex;
      sy = ey;
      ex = sx + Math.floor(Math.random() * 50) - 15;
      ey = sy + Math.floor(Math.random() * 30);
      i++;
    }
  }
  drawLightning(ctx) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let sx = this.x,
      sy = this.y,
      ex = sx + Math.floor(Math.random() * 30) - 15,
      ey = sy + Math.floor(Math.random() * 30);

    let i = 0,
      limit = Math.floor(Math.random() * 20) + 10;

    while (i < limit) {
      ctx.beginPath();
      ctx.strokeStyle = "silver";
      ctx.lineWidth = 3;
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      sx = ex;
      sy = ey;
      ex = sx + Math.floor(Math.random() * 30) - 15;
      ey = sy + Math.floor(Math.random() * 30);
      let root = Math.floor(Math.random() * 1000);
      if (root < 50) {
        this.drawRoot(ctx, sx, sy);
      }
      i++;
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.clr;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();

    const strike = Math.floor(Math.random() * 100000);

    if (strike < 100) {
      this.drawLightning(ctx);
    }
  }
}

const CloudsAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let clouds = [];
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      clouds = [];
      let i = 0;
      while (i < canvas.width) {
        clouds.push(new Cloud(i, 0));
        i += Math.floor(Math.random() * 10) + 1;
      }
    };

    const animate = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowColor = "aliceblue";
      ctx.shadowBlur = 10;

      for (let c of clouds) {
        c.draw(ctx);
        c.update(canvas.width);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default CloudsAnimation;
