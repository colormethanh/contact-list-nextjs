"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useContacts } from "../context/useContacts";
import ContactsTable from "../components/ContactsTable";
import Modal from "../components/Modal";

export default function Contacts() {
  const { contacts, deleteContact, getContact } = useContacts();
  const [selectedUser, setSelectedUser] = useState(contacts[0]);
  const router = useRouter();
  const tableModalToggler = useRef(null);

  const handleDelete = (id) => {
    deleteContact(id);
    router.push("/contacts");
  };

  const toggleModal = (id) => {
    setSelectedUser(getContact(id));
    tableModalToggler.current.click();
  };

  return (
    <main>
      <h1 className="text-center">Your Contacts</h1>
      <ContactsTable contacts={contacts} handleDeleteClick={toggleModal} />
      <Modal 
        id={"confirmationModal"} 
        body={`You're about to delete the contact for ${selectedUser.name}. Are you sure?`}
        title={"Are you sure???"}
        confirmText={"Yes. Delete that sucker!"}
        cancelText={"Oh nevermind"}
        onConfirm={() => handleDelete(selectedUser.id)}
        />
      <button 
        type="button" 
        data-bs-toggle="modal" 
        data-bs-target="#confirmationModal" 
        ref={tableModalToggler} 
        style={{display:"none"}}>Launch modal</button>
    </main>
  );
};