"use client";
import Lottie from "lottie-react";

import MyLoader from "@/public/animation/MyLoader.json";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Lottie
        animationData={MyLoader}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
