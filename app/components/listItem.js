import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export default function ListItem({person}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contacts/${person.id}`);
  };

  return (
    <p onClick={handleClick} style={{"cursor":"pointer"}}> {person.name} </p>
  )
};

ListItem.propTypes = {
  person: PropTypes.object
}