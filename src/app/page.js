import React from "react";
import Header from "@/components/Header";
import WelcomePage from "@/components/WelcomePage";
import Services from "@/components/Services";
import "./globals.css";
import Callus from "@/components/Callus";
import About from "@/components/About";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

const ServicesList = [
  { img: "/img/diag.png", description: "دیاگ" },
  { img: "/img/radyab.jpg", description: "ردیاب" },
  { img: "/img/changeoil.jpg", description: "تعویض روغن" },
  { img: "/img/tuninig.jpg", description: "تیونینگ" },
  { img: "/img/remap.jpg", description: "ریمپ" },
  { img: "/img/tamirmotor.jpg", description: "تعمیر موتور" },
  { img: "/img/bargh.jpg", description: "برق خودرو" },
  { img: "/img/anjector.jpg", description: "انژکتور" },
  { img: "/img/eibyabi.jpg", description: "عیب یابی" },
  { img: "/img/coler.jpg", description: "کولر" },
  { img: "/img/mechanic.jpg", description: "مکانیکی" },
];
function page() {
  return (
    <>
      <Header />
      <WelcomePage />
      <Services services={ServicesList} />
      <About />
      <Reserve />
      <Callus />
      <Footer />
    </>
  );
}

export default page;
