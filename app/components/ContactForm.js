import useFormData from "./useFormData";
import FormInput from "./FormInput";
import { useContacts } from "../context/useContacts";


export default function ContactForm() {
  const { formData, handleInput, resetData} = useFormData();
  const { addContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    resetData();
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3> Create new contact </h3>
      <FormInput 
        label={"Name"} 
        name={"name"} 
        value={formData["name"]} 
        handleInput={handleInput} />
      <FormInput 
        label={"Email"} 
        name={"email"} 
        value={formData["email"]} 
        handleInput={handleInput} />
      <FormInput 
        label={"Image Url"} 
        name={"image_url"} 
        value={formData["image_url"]}
        handleInput={handleInput} />
      <FormInput 
        label={"Phone Number"} 
        name={"phone_number"} 
        value={formData["phone_number"]}
        handleInput={handleInput} />
      <button className="btn btn-primary" type="submit" > Submit </button>
    </form>
  )
}