import PropTypes from "prop-types";

export default function ActionBtn({text, action, id="", className="", btnStyle="", isDisabled=false}) {

  const buttonAttributes = {
    text,
    disabled: isDisabled,
    className: `btn btn-primary ${btnStyle}`,
  };

  if (id !== "") buttonAttributes.id = id

  return (
    <div className={`d-flex justify-content-center ${className}`} >
      <button  
        onClick={action} 
        {...buttonAttributes}
        > 
        {text} 
      </button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  btnStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  id:PropTypes.string
};