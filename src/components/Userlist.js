import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Pagination from './pagination';
import FilterDropdown from './FilterDropdown';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalUser, setTotalUser] = useState(1);
  const [filters, setFilters] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
  });

  useEffect(() => {
    fetchUsers();
  }, [currentPage, filters]);

  const fetchUsers = async () => {
    const token = localStorage.getItem('authtoken'); 
    try {
      let url = `https://mmfinfotech.co/machine_test/api/userList?page=${currentPage}&perPage="100"&firstName=${filters.firstName}&lastName=${filters.lastName}&id=${filters.id}&phoneNo=${filters.phoneNo}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = await response.json();
      setUsers(result.userList);
      setTotalPages(result.lastPage);
      setTotalUser(result.total);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(filters.firstName.toLowerCase()) &&
    user.last_name.toLowerCase().includes(filters.lastName.toLowerCase()) &&
    user.phone_no.includes(filters.phoneNo)
  );

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">User List</h1>
          <span className="text-sm text-black">Total Users: {totalUser}</span>
        </div>

        <div className="mt-4 mb-4 flex justify-end">
          <FilterDropdown filters={filters} onFilterChange={handleFilterChange} />
        </div>

        <div className="flex-grow overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile No
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.first_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.last_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone_no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </Layout>
  );
};
