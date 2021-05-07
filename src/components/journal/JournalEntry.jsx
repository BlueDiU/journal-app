import React from 'react';

function JournalEntry() {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://miro.medium.com/max/2560/1*wFL3csJ96lQpY0IVT9SE3w.jpeg)',
          verticalAlign: 'middle',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Test</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Soluta, sequi.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
}

export default JournalEntry;
