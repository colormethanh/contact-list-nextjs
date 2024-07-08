/* eslint-disable @next/next/no-img-element */
'use client';
import { useContacts } from "@/app/context/useContacts";
import { useParams } from "next/navigation";
import RerouteBtn from "@/app/components/RerouteBtn";
import ContactCard from "@/app/components/ContactCard";

export default function Person() {
  const { getContact } = useContacts();
  const { id } = useParams();
  const person = getContact(id);

  if (!person) {
    return (
      <main>
        <h1> Sorry could not find contact </h1>
        <RerouteBtn text={"Home"} route={"/contacts"} />
      </main>
    );
  };
  

  return (
    <main>
      {/* <h1> Contact page for { person && person.name } </h1>
      <img src={person.image_url} alt={`profile pic for ${id}`} height={100} width={100} />
      <p> {person.email} </p>
      <p> {person.phone_number} </p> */}
      <ContactCard />
      <br></br>
      <RerouteBtn text={"Home"} route={"/contacts"} />
    </main>
  )
}