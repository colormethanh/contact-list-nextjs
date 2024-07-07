"use client";
import ListItem from "../components/ListItem";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/useContacts";

export default function Contact() {

  const { contacts } = useContacts();

  return (
    <main>
      <h1>Contacts</h1>
      {contacts.map((person, i) => <ListItem key={i} person={person} /> )}
    </main>
  )
};