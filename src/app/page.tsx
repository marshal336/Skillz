import Define from "@/react/components/Define";
import Featured from "@/react/components/Featured";
import Foter from "@/react/components/Foter";
import Header from "@/react/components/Header";
import Learn from "@/react/components/Learn";
import Messeg from "@/react/components/Messeg";
import Personal from "@/react/components/Personal";
import Recent from "@/react/components/Recent";
import Stars from "@/react/components/Stars";
import Teacher from "@/react/components/Teacher";
import Upcomming from "@/react/components/Upcomming";
import './select.scss'

export default function Home() {
  return (
    <>
      <Messeg/>
      <Header/>
      <Learn/>
      <Featured/>
      <Personal/>
      <Upcomming/>
      <Stars/>
      <Teacher/>
      <Recent/>
      <Define/>
      <Foter/>
    </>
  )
}
