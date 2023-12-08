import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default class Navbar extends Component {         // class component and inheritance is used here, that is extends.

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Link is the react router component that used to link to paths same as a tag in html */}
                    <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">ExcerTracker</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Exercises</Link>
                    <Link to="/create" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Create Exercise Log</Link>
                    <Link to="/user" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Create User</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">ExcerTracker</Link>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Exercises</Link>
              <Link to="/create" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Create Exercise Log</Link>
              <Link to="/user" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Create User</Link>
            </div>
          </div>
        </nav>

      </nav>
      
    );
  }
}
