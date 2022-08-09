import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotesAsync, selectNotes, addNoteAsync } from "./app/noteSlice";
import { selectToken, selectStaff } from "./app/loginSlice";
const Note = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const notes = useSelector(selectNotes);
  const staff = useSelector(selectStaff);
  const [body, setBody] = useState("");

  return (
    <div>
      is staff:{staff ? "true" : "falseeeeee"}
      {notes.length > 0 &&
        notes.map((note) => (
          <div>
            {note.body} {note.user}{" "}
          </div>
        ))}
      <button onClick={() => dispatch(getNotesAsync(token))}>get Data</button>
      <button
        onClick={() =>
          dispatch(addNoteAsync({ token: token, body: body, id: 9 }))
        }
      >
        add Data
      </button>
      Body:<input onChange={(e) => setBody(e.target.value)}></input>
    </div>
  );
};

export default Note;
