"use client";

const JUMP_HEIGHT = 110;

export const HeroController = (props) => (
  <button
    {...props}
    autoFocus
    ref={(ref) => {
      const button = ref;
      const level = button.closest(".level");
      console.log("ref", ref, level);
      if (!button || !level) {
        return;
      }
      const controller = new AbortController();
      const { signal } = controller;
      let animation: Animation | null = null;
      const jump = async () => {
        if (animation) {
          return;
        }
        const keyframes = Array.from({ length: 100 }, (_, i) => {
          const progress = i / 99;
          const y = Math.sin(progress * Math.PI) * -JUMP_HEIGHT; // Sine curve for smooth jump that emulates gravity
          return { translate: `0 ${y}px` };
        });

        animation = button.animate(keyframes, {
          duration: 450,
          easing: "linear", // Linear easing to follow the sine curve naturally
          fill: "forwards",
        });
        await animation.finished;
        animation = null;
      };
      const keydown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          jump();
        }
      };
      level.addEventListener("click", jump, { signal });
      level.addEventListener("keydown", keydown, { signal });
      return () => {
        controller.abort();
        if (animation) {
          animation.cancel();
        }
      };
    }}
  />
);
