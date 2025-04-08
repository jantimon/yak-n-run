"use client";

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
        animation = button.animate(
          [
            { translate: "0 0px" },
            { translate: "0 -90px" },
            { translate: "0 0px" },
          ],
          {
            duration: 800,
            easing: "ease-out",
            fill: "forwards",
          },
        );
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
