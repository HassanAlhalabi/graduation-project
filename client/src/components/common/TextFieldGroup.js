import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  error,
  info,
  disabled,
}) => {
  return (
    <div className="form-group">
      {error && <div className="alert alert-danger rounded-0 ">{error}</div>}
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text orange-color font-weight-bold">{info}</small>}
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
