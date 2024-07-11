"use client";
import { useRouter } from 'next/navigation';
import { useContacts } from "../context/useContacts";
import ContactsTable from "../components/ContactsTable";
import Modal from '../components/Modal';
import { useRef, useState } from 'react';

export default function Contacts() {
  const [selectedUser, setSelectedUser] = useState()
  const { contacts, deleteContact } = useContacts();
  const router = useRouter();
  const tableModalToggler = useRef(null);

  const handleDelete = (id) => {
    deleteContact(id);
    router.push("/contacts");
  };

  const toggleModal = (id) => {
    setSelectedUser(id);
    tableModalToggler.current.click()
  };


  return (
    <main>
      <h1 className="text-center">Your Contacts</h1>
      <ContactsTable contacts={contacts} handleDeleteClick={toggleModal} />
      <Modal 
        id={"contactModal"} 
        body={`You're about to delete the contact for. Are you sure?`}
        title={"Are you sure???"}
        confirmText={"Yes. Delete that sucker!"}
        cancelText={"Oh nevermind"}
        onConfirm={() => {handleDelete(selectedUser)}}
        />
      <button 
        type="button" 
        data-bs-toggle="modal" 
        data-bs-target="#contactModal" 
        ref={tableModalToggler} 
        style={{display:"none"}}>Launch modal</button>
    </main>
  );
};