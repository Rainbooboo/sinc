import { Metadata } from "next";
import Home from "../components/home";
import Header from "./header";
export const metadata: Metadata = {
    title: "Sinc",
    description: "Sample",
  };
  
  export default function Layout() {
    return (
       <div>
         <Header/>
         <Home/>
       </div>
    );
  }