import FormInput from "./FormInput";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";


export default function ContactForm({formData, handleInput, handleSubmit, className}) {

  return (
    <div className={`${className} ${styles.formContainer}`}>
      <form className={`p-3 ${styles.contactForm}`} onSubmit={handleSubmit}>
        <FormInput label="Name" name="name" value={formData["name"]} handleInput={handleInput} autoComplete="name"/>
        <FormInput label="Email" name="email" type="email" value={formData["email"]} handleInput={handleInput} autoComplete="email"/>
        <FormInput label="Image Url" name="image_url" type="url"value={formData["image_url"]} handleInput={handleInput} />
        <FormInput 
          label="Phone Number" 
          name="phone_number"   
          type="tel" 
          attributes={{pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"}} 
          helpText="Format: 123-456-7890" 
          value={formData["phone_number"]}
          handleInput={handleInput} autoComplete="tel"/>
        <div className={styles.buttonContainer}>
          <button className="btn btn-primary" type="submit"> 
            Submit 
          </button>
        </div>
      </form>
    </div>
  );
};


ContactForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  className: PropTypes.string
};