"use client";
import { createContext, useContext, useState } from "react";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

const initialContacts = [{
  name: "Thanh", 
  email:"thanh@email.com", 
  phone_number: "2223334444",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
  id: 1
},
{
  name: "Paul Ortiz", 
  email:"paul@email.com", 
  phone_number: "111-222-3333",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Einstein_patentoffice.jpg",
  id: 2
}];

export const ContactsProvider = ({children}) => {
  const [contacts, setContacts] = useState(initialContacts);

  const createID = () => Math.round(Math.random() * 100000000);

  const addContact = (data) => {
    const newContact = {...data, id: createID()}

    return setContacts((prev) => [...prev, newContact]);
  };

  const getContact = (id) => {
    const contact = contacts.find((itm) => itm.id === parseInt(id));
    return contact;
  };

  const contactsContextValue = {contacts, addContact, getContact};

  return (
    <ContactsContext.Provider value={contactsContextValue} >
      {children}
    </ContactsContext.Provider>
  );

};
