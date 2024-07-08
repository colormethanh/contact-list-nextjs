import { useState } from "react";

const initialData = {
  name: "",
  email: "",
  image_url: "",
  phone_number: "",
};

export default function useFormData() {
  const [ formData, setFormData ] = useState(initialData);

  const handleInput = ({target}) => setFormData((prev) => ({...prev, [target.name]: target.value}));

  const resetData = () => setFormData(initialData);

  return {
    formData, handleInput, resetData
  };
};