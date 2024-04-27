import Header from "@/components/websites/header/header";
import Sectionthree from "@/components/websites/sectionthree/sectionthree";
import Sectiontwo from "@/components/websites/sectiontwo/sectiontwo";
import Image from "next/image";
import Sectionone from '../components/websites/sectionone/index'
import Sectionfour from "@/components/websites/sectionfour/sectionfour";
import Sectionfive from "@/components/websites/sectionfive/sectionfive";

export default function Home() {
  return (
    <main className="">
       <Sectionone />
       <Sectiontwo />
       <Sectionthree />
       <Sectionfour />
       <Sectionfive />
   
    </main>
  );
}
