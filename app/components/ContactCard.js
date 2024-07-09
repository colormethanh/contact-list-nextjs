/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './ContactCard.module.css';

export default function ContactCard({person}) {
  const [isEdit, setIsEdit] = useState(false);


  return (
    <div className={styles.cardContainer}>
      <div className={styles.contactCard}>
        <img src={person.image_url} alt={`${person.name}'s profile image`} className={styles.contactImage} />
        <h2 className='text-center'> {person.name} </h2>
        <p> {person.email} </p>
        <p> {person.phone_number} </p>
      </div>
    </div>
  );
};