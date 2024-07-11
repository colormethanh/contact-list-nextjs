"use client";
import { createContext, useContext, useState } from "react";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

const initialContacts = [{
  name: "Thanh Nguyen", 
  email:"thanh@email.com", 
  phone_number: "222-333-4444",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
  id: 1
},
{
  name: "Paul Ortiz", 
  email:"paul@email.com", 
  phone_number: "111-222-3333",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Einstein_patentoffice.jpg",
  id: 2
},
{
  name: "Sophia Nguyen",
  email: "sophia@email.com",
  phone_number: "555-666-7777",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Albert_Einstein_at_the_age_of_three_%281882%29.jpg",
  id: 3
}];

export const ContactsProvider = ({children}) => {
  const [contacts, setContacts] = useState(initialContacts);

  const createID = () => Math.round(Math.random() * 100000000);

  const addContact = (data) => {
    const newContact = {...data, id: createID()};
    return setContacts((prev) => [...prev, newContact]);
  };

  const getContact = (id) => {
    const contact = contacts.find((itm) => itm.id === parseInt(id));
    return contact;
  };

  const deleteContact = (id) => {
    const newContacts = []; 
    contacts.forEach((contact) => contact.id !== parseInt(id) && newContacts.push(contact));
    return setContacts(newContacts);
  };

  const editContact = (formData, id) => {
    id = parseInt(id);
    setContacts((prev) => prev.map((contact) => contact.id === id ? {...formData, id} : contact ));
    return {...formData, id};
  };

  const getPrevAndNext = (id) => {
    const i = contacts.findIndex((itm) => itm.id === parseInt(id));
    if (i < 0) return {prevId : null, nextId: null};
    const prevId = i === 0 ? null : contacts[i - 1].id;
    const nextId = i === contacts.length - 1 ? null : contacts[i + 1].id;
    return {prevId, nextId};
  }


  const contactsContextValue = {contacts, addContact, getContact, deleteContact, editContact, getPrevAndNext};

  return (
    <ContactsContext.Provider value={contactsContextValue} >
      {children}
    </ContactsContext.Provider>
  );

};
