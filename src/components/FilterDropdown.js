import React, { useState } from 'react';

const FilterDropdown = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (field, value) => {
    onFilterChange(field, value);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Filters
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <input
              type="text"
              value={filters.firstName}
              onChange={(e) => handleFilterChange('firstName', e.target.value)}
              placeholder="First Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm mb-2"
            />
            <input
              type="text"
              value={filters.lastName}
              onChange={(e) => handleFilterChange('lastName', e.target.value)}
              placeholder="Last Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm mb-2"
            />
            <input
              type="text"
              value={filters.phoneNo}
              onChange={(e) => handleFilterChange('phoneNo', e.target.value)}
              placeholder="Phone Number"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 sm:text-sm mb-2"
            />
            <button
              type="button"
              onClick={toggleDropdown}
              className="w-full text-center bg-blue-500   text-white hover:bg-blue-600 font-bold py-2 px-4 rounded"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
