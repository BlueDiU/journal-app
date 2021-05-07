import React from 'react';
import JournalEntries from './JournalEntries';

function Sidebar() {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Josue</span>
        </h3>

        <button className="btn" style={{ letterSpacing: '1px' }}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-4x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
}

export default Sidebar;
