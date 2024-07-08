"use client";
import ContactForm from "@/app/components/ContactForm";
import useFormData from "@/app/components/useFormData";
import { useContacts } from "@/app/context/useContacts";
import { useRouter } from "next/navigation";


export default function CreateContact() {
  const { formData, handleInput, resetData} = useFormData();
  const { addContact } = useContacts();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo: Validate form
    addContact(formData);
    // todo: Success message
    resetData();
    router.push("/contacts");
  };

  return (
    <main>
      <ContactForm 
        formData={formData} 
        handleInput={handleInput} 
        handleSubmit={(e) => handleSubmit(e)}/>
    </main>
  );
};