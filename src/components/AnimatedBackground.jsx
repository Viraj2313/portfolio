import React, { useEffect, useRef, useState } from "react";

const MobileDots = () => {
    const dots = [];
    const spacing = 32;
    const cols = Math.ceil(400 / spacing);
    const rows = Math.ceil(800 / spacing);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const delay = (i * 0.3 + j * 0.2) % 4;
            dots.push(
                <div
                    key={`${i}-${j}`}
                    style={{
                        position: "absolute",
                        left: `${(i / cols) * 100}%`,
                        top: `${(j / rows) * 100}%`,
                        width: "2px",
                        height: "2px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(74, 124, 89, 0.18)",
                        animation: `mobileDotPulse 4s ease-in-out ${delay}s infinite`,
                    }}
                />
            );
        }
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <style>{`
        @keyframes mobileDotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
      `}</style>
            {dots}
        </div>
    );
};

const AnimatedBackground = ({ enabled = true }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const timeRef = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!enabled || isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        const spacing = 28;
        const baseSize = 1;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            timeRef.current += 0.015;

            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    const wave = Math.sin(x * 0.008 + timeRef.current) *
                        Math.cos(y * 0.008 + timeRef.current * 0.6);

                    const offsetX = wave * 4;
                    const offsetY = Math.cos(x * 0.008 + y * 0.008 + timeRef.current * 0.4) * 4;

                    const sizeMod = 1 + wave * 0.4;

                    ctx.beginPath();
                    ctx.arc(x + offsetX, y + offsetY, baseSize * sizeMod, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(74, 124, 89, ${0.12 + Math.abs(wave) * 0.10})`;
                    ctx.fill();
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [enabled, isMobile]);

    if (!enabled) return null;

    if (isMobile) return <MobileDots />;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default AnimatedBackground;
