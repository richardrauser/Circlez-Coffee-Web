import { toast } from 'react-toastify';

export function showErrorMessage(message, onClick) {
  console.log('Displaying error message: ' + message);
  const hash = message;
  console.log('Hash: ' + hash);

  toast.error(message, {
    toastId: hash,
    autoClose: 5000,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClick: onClick
  });
}
