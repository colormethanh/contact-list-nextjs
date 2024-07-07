"use client";
// import styles from './page.module.css';
import RerouteBtn from "./components/RerouteBtn"; 

export default function Home() {
  return (
    <main>
      <RerouteBtn text={"enter"} route={"/contacts"} />
    </main>
  )
}
