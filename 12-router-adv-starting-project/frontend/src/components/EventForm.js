import { useNavigate } from 'react-router-dom';

import classes from './EventForm.module.css';
import { useState } from 'react';

function EventForm({ method, event }) {
  // const [title, setTitle] = useState(event.title)
  // const [image, setImage] = useState(event.image)
  // const [date, setDate] = useState(event.date)
  // // const [date,setDate]=useState(event.date)
  // const [description, setDescription] = useState(event.description)
  console.log(event)
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : ''} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" defaultValue={event ? event.image : ''} name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" defaultValue={event ? event.date : ''} name="date" required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event ? event.description : ''} required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
