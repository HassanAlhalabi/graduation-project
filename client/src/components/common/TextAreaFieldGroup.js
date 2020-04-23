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
  info,
  required
}) => {
  return (
    <div>
      {error && <div className="alert alert-danger rounded-0 text-capitalize">{error}</div>}
      <div className={'form-group position-relative ' + className}>
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
        {required && <span className='asterisk position-absolute'><i className="fas fa-asterisk"></i></span>}
      </div>
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
