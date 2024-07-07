import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export default function RerouteBtn({text, route}) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(route);
  };


  return (
    <button className='btn btn-primary' onClick={handleClick}> {text} </button>
  )
};

RerouteBtn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string
}