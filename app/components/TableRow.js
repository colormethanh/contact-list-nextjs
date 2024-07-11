/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./TableRow.module.css";
import ActionBtn from "./ActionBtn";


export default function TableRow({person, handleDeleteClick}) {
  const router = useRouter();
  const deleteBtnId = `deleteBtn${person.id}`;

  const handleClick = (e) => {
    if( e.target.id !== deleteBtnId ) return router.push(`/contacts/${person.id}`);
    e.stopPropagation();
  };

  return (
      <tr onClick={(e) => (handleClick(e))} style={{"cursor": "pointer"}} id={`tableRow${person.id}`}>
        <td id={`profilePic${person.id}`}>
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
        <td className={styles.tableData}> 
          <ActionBtn text="delete" btnStyle="btn-danger" action={() => handleDeleteClick(person.id)} id={deleteBtnId} />
        </td>
      </tr>
  );
};

TableRow.propTypes = {
  person: PropTypes.object.isRequired,
  handleDeleteClick: PropTypes.func.isRequired
};