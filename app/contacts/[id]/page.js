'use client';
import { useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import { useContacts } from "@/app/context/useContacts";
import { useParams } from "next/navigation";
import useFormData from '@/app/components/useFormData';
import ContactForm from "@/app/components/ContactForm";
import RerouteBtn from "@/app/components/RerouteBtn";
import ContactCard from "@/app/components/ContactCard";
import ActionBtn from "@/app/components/ActionBtn";
import Modal from "@/app/components/Modal";

export default function Person() {
  const { getContact, deleteContact, editContact, getPrevAndNext } = useContacts();
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const [person, setPerson] = useState(getContact(id));
  const [{prevId, nextId}, _] = useState(getPrevAndNext(id));
  const {formData, handleInput, resetData} = useFormData(person);
  const modalToggler = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPerson = editContact(formData, id);
    setPerson(updatedPerson);
    setIsEdit((prev) => !prev);
  };

  const handleDelete = () => {
    deleteContact(id);
    router.push("/contacts");
  };

  const handleToggleEdit = () => {
    if (isEdit) resetData();
    setIsEdit((prev) => !prev);
  };

  const toggleModal = () => modalToggler.current.click();


  if (!person) {
    return (
      <main>
        <h1> Sorry could not find contact </h1>
        <RerouteBtn text={"Home"} route={"/contacts"} />
      </main>
    );
  };
  

  return (
    <main className="d-flex flex-column align-items-center">
      <h1 className="text-center"> Contact Card </h1>
      {isEdit ? 
        <ContactForm 
          formData={formData} 
          handleInput={handleInput} 
          handleSubmit={(e) => (handleSubmit(e))}/> 
        :
        <ContactCard person={person} isEdit={isEdit} />
      }
      <div className="d-flex mt-3"> 
        <RerouteBtn text={"<"} route={`/contacts/${prevId && prevId}`} isDisabled={!prevId}/>
        <RerouteBtn text={"Home"} route={"/contacts"} className={"mx-3"} isDisabled={isEdit}/>
        <ActionBtn text={isEdit ? "Cancel" : "Edit"} action={handleToggleEdit} className="me-3"/> 
        <ActionBtn text="delete" action={toggleModal} className="me-3" btnStyle="btn-danger" isDisabled={isEdit}/>
        <RerouteBtn text={">"} route={`/contacts/${nextId && nextId}`} isDisabled={!nextId} />
      </div>
      <Modal 
        id={"contactModal"} 
        body={`You're about to delete the contact for ${person.name}. Are you sure?`}
        title={"Are you sure???"}
        confirmText={"Yes. Delete that sucker!"}
        cancelText={"Oh nevermind"}
        onConfirm={handleDelete}
        />
      <button 
        type="button" 
        data-bs-toggle="modal" 
        data-bs-target="#contactModal" 
        ref={modalToggler} 
        style={{display:"none"}}>Launch modal</button>
    </main>
  );
};