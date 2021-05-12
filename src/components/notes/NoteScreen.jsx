import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

function NoteScreen() {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, reset] = useForm(note);

  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title..."
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          className="notes__textarea"
          placeholder="What happend today"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              src="https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg"
              alt="hola"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteScreen;
