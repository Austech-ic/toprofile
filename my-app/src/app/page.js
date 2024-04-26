import Header from "@/components/websites/header/header";
import Sectionthree from "@/components/websites/sectionthree/sectionthree";
import Sectiontwo from "@/components/websites/sectiontwo/sectiontwo";
import Image from "next/image";
import Sectionone from '../components/websites/sectionone/index'

export default function Home() {
  return (
    <main className="">
       <Sectionone />
       <Sectiontwo />
       <Sectionthree />
   
    </main>
  );
}
