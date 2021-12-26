const Button = ({children, className, disabled}) => (
  <div className="relative">
    <button type="submit" className={`default-btn ${className}`} disabled={disabled}>
      {children}
    </button>
  </div>
);

export default Button;