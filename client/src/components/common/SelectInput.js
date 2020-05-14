import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  value,
  onChange,
  error,
  info,
  disabled,
  options,
  optionLettersCase,
  required
}) => {
let optionsList = options.map(option => <option value={option} className={optionLettersCase}>
                                          {option}
                                        </option>)
  return (
    <div>
      {error && <div className="alert alert-danger rounded-0 text-capitalize">{error}</div>}
      <div className='form-group position-relative'>
        <select className={classnames('form-control form-control-lg select-input', {
              'is-invalid': error })}
                name={name}
                defaultValue={value}
                onChange={onChange}
                disabled={disabled}
            >
            {optionsList}
        </select>
        {info && <small className="form-text orange-color font-weight-bold">{info}</small>}
        {required && <span className='asterisk position-absolute'><i className="fas fa-asterisk"></i></span>}
      </div>
    </div>    
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.string
};

SelectInput.defaultProps = {
  type: 'text'
};

export default SelectInput;
