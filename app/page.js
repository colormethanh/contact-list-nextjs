"use client";
// import styles from './page.module.css';
import { useContacts } from './context/useContacts';
import Image from 'next/image';

export default function Home() {
  const {contacts, addContact} = useContacts();

  const handleClick = (name) => {
    addContact(name);
  }

  return (
    <main>
      <h1>Hello world</h1>
      {contacts.map((person, i) => {return <p key={i}> {person.name}</p>})}

      {/* Which one would be better...  */}
      <Image 
        src={'/profilePictures/profilePic.jpg'} 
        alt={"test profile picture"} 
        width={64} height={64}/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg' 
      width={64} height={64}
      />
      <button onClick={() => {handleClick("joe")}}> Click me </button>
    </main>
  )
}
