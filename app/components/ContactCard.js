import styles from "./ContactCard.module.css";
import PropTypes from "prop-types";


export default function ContactCard({person, className=""}) {
  
  return (
      <div className={`${className} ${styles.contactCard}`}>
        <div className={`my-3 ${styles.imageContainer}`}>
          <img src={person.image_url} alt={`${person.name}'s profile image`} className={`${styles.contactImage}`} />
        </div>
        <h2 className='text-center'> {person.name} </h2>
        <p> {person.email} </p>
        <p> {person.phone_number} </p>
      </div>
  );
};

ContactCard.propTypes = {
  person: PropTypes.object.isRequired,
  className: PropTypes.string
};




