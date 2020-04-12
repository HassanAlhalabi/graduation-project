import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  className,
  info
}) => {
  return (
    <div className={'form-group ' + className}>
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        onChange={onChange}
      />
      {info && <small className="form-text orange-color font-weight-bold">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
  info: PropTypes.string
};

export default TextAreaFieldGroup;
