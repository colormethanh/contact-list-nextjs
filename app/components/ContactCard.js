/* eslint-disable @next/next/no-img-element */
import styles from "./ContactCard.module.css";
import PropTypes from "prop-types";


export default function ContactCard({person}) {
  
  return (
      <div className={styles.contactCard}>
        <img src={person.image_url} alt={`${person.name}'s profile image`} className={styles.contactImage} />
        <h2 className='text-center'> {person.name} </h2>
        <p> {person.email} </p>
        <p> {person.phone_number} </p>
      </div>
  );
};

ContactCard.propTypes = {
  person: PropTypes.object.isRequired,
};




