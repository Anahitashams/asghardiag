import React from "react";
import Header from "@/components/Header";
import WelcomePage from "@/components/WelcomePage";
import Services from "@/components/Services";
// import Callus from "@/components/Callus";

const ServicesList = [
  { img: "/img/luxrycar.png", description: "ریمپ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
  { img: "/img/luxrycar.png", description: "ریمپ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
  { img: "/img/luxrycar.png", description: "ریمپ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
  { img: "/img/luxrycar.png", description: "ریمپ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
];
function page() {
  return (
    <>
      <Header />
      <WelcomePage />
      <Services services={ServicesList} />
      {/* <Callus /> */}
    </>
  );
}

export default page;
