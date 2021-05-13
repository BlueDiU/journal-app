import React from 'react';
import dayjs from 'dayjs';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

function JournalEntry({ id, date, title, body, url }) {
  const dispatch = useDispatch();

  dayjs.extend(advancedFormat);
  const noteDate = dayjs(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div
      className="journal__entry animate__animated animate__jello"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
            verticalAlign: 'middle',
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>

        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>

        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
}

export default JournalEntry;
