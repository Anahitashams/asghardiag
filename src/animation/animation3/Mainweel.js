"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Mainweel() {
  return (
    <div style={{ width: 1000, height: 900 }}>
      <Player
        autoplay
        loop
        src="/animation/Gearauto.json"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
