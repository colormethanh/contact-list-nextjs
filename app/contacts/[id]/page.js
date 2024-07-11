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
    <main>
      <div className="row">

      <h1 className="text-center"> Contact Card </h1>
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-8 col-md-6 col-lg-4 mb-3 d-flex justify-content-between">
            <RerouteBtn text={"<"} route={`/contacts/${prevId && prevId}`} isDisabled={!prevId}/>
            <RerouteBtn text={"Home"} route={"/contacts"} className={"mx-3"} isDisabled={isEdit}/>
            <ActionBtn text={isEdit ? "Cancel" : "Edit"} action={handleToggleEdit} className="me-3"/> 
            <ActionBtn text="delete" action={toggleModal} className="me-3" btnStyle="btn-danger" isDisabled={isEdit}/>
            <RerouteBtn text={">"} route={`/contacts/${nextId && nextId}`} isDisabled={!nextId} />
          </div>  
        </div> 
      </div>
      {isEdit ? 
        <ContactForm 
        formData={formData} 
        handleInput={handleInput} 
        handleSubmit={(e) => (handleSubmit(e))}
        className="col-6 col-md-4 mx-auto"
        /> 
        :
        <ContactCard person={person} className="col-6 col-md-4 mx-auto d-flex flex-column align-items-center" isEdit={isEdit} />
      }
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
      </div>
    </main>
  );
};