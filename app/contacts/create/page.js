"use client";
import { useContacts } from "@/app/context/useContacts";
import { useRouter } from "next/navigation";
import ContactForm from "@/app/components/ContactForm";
import useFormData from "@/app/components/useFormData";

export default function CreateContact() {
  const { formData, handleInput, resetData} = useFormData();
  const { addContact } = useContacts();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    resetData();
    router.push("/contacts");
  };

  return (
    <main>
      <div className="row">

      <h1 className="text-center"> Create New Contact </h1>
      <ContactForm 
        formData={formData}
        className="col-8 col-md-6 mx-auto" 
        handleInput={handleInput} 
        handleSubmit={(e) => handleSubmit(e)} />
      </div>
    </main>
  );
};