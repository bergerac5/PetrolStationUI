

import { Navigate } from 'react-router-dom';
import UserService from '../service/UserService';
function Logouts() {
  const handleLogout = () => {
    
    const confirmLogout = window.confirm('Are you want to logout');
    if (confirmLogout) {
      UserService.logout();
    };
    Navigate('/src/components/LoginRegister.jsx')
  }
  return (
    handleLogout()
  )
}


export default Logouts