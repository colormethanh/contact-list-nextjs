import { useState } from "react";

const emptyData = {
  name: "",
  email: "",
  image_url: "",
  phone_number: "",
};

export default function useFormData(initialData = null) {
  const [ formData, setFormData ] = useState(initialData ? initialData : emptyData);

  const handleInput = ({target}) => setFormData((prev) => ({...prev, [target.name]: target.value}));

  const resetData = () => setFormData(initialData ? initialData : emptyData);


  return {
    formData, handleInput, resetData
  };
};