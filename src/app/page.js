import React from "react";
import Header from "@/components/Header";
import WelcomePage from "@/components/WelcomePage";
import Services from "@/components/Services";
import "./globals.css";
import Callus from "@/components/Callus";
import About from "@/components/About";

const ServicesList = [
  { img: "/img/diag.png", description: "دیاگ" },
  { img: "/img/gps.png", description: "ردیاب" },
  { img: "/img/oil.png", description: "تعویض روغن" },
  { img: "/img/tiuning.png", description: "تیونینگ" },
  { img: "/img/remap.png", description: "ریمپ" },
  { img: "/img/tameir.png", description: "تعمیر موتور" },
  { img: "/img/bargh.png", description: "برق خودرو" },

  { img: "/img/luxrycar.png", description: "ریمپ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
  { img: "/img/luxryminicar.png", description: "تیونینگ" },
];
function page() {
  return (
    <>
      <Header />
      <WelcomePage />
      <Services services={ServicesList} />
      <About />
      <Callus />
    </>
  );
}

export default page;
