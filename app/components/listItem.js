/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';

export default function ListItem({person}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contacts/${person.id}`);
  };

  return (
    <tr onClick={handleClick} style={{"cursor":"pointer"}} >
      <td>
        <div className={styles.imageContainer}>
          <img 
            className={styles.profileImage} 
            src={person.image_url} 
            alt={`${person.name}'s profile pic`}
            /> 
        </div> 
      </td>
      <td className={styles.tableData}> {person.name} </td>
      <td className={styles.tableData}> {person.email} </td>
      <td className={styles.tableData}> {person.phone_number} </td>
    </tr>
  )
};

ListItem.propTypes = {
  person: PropTypes.object
};