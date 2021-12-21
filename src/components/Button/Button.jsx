import './button.css';

const Button = ({children, className}) => (
  <div className="relative">
    <button type="submit" className={`default-btn ${className}`}>
      {children}
    </button>
  </div>
);

export default Button;