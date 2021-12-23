import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import './custom.css';

export const TYPE = {
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  DARK: 'dark',
  INFO: 'info',
};

export const Alert = (message, type, options = {}) => {
  switch (type) {
    case TYPE.ERROR:
      toast.error(message, options);
      break;
    case TYPE.SUCCESS:
      toast.success(message, options);
      break;
    case TYPE.WARNING:
      toast.warning(message, options);
      break;
    case TYPE.DARK:
      toast.dark(message, options);
      break;
    case TYPE.INFO:
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};
