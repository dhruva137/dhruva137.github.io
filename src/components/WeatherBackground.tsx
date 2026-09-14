import { useEffect, useRef, useState } from 'react';

interface WeatherData {
  temp: number;
  windSpeed: number;
  code: number;
  description: string;
}

const weatherDescriptions: Record<number, string> = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Rime fog',
  51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
  61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
  80: 'Rain showers', 81: 'Moderate showers', 82: 'Heavy showers',
  95: 'Thunderstorm', 96: 'Hailstorm', 99: 'Severe storm',
};

const getDescription = (code: number) =>
  weatherDescriptions[code] || 'Partly cloudy';

export const WeatherBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current_weather=true')
      .then(r => r.json())
      .then(d => {
        if (d?.current_weather) {
          setWeather({
            temp: Math.round(d.current_weather.temperature),
            windSpeed: Math.max(6, d.current_weather.windspeed),
            code: d.current_weather.weathercode,
            description: getDescription(d.current_weather.weathercode),
          });
        }
      })
      .catch(() => setWeather({ temp: 26, windSpeed: 12, code: 2, description: 'Partly cloudy' }));
  }, []);

  // Continuous wind particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let animId: number;

    const resize = () => { W = window.innerWidth; H = window.innerHeight; canvas.width = W; canvas.height = H; };
    window.addEventListener('resize', resize);
    resize();

    const wind = weather ? weather.windSpeed * 0.15 : 1.5;
    const particleCount = 80;

    interface Particle {
      x: number; y: number;
      baseVx: number; baseVy: number;
      size: number; opacity: number;
      phase: number; phaseSpeed: number;
      type: 'wind' | 'dot';
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const isWind = Math.random() > 0.3;
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        baseVx: (Math.random() * wind + 0.3) * (isWind ? 1 : 0.4),
        baseVy: (Math.random() - 0.5) * 0.6,
        size: isWind ? (Math.random() * 40 + 20) : (Math.random() * 3 + 1),
        opacity: isWind ? (Math.random() * 0.06 + 0.02) : (Math.random() * 0.15 + 0.05),
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.01 + 0.005,
        type: isWind ? 'wind' : 'dot',
      });
    }

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      time++;

      particles.forEach(p => {
        p.phase += p.phaseSpeed;

        // Sinusoidal drift for organic movement
        const wavX = Math.sin(p.phase) * 0.5;
        const wavY = Math.cos(p.phase * 0.7) * 0.8;

        p.x += p.baseVx + wavX;
        p.y += p.baseVy + wavY;

        // Wrap around
        if (p.x > W + 60) { p.x = -60; p.y = Math.random() * H; }
        if (p.x < -60) { p.x = W + 60; }
        if (p.y > H + 30) p.y = -30;
        if (p.y < -30) p.y = H + 30;

        ctx.save();

        if (p.type === 'wind') {
          // Wind streaks — curved lines
          const angle = Math.atan2(p.baseVy + wavY, p.baseVx + wavX);
          ctx.globalAlpha = p.opacity;
          ctx.strokeStyle = 'rgba(120, 140, 170, 0.6)';
          ctx.lineWidth = 1;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          const cx = p.x + Math.cos(angle) * p.size * 0.5;
          const cy = p.y + Math.sin(angle + 0.3) * 8;
          const ex = p.x + Math.cos(angle) * p.size;
          const ey = p.y + Math.sin(angle) * p.size * 0.1;
          ctx.quadraticCurveTo(cx, cy, ex, ey);
          ctx.stroke();
        } else {
          // Floating dots / dust particles
          ctx.globalAlpha = p.opacity * (0.6 + 0.4 * Math.sin(time * 0.02 + p.phase));
          ctx.fillStyle = 'rgba(100, 120, 160, 0.8)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [weather]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      {/* Weather badge — top right */}
      {weather && (
        <div className="fixed top-4 right-4 weather-badge pointer-events-none" style={{ zIndex: 60 }}>
          Bengaluru · {weather.temp}°C · {weather.description}
        </div>
      )}
    </>
  );
};
