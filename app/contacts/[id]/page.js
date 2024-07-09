'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useContacts } from "@/app/context/useContacts";
import { useParams } from "next/navigation";
import useFormData from '@/app/components/useFormData';
import ContactForm from "@/app/components/ContactForm";
import RerouteBtn from "@/app/components/RerouteBtn";
import ContactCard from "@/app/components/ContactCard";
import ActionBtn from "@/app/components/ActionBtn";

export default function Person() {
  const [isEdit, setIsEdit] = useState(false);
  const { getContact } = useContacts();
  const { id } = useParams();
  const person = getContact(id);
  const {formData, handleInput, resetData} = useFormData(person);
  const {deleteContact} = useContacts();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // // todo: Validate form
    // addContact(formData);
    // // todo: Success message
    // resetData();
    // router.push("/contacts");
    console.log({formData});
  };

  const handleDelete = () => {
    deleteContact(id);
    router.push("/contacts")
  }


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
        <ActionBtn text={"<"} action={() => console.log("prev btn clicked")}/>
        <RerouteBtn text={"Home"} route={"/contacts"} className={"mx-3"}/>
        <ActionBtn text="edit" action={() => {setIsEdit((prev) => !prev)}} className="me-3"/> 
        <ActionBtn text="delete" action={handleDelete} className="me-3" btnStyle="btn-danger"/>
        <ActionBtn text={">"} action={() => console.log("next btn clicked")}/>
      </div>
      
    </main>
  )
}