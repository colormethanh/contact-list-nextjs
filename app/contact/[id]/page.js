'use client';

import { useContacts } from "@/app/context/useContacts";
import { useParams } from "next/navigation";

export default function Person() {
  const { getContact } = useContacts();
  const { id } = useParams();
  const person = getContact(id);

  if (!person) {
    return (
      <h1> Sorry could not find contact </h1>
    )
  }
  

  return (
    <h1> Hello this is the contact page for { person && person.name } </h1>
  )
}