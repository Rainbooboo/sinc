import { Metadata } from "next";
import Header from "./header";
import Hero from "../components/home";
import About from "../components/about";
export const metadata: Metadata = {
    title: "Sinc",
    description: "Sample",
  };
  
  export default function Layout() {
    return (
       <div>
         <Header/>
         <Hero/>
         <About/>
       </div>
    );
  }