

import UserService from './service/UserService';


function Logout() {
  
  const handleLogout = () => {
    
    const confirmLogout = window.confirm('Are you want to logout');
    if (confirmLogout) {
      UserService.logout();
    };
    
  }
  return (
    handleLogout()
  )
}

export default Logout