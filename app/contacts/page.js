"use client";
import ContactsTable from "../components/contactsTable";
import { useContacts } from "../context/useContacts";

export default function Contact() {
  const { contacts } = useContacts();

  return (
    <main>
      <h1 className="text-center">Your Contacts</h1>
      <ContactsTable contacts={contacts} />
    </main>
  );
};