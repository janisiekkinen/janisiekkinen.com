"use client";

import { useLayoutEffect, useRef } from "react";

type Kind = "ghost" | "eight" | "brass" | "ink";

const START: { kind: Kind; nx: number; ny: number }[] = [
  { kind: "ghost", nx: 0.195, ny: 0.41 },
  { kind: "eight", nx: 0.616, ny: 0.352 },
  { kind: "brass", nx: 0.516, ny: 0.612 },
  { kind: "ink", nx: 0.716, ny: 0.452 },
];

function radius(kind: Kind, width: number) {
  return width * (kind === "ghost" ? 0.055 : 0.036);
}

function classFor(kind: Kind) {
  if (kind === "ghost") return "scratch-ghost scratch-live";
  if (kind === "eight") return "scratch-ball scratch-ball-8 scratch-live";
  if (kind === "brass") return "scratch-ball scratch-ball-brass scratch-live";
  return "scratch-ball scratch-ball-ink scratch-live";
}

export function ScratchTable({ ghost }: { ghost: string }) {
  const feltRef = useRef<HTMLDivElement>(null);
  const ballRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const felt = feltRef.current;
    if (!felt) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const table = felt;
    table.dataset.live = "1";

    const balls = START.map((start, i) => ({
      ...start,
      el: ballRefs.current[i],
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
    }));

    const mouse = { x: 0, y: 0, seen: false };
    let lastW = 0;
    let lastH = 0;
    let raf = 0;

    function clamp(ball: (typeof balls)[number]) {
      const pad = ball.r + Math.min(lastW, lastH) * 0.04;
      if (ball.x < pad) {
        ball.x = pad;
        ball.vx = Math.abs(ball.vx) * 0.35;
      } else if (ball.x > lastW - pad) {
        ball.x = lastW - pad;
        ball.vx = -Math.abs(ball.vx) * 0.35;
      }
      if (ball.y < pad) {
        ball.y = pad;
        ball.vy = Math.abs(ball.vy) * 0.35;
      } else if (ball.y > lastH - pad) {
        ball.y = lastH - pad;
        ball.vy = -Math.abs(ball.vy) * 0.35;
      }
    }

    function paint() {
      for (const ball of balls) {
        if (!ball.el) continue;
        ball.el.style.width = `${ball.r * 2}px`;
        ball.el.style.height = `${ball.r * 2}px`;
        ball.el.style.transform = `translate(${ball.x - ball.r}px, ${ball.y - ball.r}px)`;
        if (ball.kind === "ghost") ball.el.style.fontSize = `${Math.max(10, ball.r * 0.62)}px`;
      }
    }

    function layout() {
      const { width: w, height: h } = table.getBoundingClientRect();
      if (w < 8 || h < 8) return;
      for (const ball of balls) {
        const r = radius(ball.kind, w);
        if (!lastW) {
          ball.x = ball.nx * w;
          ball.y = ball.ny * h;
        } else {
          ball.x *= w / lastW;
          ball.y *= h / lastH;
        }
        ball.r = r;
      }
      lastW = w;
      lastH = h;
      paint();
    }

    function step() {
      if (!lastW) {
        raf = requestAnimationFrame(step);
        return;
      }
      const rect = table.getBoundingClientRect();
      const mx = mouse.x - rect.left;
      const my = mouse.y - rect.top;

      balls.forEach((ball, i) => {
        if (mouse.seen) {
          const dx = ball.x - mx;
          const dy = ball.y - my;
          const dist = Math.hypot(dx, dy) || 0.001;
          const fear = ball.r * 8 + 90;
          if (dist < fear) {
            const force = (1 - dist / fear) ** 2 * 1.2 * ball.r;
            const nx = dx / dist;
            const ny = dy / dist;
            const spin = i % 2 === 0 ? 1 : -1;
            ball.vx += nx * force - ny * force * 0.2 * spin;
            ball.vy += ny * force + nx * force * 0.2 * spin;
          }
        }
        ball.vx *= 0.9;
        ball.vy *= 0.9;
        const speed = Math.hypot(ball.vx, ball.vy);
        const cap = ball.r * 0.9;
        if (speed > cap) {
          ball.vx = (ball.vx / speed) * cap;
          ball.vy = (ball.vy / speed) * cap;
        }
        ball.x += ball.vx;
        ball.y += ball.vy;
        clamp(ball);
      });

      for (let i = 0; i < balls.length; i += 1) {
        for (let j = i + 1; j < balls.length; j += 1) {
          const a = balls[i];
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          let dist = Math.hypot(dx, dy);
          let nx = 1;
          let ny = 0;
          if (dist > 0.0001) {
            nx = dx / dist;
            ny = dy / dist;
          } else {
            dist = 0.0001;
          }
          const min = a.r + b.r + 3;
          if (dist < min) {
            const overlap = (min - dist) / 2;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
            clamp(a);
            clamp(b);
          }
        }
      }

      paint();
      raf = requestAnimationFrame(step);
    }

    function onPoint(event: PointerEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.seen = true;
    }

    layout();
    window.addEventListener("pointermove", onPoint, { passive: true });
    window.addEventListener("pointerdown", onPoint, { passive: true });
    const ro = new ResizeObserver(layout);
    ro.observe(table);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPoint);
      window.removeEventListener("pointerdown", onPoint);
      ro.disconnect();
      delete table.dataset.live;
    };
  }, []);

  return (
    <div className="scratch-table" aria-hidden="true">
      <div ref={feltRef} className="scratch-felt">
        <span className="scratch-pocket scratch-pocket-tl" />
        <span className="scratch-pocket scratch-pocket-tr" />
        <span className="scratch-pocket scratch-pocket-bl" />
        <span className="scratch-pocket scratch-pocket-br" />
        <span className="scratch-pocket scratch-pocket-ml" />
        <span className="scratch-pocket scratch-pocket-mr" />
        {START.map((ball, i) => (
          <span
            key={ball.kind}
            ref={(node) => {
              ballRefs.current[i] = node;
            }}
            className={classFor(ball.kind)}
          >
            {ball.kind === "ghost" ? ghost : null}
          </span>
        ))}
        <span className="scratch-cue" />
      </div>
    </div>
  );
}
