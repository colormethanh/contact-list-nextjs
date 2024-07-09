import PropTypes from 'prop-types';

export default function ActionBtn({text, action, className="", btnStyle="", isDisabled=false}) {
  
  const handleClick = () => {
    action();
  };

  return (
    <div className={`d-flex justify-content-center ${className}`} >
      <button 
        className={`btn btn-primary ${btnStyle}`} 
        onClick={handleClick} 
        disabled={isDisabled}> 
        {text} 
      </button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
  btnStyle: PropTypes.string
};