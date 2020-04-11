import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  value,
  onChange,
  error,
  info,
  disabled
}) => {
  return (
    <div className='from-group'>
    <select className={classnames('form-control form-control-lg', {
          'is-invalid': error })}
            name={name}
            defaultValue={value}
            onChange={onChange}
            disabled={disabled}
        >
      <option>Unavailable</option>
      <option>sm</option>
      <option>md</option>
      <option>lg</option>
      <option>xl</option>
    </select>
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
      
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
