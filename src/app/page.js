import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import UpcomingMatches from "./components/UpcomingMatches";
import News from "./components/News";
import Sponsors from "./components/Sponsors";
import JoinClub from "./components/JoinClub";
import Donate from "./components/Donate";

export default function Home() {
  return (
 
    <>
    <Header />
    <About />
    <UpcomingMatches />
 
    <Sponsors />
    <JoinClub />
    <Donate />
    
    </>
   
  );
}
