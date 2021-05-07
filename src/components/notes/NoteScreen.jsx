import React from 'react';
import NotesAppBar from './NotesAppBar';

function NoteScreen() {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title..."
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          className="notes__textarea"
          placeholder="What happend today"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg"
            alt="hola"
          />
        </div>
      </div>
    </div>
  );
}

export default NoteScreen;
