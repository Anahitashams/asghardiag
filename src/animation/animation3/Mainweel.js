"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Mainweel() {
  return (
    <div style={{ width: 700, height: 700 }}>
      <Player
        autoplay
        loop
        src="/animation/Gearauto.json"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
