import { toast } from 'react-toastify';

function log(message) {
  console.log(message);
  toast.log(message);
}
function error(message) {
  console.error(message);
  toast.error(message);
}

export default {
  log,
  error
};
