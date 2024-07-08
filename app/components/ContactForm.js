import FormInput from "./FormInput";
import styles from "./ContactForm.module.css";


export default function ContactForm({formData, handleInput, handleSubmit}) {

  return (
    <>
      <h1 className="text-center"> Create New Contact </h1>
      <div className={styles.formContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
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
          <div className={styles.buttonContainer}>
            <button className="btn btn-primary" type="submit" > 
              Submit 
            </button>
          </div>
        </form>
      </div>
    </>
  )
}