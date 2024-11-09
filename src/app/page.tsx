// App.tsx
"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Easyaccess from "./components/easyaccess";
import Footer from "./components/footer";




export default function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleCartVisibility={toggleCartVisibility} isCartVisible={isCartVisible} />
     <Hero/>
   <Easyaccess/>
   <Footer/>
    </div>
  );
}
