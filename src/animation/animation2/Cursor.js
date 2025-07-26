"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Cursor() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Player
        autoplay
        loop
        src="/animation/Animation-Arrow.json"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
