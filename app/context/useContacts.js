import { createContext, useContext, useState } from "react";
import { ContactsAPI } from "../data/ContactsAPI";

const contactsAPI = new ContactsAPI();

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);


export const ContactsProvider = ({children}) => {
  const [contacts, setContacts] = useState(contactsAPI.all());

  const refreshContacts = () => {
    const contactsRefreshed = contactsAPI.all();

    // Why do i need to spread this?
    return setContacts(() => ([...contactsRefreshed]));
  };

  const addContact = (name) => {
    contactsAPI.add(name);
    return refreshContacts();
  };

  const getContact = (id) => {
    const contact = contacts.find((itm) => itm.id === parseInt(id));
    return contact;
  }

  const contactsContextValue = {contacts, refreshContacts, addContact, getContact};

  return (
    <ContactsContext.Provider value={contactsContextValue} >
      {children}
    </ContactsContext.Provider>
  );

};
