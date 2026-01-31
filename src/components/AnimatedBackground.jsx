import React, { useEffect, useRef } from "react";

const AnimatedBackground = ({ enabled = true }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const timeRef = useRef(0);

    useEffect(() => {
        if (!enabled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        const spacing = 24;
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
            timeRef.current += 0.02;

            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;


                    const wave = Math.sin(x * 0.01 + timeRef.current) *
                        Math.cos(y * 0.01 + timeRef.current * 0.7);

                    const offsetX = wave * 3;
                    const offsetY = Math.cos(x * 0.01 + y * 0.01 + timeRef.current * 0.5) * 3;


                    const sizeMod = 1 + wave * 0.3;

                    ctx.beginPath();
                    ctx.arc(x + offsetX, y + offsetY, baseSize * sizeMod, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + Math.abs(wave) * 0.10})`;
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
    }, [enabled]);

    if (!enabled) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default AnimatedBackground;
