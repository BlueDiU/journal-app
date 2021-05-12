import React from 'react';
import dayjs from 'dayjs';

import { useDispatch, useSelector } from 'react-redux';
import {
  startSaveNote,
  startUploading,
} from '../../actions/notes';

function NotesAppBar() {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const noteDate = dayjs(note.date);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>
        {noteDate.format('dddd')}, {noteDate.format('YY')}
        {noteDate.format('MMMM')}
      </span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NotesAppBar;
