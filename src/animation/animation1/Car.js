"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Player
        autoplay
        loop
        src="/animation/Off-road Vehicle (1).json"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
