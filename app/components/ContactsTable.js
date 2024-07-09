import TableRow from "./TableRow";
import RerouteBtn from "./RerouteBtn";
import PropTypes from 'prop-types';

export default function ContactsTable({contacts}) {

  return(
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"> Profile Pic </th>
            <th scope="col"> Name </th>
            <th scope="col"> Email </th>
            <th scope="col"> Phone </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((person, i) => 
          <TableRow key={i} person={person} /> 
          )}
        </tbody>
      </table>
      <div className="d-flex flex-row-reverse">
        <RerouteBtn text="Create Contact" route="/contacts/create" />
      </div>
    </>
  );
};


ContactsTable.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}