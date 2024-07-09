'use client';
import { useState } from "react";
import { useContacts } from "@/app/context/useContacts";
import { useParams } from "next/navigation";
import RerouteBtn from "@/app/components/RerouteBtn";
import ContactCard from "@/app/components/ContactCard";
import ActionBtn from "@/app/components/ActionBtn";

export default function Person() {
  const [isEdit, setIsEdit] = useState(false);
  const { getContact } = useContacts();
  const { id } = useParams();
  const person = getContact(id);

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
      <ContactCard person={person} isEdit={isEdit} />
      <div className="d-flex mt-3"> 
        <ActionBtn text={"<"} action={() => console.log("prev btn clicked")}/>
        <RerouteBtn text={"Home"} route={"/contacts"} className={"mx-3"}/>
        <ActionBtn text="edit" action={() => console.log("edit button clicked")} className="me-3"/> 
        <ActionBtn text="delete" action={() => console.log("delete button clicked")} className="me-3" btnStyle="btn-danger"/>
        <ActionBtn text={">"} action={() => console.log("next btn clicked")}/>
      </div>
      
    </main>
  )
}