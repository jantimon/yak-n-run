import React from "react"; // Import React

export const Glow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        focus-within:animate-glow-pulse
      "
    >
      {children}
    </div>
  );
};