"use client"
import Header from "@/components/websites/header/header";
import Sectionthree from "@/components/websites/sectionthree/sectionthree";
import Sectiontwo from "@/components/websites/sectiontwo/sectiontwo";
import Image from "next/image";
import Sectionone from '../components/websites/sectionone/index'
import Sectionfour from "@/components/websites/sectionfour/sectionfour";
import Sectionfive from "@/components/websites/sectionfive/sectionfive";
import Sectionsix from "@/components/websites/sectionsix/sectionsix";
import Footer from "@/components/websites/Footer/footer";
import Sectest from "@/components/websites/sectest/sectest";
import { useEffect, useState } from 'react';




const Home = () => {
  return (
    <main className=" overflow-x-hidden">
       <Sectionone />
       <Sectiontwo />
       <Sectionthree />
       <Sectionfour />
       <Sectionfive />
       <Sectionsix />
       <Footer />
   
    </main>
  );
}

export default Home;
