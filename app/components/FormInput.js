import PropTypes from "prop-types";

export default function FormInput({name, handleInput, label, value, attributes={}, helpText="", type="text", isRequired=true}) {

  const inputProps = { name, type, value, required: isRequired };

  for (let [key, value] of Object.entries(attributes)) {
    inputProps[key] = value;
  };

  return (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input className="form-control" onChange={(e) => handleInput(e)} {...inputProps} />
        {helpText !== "" &&
        <small id={`${name}Help`}> {helpText} </small>
        }
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  helpText: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool
};