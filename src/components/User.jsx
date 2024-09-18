import React, { useEffect, useState } from 'react';
import UserService from './service/UserService';
import { Link } from 'react-router-dom';
import '../styles/User.css';

function User() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'userId', direction: 'ascending' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getAllUsers(token);
      console.log(response);

      if (response && response.oursersList) {
        setUsers(response.oursersList);
      } else {
        console.error('Invalid response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      const token = localStorage.getItem('token');

      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };


  
  // Determine sort classes
  const getSortClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? 'sort-asc' : 'sort-desc';
    }
    return '';
  };
  

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    Object.values(user).some(val =>
      String(val).toLowerCase().includes(filter.toLowerCase())
    )
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='user'>
      <h2>User Management Page</h2>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={handleFilterChange}
        className='filter'
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('userId')} className={getSortClass('userId')}>Id</th>
            <th onClick={() => handleSort('firstName')} className={getSortClass('firstName')}>FirstName</th>
            <th onClick={() => handleSort('lastName')} className={getSortClass('lastName')}>LastName</th>
            <th onClick={() => handleSort('userPhone')} className={getSortClass('userPhone')}>UserPhone</th>
            <th onClick={() => handleSort('userAddress')} className={getSortClass('userAddress')}>UserAddress</th>
            <th onClick={() => handleSort('username')} className={getSortClass('username')}>UserName</th>
            <th onClick={() => handleSort('userEmail')} className={getSortClass('userEmail')}>UserEmail</th>
            <th onClick={() => handleSort('userRole')} className={getSortClass('userRole')}>UserRole</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.userPhone}</td>
              <td>{user.userAddress}</td>
              <td>{user.username}</td>
              <td>{user.userEmail}</td>
              <td>{user.userRole}</td>
              <td>
                <button className='delete-button' onClick={() => deleteUser(user.userId)}>Delete</button>
                <button className='delete-update'>
                  <Link to={`/update-user/${user.userId}`}>Update</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <Link onClick={() => paginate(number)} to='#' className='page-link'>
              {number}
            </Link >
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default User;
