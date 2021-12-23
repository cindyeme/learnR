import { useState } from 'react';
// Within this component lives all the custom inputs used for the onboarding pages

// Input
export const Input = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  onPaste,
  disabled,
  value,
  handleBlur,
  style,
  border,
  autoFocus
}) => (
  <div className="input-group">
    <label
      htmlFor={name}
      className={`sm:text-base text-sm ${disabled ? 'text-gray-500' : 'text-gray-800'} font-medium text-left`}
      style={style}
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onPaste={onPaste}
      value={value}
      onBlur={handleBlur}
      className={` ${
          disabled ? 'text-gray-500' : 'text-gray-800'
        } focus:shadow-xl hover:border-primary-800 mt-3
         bg-gray-100 focus:bg-white focus:outline-none placeholder-opacity-5 form-input py-2 px-2 sm:px-4 w-full h-12 text-left text-md rounded hover:shadow-none 
         border border-primary-fade text-grayish-900 font-semibold ${border}`}
      style={style}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  </div>
);

// Password-Input
export const PasswordInput = ({ name, label, placeholder, onChange, value, handleBlur, required }) => {
  const [show, setShow] = useState(true);
  const togglePasswordVisiblity = () => {
    setShow(!show);
  };
  return (
    <div className="input-group">
      <label
        htmlFor={name}
        className="sm:text-base text-sm text-gray-800 font-medium text-left"
      >
        {label}
      </label>
      <div className="relative text-center">
        <input
          required={required}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={handleBlur}
          className="focus:shadow-xl hover:border-primary-800 mt-3
         bg-gray-100 focus:bg-white focus:outline-none placeholder-opacity-75 form-input py-2 px-2 sm:px-4 w-full h-12 text-left text-md rounded hover:shadow-none 
         border border-primary-fade text-grayish-900 font-semibold tracking-wider"
          type={show ? "password" : "text"}
        />
        <div className="absolute inset-y-0 right-0 pr-3 grid items-center text-sm leading-5">
          <button
            type="button"
            onClick={togglePasswordVisiblity}
            className="focus:outline-none text-base text-gray-600 grid grid-cols-1 items-center mt-2"
          >
            <i className={`fa fa-${show ? "eye-slash" : "eye"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Checkbox
export const Checkbox = ({ onChange, name, label, props, checked }) => (
  <label htmlFor={name} className="checkbox-input-group input-group text-sm sm:text-base cursor-pointer">
    <input
      onChange={onChange}
      type="checkbox"
      name={name}
      id={name}
      checked={!!checked}
      className="focus:outline-none pappy-block"
      {...props}
    />
    <span>{label}</span>
  </label>
);

// Radio
export const Radio = ({ onChange, name, label, checked, style, value, readOnly }) => (
  <label className="flex flex-row space-x-4 items-center cursor-pointer">
    <input
      readOnly={readOnly}
      onChange={onChange}
      type="radio"
      name={name}
      value={value}
      className="form-radio order-1 focus:outline-none border-primary-700 cursor-pointer"
      checked={checked}
      style={style}
    />
    <span className="order-2 text-sm sm:text-base">{label}</span>
  </label>
);

// AutoSelect - Bank
export const AutoSelect = ({ choices, label, name, onChange, defaultValue, chosen, className, style, disabled }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="pb-3 text-gray-800 sm:text-base font-medium text-sm" style={style}>
      {label}
    </label>
    <select id={name} onChange={onChange} name={name} className={className} disabled={disabled}>
      <option className="text-gray-400 placeholder-opacity-50" value={defaultValue} disabled>
        {defaultValue}
      </option>
      {choices.map((choice, index) => (
        <option key={`bank-${index}`} selected={choice.toLowerCase() === chosen?.toLowerCase()}>
          {choice}
        </option>
      ))}
    </select>
  </div>
);

// Select
export const Select = ({ choices, label, name, onChange, defaultValue, className, style, disabled, value }) => {
  const currentValue = value || defaultValue;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="pb-3 text-gray-800 sm:text-base font-medium text-sm"
        style={style}
      >
        {label}
      </label>
      <select
        id={name}
        onChange={onChange}
        name={name}
        className={`form-select h-12 rounded hover:shadow-none focus:outline-none focus:border-primary-800 focus:shadow-xl hover:border-primary-800 border border-primary-fade text-grayish-900 bg-gray-100 focus:bg-white ${className}`}
        disabled={disabled}
        value={currentValue}
      >
        <option
          className="text-gray-400 placeholder-opacity-50"
          value={defaultValue}
          disabled
        >
          {defaultValue}
        </option>
        {choices.map((choice, index) => (
          <option key={index} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};

// Textarea
export const TextArea = ({ name, label, placeholder, onChange, value, handleBlur, style }) => (
  <div className="input-group flex flex-col pappy-block">
    <label htmlFor={name} className="sm:text-base text-sm text-gray-500 font-medium text-left pappy-block">
      {label}
    </label>
    <textarea
      rows="6"
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={handleBlur}
      className="form-textarea py-2 px-4 w-full resize-none text-left text-md rounded 
        hover:shadow-none focus:outline-none focus:border-primary-800 focus:shadow-xl
      hover:border-primary-800 mt-3 placeholder-opacity-75 pappy-block"
      style={style}
    />
  </div>
);
