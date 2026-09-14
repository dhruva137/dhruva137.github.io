import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  opacity: number;
  size: number;
}

export const InkCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const trail: TrailPoint[] = [];
    let lastX = -1, lastY = -1;
    let animId: number;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Distance check — don't add duplicates
      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist < 4) return;
      lastX = x; lastY = y;

      trail.push({ x, y, age: 0, opacity: 0.18, size: 28 });
      // Cap trail length
      if (trail.length > 120) trail.shift();
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = trail.length - 1; i >= 0; i--) {
        const pt = trail[i];
        pt.age += 1;
        pt.opacity -= 0.003;
        pt.size += 0.4;

        if (pt.opacity <= 0) {
          trail.splice(i, 1);
          continue;
        }

        // Ink bleed: radial gradient expanding outward
        const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, pt.size);
        grad.addColorStop(0, `rgba(30, 80, 160, ${pt.opacity * 1.6})`);
        grad.addColorStop(0.4, `rgba(60, 120, 200, ${pt.opacity * 0.8})`);
        grad.addColorStop(1, `rgba(80, 140, 220, 0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 49, mixBlendMode: 'multiply' }}
    />
  );
};
