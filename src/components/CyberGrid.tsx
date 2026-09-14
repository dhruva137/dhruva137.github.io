import { useEffect, useRef } from 'react';

export const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', resize);

    // Mouse state
    const mouse = { x: w / 2, y: h / 2 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Trail physics
    interface Node { x: number; y: number; vx: number; vy: number; }
    const nodes: Node[] = Array(12).fill(0).map(() => ({ x: w/2, y: h/2, vx: 0, vy: 0 }));

    let animId: number;

    const draw = () => {
      // Classic OS Teal Background
      ctx.fillStyle = '#008080';
      ctx.fillRect(0, 0, w, h);

      // Subtle Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;

      ctx.beginPath();
      for (let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Fluid Trail (Verlet Integration)
      const stiffness = 0.5;
      const damping = 0.5;
      
      nodes[0].vx = (mouse.x - nodes[0].x) * stiffness - nodes[0].vx * damping;
      nodes[0].vy = (mouse.y - nodes[0].y) * stiffness - nodes[0].vy * damping;
      nodes[0].x += nodes[0].vx;
      nodes[0].y += nodes[0].vy;

      for (let i = 1; i < nodes.length; i++) {
        const prev = nodes[i - 1];
        const curr = nodes[i];
        curr.vx = (prev.x - curr.x) * (stiffness * 0.8) - curr.vx * damping;
        curr.vy = (prev.y - curr.y) * (stiffness * 0.8) - curr.vy * damping;
        curr.x += curr.vx;
        curr.y += curr.vy;
      }

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      for (let i = 0; i < nodes.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[i+1].x, nodes[i+1].y);
        
        const dist = Math.hypot(nodes[i].x - nodes[i+1].x, nodes[i].y - nodes[i+1].y);
        const width = Math.max(2, 15 - i * 1.2 - dist * 0.05);
        
        ctx.lineWidth = width;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 - i/nodes.length})`;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
