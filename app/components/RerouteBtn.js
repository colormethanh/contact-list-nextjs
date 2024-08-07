import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

export default function RerouteBtn({text, route, className="", isDisabled=false}) {
  const router = useRouter();
  
  const handleClick = () => router.push(route);

  return (
    <div className={`d-flex justify-content-center ${className}`}>
      <button className='btn btn-primary' onClick={handleClick} disabled={isDisabled}>  
        {text} 
      </button>
    </div>
  );
};

RerouteBtn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool
};