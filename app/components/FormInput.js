import PropTypes from 'prop-types';


export default function FormInput({name, handleInput, label, value}) {
  

  return (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input className="form-control" name={name} onChange={(e) => handleInput(e)} id={name} value={value}/>
    </div>
  )
};

FormInput.propTypes = {
  name: PropTypes.string,
  handleInput: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string
};